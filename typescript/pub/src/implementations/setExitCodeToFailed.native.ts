import { A } from "../api.generated"

export const $$: A.setExitCodeToFailed = () => {
    return ($is) => {
        return ($) => {
            process.exitCode = 1
        }
    }
}