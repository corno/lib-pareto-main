import * as pr from 'pareto-core-raw'
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
    procedure,
    typeReference,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"
import { dictionary, group, member, taggedUnion, types, _function } from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"
import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary


export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'namespace': {
            'types': types({
                "Arguments": array(str()),
                "MainData": group({
                    "arguments": member(ref("Arguments"))
                })
            }),
            'interfaces': d({}),

        },
        'functions': d({
            "Main": procedure(typeReference("MainData"))
        }),
    },
    'api': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'algorithms': d({
            "log": {
                'definition': {
                    'context': ['import', "common"],
                    'function': "Log",
                },
                'type': ['reference', null],
            },
            "logError": {
                'definition': {
                    'context': ['import', "common"],
                    'function': "Log",
                },
                'type': ['reference', null],
            },
            "setExitCodeToFailed": {
                'definition': {
                    'context': ['import', "common"],
                    'function': "Signal",
                },
                'type': ['reference', null],
            },
            "writeToStdErr": {
                'definition': {
                    'context': ['import', "common"],
                    'function': "Log",
                },
                'type': ['reference', null],
            },
            "writeToStdOut": {
                'definition': {
                    'context': ['import', "common"],
                    'function': "Log",
                },
                'type': ['reference', null],
            },
        })
    },
}