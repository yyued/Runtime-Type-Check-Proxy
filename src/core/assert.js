'use strict';

import type from './type';

module.exports = ( args, expect ) => {

    const fail = [ ];

    expect.forEach(( _expect, index ) => {
        const arg = args[ index ];
        const _expectArray = ( _expect ).split('|');

        const argType = type( arg );

        _expectArray.indexOf( argType ) < 0 ?
            fail.push({ index, expect: _expect, got: argType }) : void 0;
    });

    return fail;
};
