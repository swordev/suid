export interface VMConfig {
    previewOrigin: string;
}
export declare class VM {
    private rdc;
    editor: any;
    preview: any;
    constructor(port: MessagePort, config: VMConfig);
    applyFsDiff(diff: {
        create: {
            [path: string]: string;
        };
        destroy: string[];
    }): Promise<{}>;
    getFsSnapshot(): Promise<{}>;
    getDependencies(): Promise<{}>;
}
