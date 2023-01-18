import * as pt from 'pareto-core-types'
import * as pr from 'pareto-core-raw'
import * as pl from 'pareto-core-lib'
import * as tst from "lib-pareto-test"

import { test as main_setExitCodeToFailed } from "../modules/main/setExitCodeToFailed.generated"
import { test as main_writeToStdErr } from "../modules/main/writeToStdErr.generated"
import { test as main_writeToStdOut } from "../modules/main/writeToStdOut.generated"

const x = pr.wrapRawDictionary<pt.Dictionary<() => pt.AsyncValue<tst.TTestElement>>>({
    'main': pr.wrapRawDictionary({
        'setExitCodeToFailed': main_setExitCodeToFailed,
        'writeToStdErr': main_writeToStdErr,
        'writeToStdOut': main_writeToStdOut,
    }),
}).asyncMap(($, key) => $.asyncMap(($, key) => $()))