import { API } from "./api"
import { $$ as ilog } from "./implementations/log.p"
import { $$ as ilogError } from "./implementations/logError.p"
import { $$ as isetExitCodeToFailed } from "./implementations/setExitCodeToFailed.p"
import { $$ as iwriteToStdErr } from "./implementations/writeToStdErr.p"
import { $$ as iwriteToStdOut } from "./implementations/writeToStdOut.p"

export const $a: API = {
    'log': ilog,
    'logError': ilogError,
    'setExitCodeToFailed': isetExitCodeToFailed,
    'writeToStdErr': iwriteToStdErr,
    'writeToStdOut': iwriteToStdOut,
}