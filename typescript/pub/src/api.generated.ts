import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_this from "./glossary"

export namespace A {
    
    export type log = g_common.ASYNC.A.C.String
    
    export type logError = g_common.ASYNC.A.C.String
    
    export type setExitCodeToFailed = g_common.ASYNC.A.C.Null
    
    export type writeToStdErr = g_common.ASYNC.A.C.String
    
    export type writeToStdOut = g_common.ASYNC.A.C.String
}

export type API = {
    log: A.log
    logError: A.logError
    setExitCodeToFailed: A.setExitCodeToFailed
    writeToStdErr: A.writeToStdErr
    writeToStdOut: A.writeToStdOut
}