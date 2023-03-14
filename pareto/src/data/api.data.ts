import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference, bldrRef } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.Module.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "log": algorithm(bldrRef("common", {}, "String")),
        "logError": algorithm(bldrRef("common", {}, "String")),
        "setExitCodeToFailed": algorithm(bldrRef("common", {}, "Null")),
        "writeToStdErr": algorithm(bldrRef("common", {}, "String")),
        "writeToStdOut": algorithm(bldrRef("common", {}, "String")),
    }),
}