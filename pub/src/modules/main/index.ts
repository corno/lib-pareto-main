import { API } from "./api"
import { isetExitCodeToFailed } from "./implementations/setExitCodeToFailed.p"
import { iwriteToStdErr } from "./implementations/writeToStdErr.p"
import { iwriteToStdOut } from "./implementations/writeToStdOut.p"

export * from "./api"

export const $a: API = {
    "setExitCodeToFailed": isetExitCodeToFailed,
    "writeToStdErr": iwriteToStdErr,
    "writeToStdOut": iwriteToStdOut,
}