import * as pl from 'pareto-core-lib'

import * as api from "../api"

export const $$: api.CsetExitCodeToFailed = ($) => {
    process.exitCode = 1
}