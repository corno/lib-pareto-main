import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"

export namespace B {
    
    export type Main = ($: T.MainData, ) => void
}

export namespace C {
    
    export type Main = ($b: B.Main) => void
}

export namespace F {}