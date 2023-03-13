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
    reference,
    number,
    builderReference,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'types': d({
        "Arguments": type(array(string())),
        "MainData": type(group({
            "arguments": member(reference("Arguments")),
        })),
    }),
    'type': ['synchronous', {
        'builders': d({}),
        'functions': d({
            "Main": sfunc(typeReference("MainData"), null, null, null),
            "TEMPLog": sfunc(typeReference("common", "Null"), builderReference("common", "String"), null, null),
            "TEMPSignal": sfunc(typeReference("common", "Null"), builderReference("common", "Null"), null, null),
        }),
    }],
}