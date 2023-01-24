import * as pt from 'pareto-core-types'
import * as mcommon from "glo-pareto-common"

export type TArguments = pt.Array<string>

export type TMainData = {
    readonly 'arguments': TArguments
}

export type FMain = ($: TMainData,) => void