import { yellow, dim, green, red } from 'colorette';
import { basename, dirname, extname, join } from 'path';
import { Options } from './types';
import matter from 'gray-matter';
import fsExtra from 'fs-extra';
import { LOG_PREFIX } from './utils';
import { LocaleConfigs } from '@ruabick/utils';

export async function handleCopy(
  dir: string,
  path: string,
  {
    options,
    localeConfigs,
  }: {
    options: Required<Options>;
    localeConfigs: LocaleConfigs;
  },
) {
  const { tempDir } = options;

  let destPath;
  if (!path.endsWith('.md')) {
    destPath = join(tempDir, path.replace(new RegExp(`^${dir}`), ''));
    await fsExtra.copy(path, destPath);
  } else {
    const { finnalPath, finnalContent } = await resolveFrontmatter(
      path,
      tempDir,
      dir,
    );

    const fileInLangDir = handleLangSuffix(finnalPath, localeConfigs);

    destPath = join(tempDir, fileInLangDir);

    await fsExtra.ensureFile(destPath);
    await fsExtra.writeFile(destPath, finnalContent);
  }
  console.log(`${LOG_PREFIX} ${green('copy')} ${path} → ${destPath}`);
}

const checkDestFileExist = async (path: string, destPath) => {
  const exist = await fsExtra.pathExists(destPath);
  if (exist) {
    console.error(
      `${LOG_PREFIX} Error: ${red(
        `Trying to copy "${yellow(path)}" to "${yellow(
          destPath,
        )}", but "${yellow(destPath)}" already exists.`,
      )}`,
    );
  }
  return !exist;
};

async function resolveFrontmatter(path, tempDir, dir) {
  const originalContent = await fsExtra.readFile(path, "utf-8");
  const { content, data: frontmatter } = matter(originalContent);
  const realPath = path;
  let finnalPath;
  let mappingPath = frontmatter.mapping?.path ?? frontmatter.map?.path;
  if (mappingPath) {
    if (!mappingPath.endsWith(".md")) {
      mappingPath = join(mappingPath, basename(path));
    }
    finnalPath = mappingPath;
  } else {
    finnalPath = path.replace(new RegExp(`^${dir}`), "");
  }
  const str = path;
  const isCN = str.includes("zh-CN");
  const base = "https://github.com/InhiblabCore/vue-hooks-plus/tree/master/packages/hooks/";
  const sourceShow = frontmatter?.source?.show ?? true;
  const sourcePath = frontmatter?.source?.path ?? `${base}${str.slice(0, str.lastIndexOf("/"))}/index.ts`;
  const sourceDocPath = frontmatter?.source?.docPath ?? `${base}${path}`;
  const sourceDemoPath = frontmatter?.source?.demoPath ?? `${base}${str.slice(0, str.lastIndexOf("/"))}/demo`;
  const showSource = frontmatter?.source?.showSource ?? true;
  const showDocs = frontmatter?.source?.showDocs ?? true;
  const showDemo = frontmatter?.source?.showDemo ?? true;
  const links = [
    showSource ? [isCN ? "\u6E90\u7801" : "Source", sourcePath] : void 0,
    showDocs ? [isCN ? "\u6587\u6863" : "Docs", sourceDocPath] : void 0,
    showDemo ? [isCN ? "\u793A\u4F8B" : "Demo", sourceDemoPath] : void 0
  ].filter((i) => i).map((i) => `[${i[0]}](${i[1]})`).join(" \u2022 ");
  const sourceSection = `## Source

${links}
`;
  const processContent = mappingPath && sourceShow ? `${content}

${sourceSection}` : content;
  const finnalContent = matter.stringify(processContent, {
    ...frontmatter ?? {},
    realPath
  });
  return {
    finnalPath,
    finnalContent
  };
}
function handleLangSuffix(path, localeConfigs) {
  const { defaultLang, langToPathMap } = localeConfigs;
  if (!Object.keys(langToPathMap).length) {
    return path;
  }
  const fileName = basename(path);
  const dir = dirname(path);
  const fileNameWithoutMd = fileName.replace(/\.md$/, "");
  const fileExtname = extname(fileNameWithoutMd);
  const langSuffix = fileExtname.slice(1) || defaultLang;
  const langPath = langToPathMap[langSuffix];
  if (!langPath) {
    console.log(
      yellow(
        `${fileName} has a ${fileExtname} suffix. But ${langSuffix} not defined in locales`
      ) + dim(` .vitepress.config.js`)
    );
    return path;
  }
  const fileNameWithoutLangSuffix = fileNameWithoutMd.slice(0, -fileExtname.length || void 0) + ".md";
  return join(langPath, dir, fileNameWithoutLangSuffix);
}