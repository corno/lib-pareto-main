import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_this from "./glossary"

export type log = ($c: g_common.C.String) => void

export type logError = ($c: g_common.C.String) => void

export type setExitCodeToFailed = ($c: g_common.C.Null) => void

export type writeToStdErr = ($c: g_common.C.String) => void

export type writeToStdOut = ($c: g_common.C.String) => void

export type API = {
    log: log
    logError: logError
    setExitCodeToFailed: setExitCodeToFailed
    writeToStdErr: writeToStdErr
    writeToStdOut: writeToStdOut
}