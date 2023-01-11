import * as pt from "pareto-core-types"
import * as pr from "pareto-core-raw"
import * as pl from "pareto-core-lib"

import { test as main_setExitCodeToFailed } from "../modules/main/setExitCodeToFailed.p"
import { test as main_writeToStdErr } from "../modules/main/writeToStdErr.p"
import { test as main_writeToStdOut } from "../modules/main/writeToStdOut.p"

const x = pr.wrapRawDictionary({
    "main": pr.wrapRawDictionary({
        "setExitCodeToFailed": main_setExitCodeToFailed,
        "writeToStdErr": main_writeToStdErr,
        "writeToStdOut": main_writeToStdOut,
    }),
}).asyncMap(($, key) => $.asyncMap(($, key) => $()))