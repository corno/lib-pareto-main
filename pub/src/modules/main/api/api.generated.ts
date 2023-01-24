import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"

import * as mcommon from "glo-pareto-common"

export type Clog = mcommon.FLog

export type ClogError = mcommon.FLog

export type CsetExitCodeToFailed = glo.FSignal

export type CwriteToStdErr = mcommon.FLog

export type CwriteToStdOut = mcommon.FLog

export type API = {
    log: Clog
    logError: ClogError
    setExitCodeToFailed: CsetExitCodeToFailed
    writeToStdErr: CwriteToStdErr
    writeToStdOut: CwriteToStdOut
}