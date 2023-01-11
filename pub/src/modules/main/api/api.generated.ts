import * as pt from "pareto-core-types"

import * as glo from "./types.generated"


export type CsetExitCodeToFailed = pt.Procedure<null>

export type CwriteToStdErr = pt.Procedure<string>

export type CwriteToStdOut = pt.Procedure<string>

export type API = {
    setExitCodeToFailed: CsetExitCodeToFailed
    writeToStdErr: CwriteToStdErr
    writeToStdOut: CwriteToStdOut
}