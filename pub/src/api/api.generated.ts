import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"

import * as gcommon from "glo-pareto-common"

export type Clog = gcommon.FLog

export type ClogError = gcommon.FLog

export type CsetExitCodeToFailed = gcommon.FSignal

export type CwriteToStdErr = gcommon.FLog

export type CwriteToStdOut = gcommon.FLog

export type API = {
    log: Clog
    logError: ClogError
    setExitCodeToFailed: CsetExitCodeToFailed
    writeToStdErr: CwriteToStdErr
    writeToStdOut: CwriteToStdOut
}