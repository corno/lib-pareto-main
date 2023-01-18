import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"

import * as mcommon from "glo-pareto-common"

export type Clog = pt.Procedure<mcommon.TString>

export type ClogError = pt.Procedure<mcommon.TString>

export type CsetExitCodeToFailed = pt.Procedure<mcommon.TNull>

export type CwriteToStdErr = pt.Procedure<mcommon.TString>

export type CwriteToStdOut = pt.Procedure<mcommon.TString>

export type API = {
    log: Clog
    logError: ClogError
    setExitCodeToFailed: CsetExitCodeToFailed
    writeToStdErr: CwriteToStdErr
    writeToStdOut: CwriteToStdOut
}