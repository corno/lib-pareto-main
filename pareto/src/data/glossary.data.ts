import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    sdata,
    sfunc,
    type,
    optional,
    number,
    builderReference,
    ref,
    externalTypeReference,
    imp,
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
    'type': ['synchronous', {
        'builders': d({}),
        'functions': d({
            "Main": sfunc(typeReference("MainData"), null, null, null),
            "TEMPLog": sfunc(externalTypeReference("common", "Null"), builderReference("common", "String"), null, null),
            "TEMPSignal": sfunc(externalTypeReference("common", "Null"), builderReference("common", "Null"), null, null),
        }),
    }],
}