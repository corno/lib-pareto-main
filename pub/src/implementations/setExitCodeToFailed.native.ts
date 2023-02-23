import * as mapi from "../api"

export const $$: mapi.CsetExitCodeToFailed = ($) => {
    process.exitCode = 1
}