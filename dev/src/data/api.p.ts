import * as pr from "pareto-core-raw"
import {
    externalReference as er,
    string as str,
    nullType,
    type,
    reference as ref,
    boolean as bln,
    number as nr,
    nested,
    optional,
    array,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"
import { dictionary, group, member, taggedUnion, types, _function } from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"
import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary


export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({}),
        'namespace': {
            'types': types({
                "Arguments": array(str()),
                "MainData": group({
                    "arguments": member(ref("Arguments"))
                })
            }),
            'interfaces': d({}),

        },
        'functions': d({}),
        'callbacks': d({}),
        'pipes': d({}),
    },
    'api': {
        'imports': d({}),
        'algorithms': d({
            "setExitCodeToFailed": {
                'definition': ['procedure', ['null', null]],
                'type': ['reference', null],
            },
            "writeToStdErr": {
                'definition': ['procedure', ['type', string()]],
                'type': ['reference', null],
            },
            "writeToStdOut": {
                'definition': ['procedure', ['type', string()]],
                'type': ['reference', null],
            },
        })
    },
}