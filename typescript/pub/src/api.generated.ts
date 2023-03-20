import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_this from "./glossary"

export namespace A {
    
    export type log = g_this.ASYNC.A.C.CreateStringLogger
    
    export type logError = g_this.ASYNC.A.C.CreateStringLogger
    
    export type setExitCodeToFailed = g_this.ASYNC.A.C.CreateSignaler
    
    export type writeToStdErr = g_this.ASYNC.A.C.CreateStringLogger
    
    export type writeToStdOut = g_this.ASYNC.A.C.CreateStringLogger
}

export type API = {
    log: A.log
    logError: A.logError
    setExitCodeToFailed: A.setExitCodeToFailed
    writeToStdErr: A.writeToStdErr
    writeToStdOut: A.writeToStdOut
}