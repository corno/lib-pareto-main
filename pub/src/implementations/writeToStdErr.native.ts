import * as pi from 'pareto-core-internals'

import * as mapi from "../api"

export const $$: mapi.CwriteToStdErr = ($) => {
    pi.panic("IMPLEMENT main:writeToStdErr")
}