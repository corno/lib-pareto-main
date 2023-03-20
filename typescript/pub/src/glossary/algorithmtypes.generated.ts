import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {
        
        export type Log = ($: g_common.T.String, ) => void
        
        export type Signal = ($: g_common.T.Null, ) => void
    }
    
    export namespace A {
        
        
        export namespace C {
            export type CreateSignaler = ($is: null) => ASYNC.I.Signal
        }
        
        
        export namespace C {
            export type CreateStringLogger = ($is: null) => ASYNC.I.Log
        }
    }
}

export namespace SYNC {
    
    export namespace I {
        
        export type Main = ($: T.MainData, ) => void
    }
    
    export namespace IW {
        
        export type Main = ($c: ($b: I.Main) => void) => void
    }
    
    export namespace A {}
}