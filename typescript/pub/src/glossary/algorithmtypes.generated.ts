import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace C {}
    
    export namespace F {}
}

export namespace SYNC {
    
    export namespace I {
        
        export type Main = ($: T.MainData, ) => void
    }
    
    export namespace I2 {
        
        export type Main = ($b: I.Main) => void
    }
    
    export namespace I3 {
        
        export type Main = ($c: I2.Main) => void
    }
    
    export namespace C {}
    
    export namespace C2 {}
    
    export namespace C3 {}
    
    export namespace F {}
}