import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace GArguments {}
export type GArguments = pt.Array<string>
export type UArguments = GArguments

export namespace GMainData {}
export type GMainData = {
    readonly 'arguments': UArguments
}
export type UMainData = GMainData