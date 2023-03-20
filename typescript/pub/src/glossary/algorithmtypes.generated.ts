import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
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