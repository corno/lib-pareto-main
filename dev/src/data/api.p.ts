import * as pr from "pareto-core-raw"
import {
    externalReference as er,
    string as str,
    reference as ref,
    boolean as bln,
    number as nr,
    nested,
    optional,
    array,
    externalTypeReference,
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
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'algorithms': d({
            "setExitCodeToFailed": {
                'definition': ['procedure', externalTypeReference("common", "Null")],
                'type': ['reference', null],
            },
            "writeToStdErr": {
                'definition': ['procedure', externalTypeReference("common", "String")],
                'type': ['reference', null],
            },
            "writeToStdOut": {
                'definition': ['procedure', externalTypeReference("common", "String")],
                'type': ['reference', null],
            },
        })
    },
}