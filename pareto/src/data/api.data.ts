import * as pd from 'pareto-core-data'

import { algorithm, aconstructor } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "log": algorithm(aconstructor("common", {}, "String")),
        "logError": algorithm(aconstructor("common", {}, "String")),
        "setExitCodeToFailed": algorithm(aconstructor("common", {}, "Null")),
        "writeToStdErr": algorithm(aconstructor("common", {}, "String")),
        "writeToStdOut": algorithm(aconstructor("common", {}, "String")),
    }),
}