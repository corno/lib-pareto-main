

import { CsetExitCodeToFailed } from "../api"

export const $$:CsetExitCodeToFailed = ($) => {
    process.exitCode = 1
}