import { API } from "./api"
import { $$ as ilog } from "./implementations/log.native"
import { $$ as ilogError } from "./implementations/logError.native"
import { $$ as isetExitCodeToFailed } from "./implementations/setExitCodeToFailed.native"
import { $$ as iwriteToStdErr } from "./implementations/writeToStdErr.native"
import { $$ as iwriteToStdOut } from "./implementations/writeToStdOut.native"

export const $a: API = {
    'log': ilog,
    'logError': ilogError,
    'setExitCodeToFailed': isetExitCodeToFailed,
    'writeToStdErr': iwriteToStdErr,
    'writeToStdOut': iwriteToStdOut,
}