import * as pd from 'pareto-core-data'

import {
    aconstructor, aInterfaceMethod, aInterfaceReference, array, externalTypeReference, group, imp, member, ref, sconstructor, sInterfaceMethod, sInterfaceReference, streamconsumer, string, type, typeReference
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
            "Log": streamconsumer(
                aInterfaceMethod(externalTypeReference("common", "String")),
                aInterfaceMethod(null),
            ),
            "Signal": streamconsumer(
                aInterfaceMethod(null),
                aInterfaceMethod(null),
            ),
            "Main": aInterfaceMethod(typeReference("MainData")),
        }),
        'algorithms': d({
            "CreateSignaler": aconstructor(aInterfaceReference("Signal"), {}),
            "CreateStringLogger": aconstructor(aInterfaceReference("Log"), {}),
            "CreateMain": aconstructor(sInterfaceReference("Main"), {}),
        }),
    },
    'synchronous': {
        'interfaces': d({
        }),
        'algorithms': d({
        }),
    },
}