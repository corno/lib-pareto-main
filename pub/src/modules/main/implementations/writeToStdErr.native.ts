import * as pi from 'pareto-core-internals'

import * as api from "../api"

export const $$: api.CwriteToStdErr = ($) => {
    pi.panic("IMPLEMENT main:writeToStdErr")
}