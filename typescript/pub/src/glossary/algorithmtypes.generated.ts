import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {
        
        export type Log = {
            'data': ($: g_common.T.String, ) => void
            'end': () => void
        }
        
        export type Main = ($: T.MainData, ) => void
        
        export type Signal = {
            'data': () => void
            'end': () => void
        }
    }
    
    export namespace A {
        
        
        export namespace C {
            export type CreateMain = ($is: null) => ASYNC.I.Main
        }
        
        
        export namespace C {
            export type CreateSignaler = ($is: null) => ASYNC.I.Signal
        }
        
        
        export namespace C {
            export type CreateStringLogger = ($is: null) => ASYNC.I.Log
        }
    }
}

export namespace SYNC {
    
    export namespace I {}
    
    export namespace IW {}
    
    export namespace A {}
}