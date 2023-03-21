import { A } from "../api.generated"

export const $$: A.createErrorLogger = () => {
    return ($is) => {
        return {
            'data': ($) => {
                console.error($)
            },
            'end': () => { }
        }
    }
}