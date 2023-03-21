import { A } from "../api.generated"

export const $$: A.createErrorLogger = () => {
    return () => {
        return {
            'data': ($) => {
                console.error($)
            },
            'end': () => { }
        }
    }
}