import { A } from "../api.generated"

export const $$: A.setExitCodeToFailed = () => {
    return () => {
        return {
            'data': () => {
                process.exitCode = 1
            },
            'end': () => { }
        }
    }
}