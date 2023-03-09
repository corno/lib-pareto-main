

import { setExitCodeToFailed } from "../api.generated"

export const $$: setExitCodeToFailed = ($) => {
    process.exitCode = 1
}