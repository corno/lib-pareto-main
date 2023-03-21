import { A } from "../api.generated"

export const $$: A.createLogger = () => {
    return ($is) => {
        return {
            'data': ($) => {
                console.log($)
            },
            'end': () => { }
        }
    }
}