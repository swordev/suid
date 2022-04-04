interface Options {
    configFileName?: string;
    configFilePath?: string;
    packageFile?: string;
}
/**
 * Loads the .ncurc config file.
 *
 * @param [cfg]
 * @param [cfg.configFileName=.ncurc]
 * @param [cfg.configFilePath]
 * @param [cfg.packageFile]
 * @returns
 */
declare function getNcuRc({ configFileName, configFilePath, packageFile }?: Options): {
    args: string[];
    config: {};
    filePath: string;
} | null;
export default getNcuRc;
