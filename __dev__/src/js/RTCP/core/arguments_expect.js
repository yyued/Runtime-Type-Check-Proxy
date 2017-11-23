'use strict';

import type from './type';

module.exports = ( expect ) => {

    let argsExpect = [ ];

    type( expect ) !== 'array' ? argsExpect.push( expect ) : argsExpect = expect;

    return argsExpect;
};
