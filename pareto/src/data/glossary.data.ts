import * as pd from 'pareto-core-data'

import {
    aconstructor, aInterfaceMethod, aInterfaceReference, array, externalTypeReference, group, imp, member, ref, sInterfaceMethod, string, type, typeReference
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
        'interfaces': d({
            "Log": aInterfaceMethod(externalTypeReference("common", "String")),
            "Signal": aInterfaceMethod(externalTypeReference("common", "Null")),
        }),
        'algorithms': d({
            "CreateSignaler": aconstructor(aInterfaceReference("Signal"), {}),
            "CreateStringLogger": aconstructor(aInterfaceReference("Log"), {}),
        }),
        
    },
    'synchronous': {
        'interfaces': d({
            "Main": sInterfaceMethod(typeReference("MainData")),
        }),
        'algorithms': d({}),
        
    },
}