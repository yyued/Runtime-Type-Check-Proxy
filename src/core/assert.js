'use strict';

import type from './type';

module.exports = ( args, expect ) => {

    const fail = [ ];

    args.forEach(( arg, index ) => {
        const _expect = expect[ index ];
        const _expectArray = ( expect[ index ] ).split('|');

        const argType = type( arg );

        _expectArray.indexOf( argType ) < 0 ?
            fail.push({ index, expect: _expect, got: argType }) : void 0;
    });

    return fail;
};
