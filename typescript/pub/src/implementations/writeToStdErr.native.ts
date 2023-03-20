import * as n_process from "process"

import { A } from "../api.generated"

export const $$: A.writeToStdErr = () => {
    return ($is) => {
        return ($) => {
            n_process.stderr.write($)
        }
    }
}