import { A } from "../api.generated"

export const $$: A.createLogger = () => {
    return () => {
        return {
            'data': ($) => {
                console.log($)
            },
            'end': () => { }
        }
    }
}