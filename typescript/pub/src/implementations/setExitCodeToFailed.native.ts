

import { setExitCodeToFailed } from "../definition/api.generated"

export const $$: setExitCodeToFailed = ($) => {
    process.exitCode = 1
}