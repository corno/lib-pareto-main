import * as pl from 'pareto-core-lib'

import * as api from "../api"

export const $$: api.ClogError = ($) => {
    console.error($)
}