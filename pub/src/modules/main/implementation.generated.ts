import { API } from "./api"
import { $$ as isetExitCodeToFailed } from "./implementations/setExitCodeToFailed.p"
import { $$ as iwriteToStdErr } from "./implementations/writeToStdErr.p"
import { $$ as iwriteToStdOut } from "./implementations/writeToStdOut.p"

export const $a: API = {
    'setExitCodeToFailed': isetExitCodeToFailed,
    'writeToStdErr': iwriteToStdErr,
    'writeToStdOut': iwriteToStdOut,
}