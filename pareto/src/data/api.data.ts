import * as pd from 'pareto-core-data'

import { algorithm, aconstructor } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createLogger": algorithm(aconstructor("this", {}, "CreateStringLogger")),
        "createErrorLogger": algorithm(aconstructor("this", {}, "CreateStringLogger")),
        "setExitCodeToFailed": algorithm(aconstructor("this", {}, "CreateSignaler")),
        "createStdErrWriter": algorithm(aconstructor("this", {}, "CreateStringLogger")),
        "createStdOutWriter": algorithm(aconstructor("this", {}, "CreateStringLogger")),
    }),
}