import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_this from "./glossary"
export namespace A {
    
    export type log = g_common.SYNC.I3.String
    
    export type logError = g_common.SYNC.I3.String
    
    export type setExitCodeToFailed = g_common.SYNC.I3.Null
    
    export type writeToStdErr = g_common.SYNC.I3.String
    
    export type writeToStdOut = g_common.SYNC.I3.String
}

export type API = {
    log: A.log
    logError: A.logError
    setExitCodeToFailed: A.setExitCodeToFailed
    writeToStdErr: A.writeToStdErr
    writeToStdOut: A.writeToStdOut
}