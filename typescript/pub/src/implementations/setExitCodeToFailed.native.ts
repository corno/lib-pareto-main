import { A } from "../api.generated"

export const $$: A.setExitCodeToFailed = ($is) => {
    return ($) => {
        process.exitCode = 1
    }
}