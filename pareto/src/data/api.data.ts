import * as pr from 'pareto-core-raw'

import {
    string,
    reference,
    boolean as bln,
    number as nr,
    nested,
    array,
    typeReference, dictionary, group, member, taggedUnion, types, func
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'parameters': d({}),
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'templates': d({}),
        'types': types({
            "Arguments": array(string()),
            "MainData": group({
                "arguments": member(reference("Arguments"))
            })
        }),
        'interfaces': d({}),
        'functions': d({
            "Main": func(typeReference("MainData"), null, null, null)
        }),
    },
    'api': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'algorithms': d({
            "log": algorithm(definitionReference("common", "Log")),
            "logError": algorithm(definitionReference("common", "Log")),
            "setExitCodeToFailed": algorithm(definitionReference("common", "Signal")),
            "writeToStdErr": algorithm(definitionReference("common", "Log")),
            "writeToStdOut": algorithm(definitionReference("common", "Log")),
        })
    },
}