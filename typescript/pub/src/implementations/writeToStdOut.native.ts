import * as n_process from "process"

import { A } from "../api.generated"

export const $$: A.writeToStdOut = ($is) => {
    return ($) => {
        n_process.stdout.write($)
    }
}