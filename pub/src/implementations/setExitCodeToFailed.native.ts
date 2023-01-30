import * as api from "../api"

export const $$: api.CsetExitCodeToFailed = ($) => {
    process.exitCode = 1
}