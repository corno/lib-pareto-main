import * as pt from "pareto-core-types"

import * as glo from "./types.generated"

import * as mcommon from "glo-pareto-common"

export type CsetExitCodeToFailed = pt.Procedure<mcommon.TNull>

export type CwriteToStdErr = pt.Procedure<mcommon.TString>

export type CwriteToStdOut = pt.Procedure<mcommon.TString>

export type API = {
    setExitCodeToFailed: CsetExitCodeToFailed
    writeToStdErr: CwriteToStdErr
    writeToStdOut: CwriteToStdOut
}