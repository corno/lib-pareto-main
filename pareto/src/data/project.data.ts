import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pr.wrapRawDictionary

import { $ as api } from "./api.data"

export const $: mproject.T.Project = {
    'author': "Corno",
    'description': "provides functionality to implement the main (executable) function in Pareto",
    'license': "ISC",
    
    'dependencies': d({
        "glo-pareto-common": {},
    }),
    'type': ['resource', {
        'definition': api,
        'nativeDependencies': d({}),
        'devDependencies': d({
            "@types/node": {},
        }),
        'test': {
            'dependencies': d({
            }),
            'glossary': {
                'functions': d({}),
                'imports': d({}),
                'parameters': d({}),
                'types': d({}),
                'interfaces': d({}),
            },
        }
    }],
}