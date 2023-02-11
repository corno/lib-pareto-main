import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace T {
    
    export namespace Arguments {
        
        export type A = string
    }
    
    export type Arguments = pt.Array<string>
    
    export namespace MainData {
        
        export type arguments = T.Arguments
    }
    
    export type MainData = {
        readonly 'arguments': T.Arguments
    }
}