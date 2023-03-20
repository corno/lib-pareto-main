import * as pd from 'pareto-core-data'

import { algorithm, aconstructor } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "log": algorithm(aconstructor("this", {}, "CreateStringLogger")),
        "logError": algorithm(aconstructor("this", {}, "CreateStringLogger")),
        "setExitCodeToFailed": algorithm(aconstructor("this", {}, "CreateSignaler")),
        "writeToStdErr": algorithm(aconstructor("this", {}, "CreateStringLogger")),
        "writeToStdOut": algorithm(aconstructor("this", {}, "CreateStringLogger")),
    }),
}