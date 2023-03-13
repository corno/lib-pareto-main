import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export type log = g_this.F.TEMPLog

export type logError = g_this.F.TEMPLog

export type setExitCodeToFailed = g_this.F.TEMPSignal

export type writeToStdErr = g_this.F.TEMPLog

export type writeToStdOut = g_this.F.TEMPLog

export type API = {
    log: log
    logError: logError
    setExitCodeToFailed: setExitCodeToFailed
    writeToStdErr: writeToStdErr
    writeToStdOut: writeToStdOut
}