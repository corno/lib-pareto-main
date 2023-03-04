import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export type log = g_common.F.Log

export type logError = g_common.F.Log

export type setExitCodeToFailed = g_common.F.Signal

export type writeToStdErr = g_common.F.Log

export type writeToStdOut = g_common.F.Log

export type API = {
    log: log
    logError: logError
    setExitCodeToFailed: setExitCodeToFailed
    writeToStdErr: writeToStdErr
    writeToStdOut: writeToStdOut
}