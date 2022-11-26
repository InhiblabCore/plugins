declare const _sfc_main: import("vue").DefineComponent<{
    code: {
        type: StringConstructor;
        required: true;
    };
    highlightedCode: {
        type: StringConstructor;
        required: true;
    };
    title: {
        type: StringConstructor;
        required: false;
    };
    desc: {
        type: StringConstructor;
        required: false;
    };
    lang: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    defaultExpand: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    importMap: {
        type: ObjectConstructor;
        required: false;
        default: () => {
            'vue-hooks-plus': string;
        };
    };
}, {
    props: {
        code: string;
        highlightedCode: string;
        title?: string | undefined;
        desc?: string | undefined;
        lang: string;
        defaultExpand: boolean;
        importMap: Record<string, string>;
    };
    showTip: import("vue").Ref<boolean>;
    copyCode: () => void;
    decodedCode: import("vue").ComputedRef<string>;
    decodedHighlightedCode: import("vue").ComputedRef<string>;
    expand: import("vue").Ref<boolean>;
    toggleExpand: () => boolean;
    copySvg: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    codeSvg: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    SfcPlayground: import("vue").DefineComponent<{
        content: {
            type: StringConstructor;
            required: true;
        };
        importMap: {
            type: ObjectConstructor;
            required: true;
        };
    }, {
        sfcBaseUrl: string;
        props: {
            content: string;
            importMap: Record<string, string>;
        };
        sfcPlaygroundUrl: import("vue").ComputedRef<string>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        content: {
            type: StringConstructor;
            required: true;
        };
        importMap: {
            type: ObjectConstructor;
            required: true;
        };
    }>>, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    code: {
        type: StringConstructor;
        required: true;
    };
    highlightedCode: {
        type: StringConstructor;
        required: true;
    };
    title: {
        type: StringConstructor;
        required: false;
    };
    desc: {
        type: StringConstructor;
        required: false;
    };
    lang: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    defaultExpand: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    importMap: {
        type: ObjectConstructor;
        required: false;
        default: () => {
            'vue-hooks-plus': string;
        };
    };
}>>, {
    lang: string;
    defaultExpand: boolean;
    importMap: Record<string, any>;
}>;
export default _sfc_main;
