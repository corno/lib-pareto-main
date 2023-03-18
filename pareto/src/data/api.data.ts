import * as pd from 'pareto-core-data'

import { algorithm, sinterface } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "log": algorithm(sinterface("common", {}, "String")),
        "logError": algorithm(sinterface("common", {}, "String")),
        "setExitCodeToFailed": algorithm(sinterface("common", {}, "Null")),
        "writeToStdErr": algorithm(sinterface("common", {}, "String")),
        "writeToStdOut": algorithm(sinterface("common", {}, "String")),
    }),
}