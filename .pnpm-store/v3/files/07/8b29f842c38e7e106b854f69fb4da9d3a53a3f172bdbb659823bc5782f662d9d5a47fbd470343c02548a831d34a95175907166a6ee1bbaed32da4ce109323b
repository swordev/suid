/**
 * Loggin functions.
 */
import { IgnoredUpgrade, Index, Options, Version, VersionSpec } from './types';
/**
 * Prints a message if it is included within options.loglevel.
 *
 * @param options    Command line options. These will be compared to the loglevel parameter to determine if the message gets printed.
 * @param message    The message to print
 * @param loglevel   silent|error|warn|info|verbose|silly
 * @param method     The console method to call. Default: 'log'.
 */
export declare function print(options: Options, message: any, loglevel?: 'silent' | 'error' | 'warn' | 'info' | 'verbose' | 'silly' | null, method?: 'log' | 'warn' | 'info' | 'error'): void;
/** Pretty print a JSON object. */
export declare function printJson(options: Options, object: any): void;
/**
 * @param options - Options from the configuration
 * @param args - The arguments passed to the function.
 * @param args.current - The current packages.
 * @param args.upgraded - The packages that should be upgraded.
 * @param args.numUpgraded - The number of upgraded packages
 * @param args.total - The total number of all possible upgrades
 * @param args.ownersChangedDeps - Boolean flag per dependency which announces if package owner changed.
 */
export declare function printUpgrades(options: Options, { current, latest, upgraded, numUpgraded, total, ownersChangedDeps }: {
    current: Index<VersionSpec>;
    latest?: Index<Version>;
    upgraded: Index<VersionSpec>;
    numUpgraded: number;
    total: number;
    ownersChangedDeps?: Index<boolean>;
}): void;
/** Print updates that were ignored due to incompatible peer dependencies. */
export declare function printIgnoredUpdates(options: Options, ignoredUpdates: Index<IgnoredUpgrade>): void;
