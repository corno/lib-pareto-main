import * as pd from 'pareto-core-data'

import {
    string, member, group,
    array,
    typeReference,
    type,
    ref,
    imp,
    sInterfaceMethod,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "common": imp({}),
    }),
    'types': d({
        "Arguments": type(array(string())),
        "MainData": type(group({
            "arguments": member(ref(typeReference("Arguments"))),
        })),
    }),
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
        
    },
    'synchronous': {
        'interfaces': d({
            "Main": sInterfaceMethod(typeReference("MainData")),
        }),
        'algorithms': d({}),
        
    },
}