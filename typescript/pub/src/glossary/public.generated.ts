import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"

export namespace B {}

export namespace F {
    
    export type Main = ($: T.MainData,) => void
    
    export type TEMPLog = ($: g_common.T.Null, $c: ($b: g_common.B.String) => void,) => void
    
    export type TEMPSignal = ($: g_common.T.Null, $c: ($b: g_common.B.Null) => void,) => void
}