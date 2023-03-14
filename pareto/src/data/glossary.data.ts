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
    builderMethod,
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
        'builders': d({
            "Main": builderMethod(typeReference("MainData")),


        }),
        'functions': d<g_glossary.T.Glossary._ltype.synchronous.functions.D<pd.SourceLocation>>({}),
    }],
}