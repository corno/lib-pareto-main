import { A } from "../api.generated"

export const $$: A.setExitCodeToFailed = ($c) => {
    $c(($) => {
        process.exitCode = 1
    })
}