import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_this from "./glossary"

export type log = ($c: ($b: g_common.B.String) => void) => void

export type logError = ($c: ($b: g_common.B.String) => void) => void

export type setExitCodeToFailed = ($c: ($b: g_common.B.Null) => void) => void

export type writeToStdErr = ($c: ($b: g_common.B.String) => void) => void

export type writeToStdOut = ($c: ($b: g_common.B.String) => void) => void

export type API = {
    log: log
    logError: logError
    setExitCodeToFailed: setExitCodeToFailed
    writeToStdErr: writeToStdErr
    writeToStdOut: writeToStdOut
}