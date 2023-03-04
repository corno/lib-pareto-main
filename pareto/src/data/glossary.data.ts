import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    data,
    func,
    type,
    optional,
    reference,
    number,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> =  {
    'parameters': d({}),
    'types': d({
        "Arguments": type(array(string())),
        "MainData": type(group({
            "arguments": member(reference("Arguments"))
        }))
    }),
    'builders': d({}),
    'interfaces': d({}),
    'functions': d({
        "Main": func(typeReference("MainData"), null, null, null)
    }),
}