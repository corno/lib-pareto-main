

import { setExitCodeToFailed } from "../api.generated"

export const $$: setExitCodeToFailed = ($, $c) => {
    $c(($) => {
        process.exitCode = 1
    })
}