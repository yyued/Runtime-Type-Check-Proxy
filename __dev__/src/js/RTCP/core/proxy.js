'use strict';

import argumentsExpect from './arguments_expect';
import assert from './assert';

let failCallback = void 0;

const Proxy = function ( func, expect ) {

    if ( arguments.length === 1 ) {
        expect = func;
    }

    expect = argumentsExpect( expect );

    const proxyer = ( ...args ) => {
        const funcName = func.name;

        const { option: { isThrowFail } } = Proxy;

        const fail = assert( args, expect );

        if ( fail.length > 0 && isThrowFail ) {
            fail.unshift( 'RTCP Error' );
            throw fail;
        }

        fail.length > 0 && failCallback ? failCallback( funcName, fail ) : void 0;

        func( ...args );
    }

    if ( arguments.length === 1 ) {
        return ( target, key, descriptor ) => {
            func = target[ key ];
            descriptor.value = proxyer;
        };
    }

    return proxyer;
};

Proxy.option = {
    isThrowFail: true,
}

Proxy.config = function ( option ) {
    this.option = Object.assign( this.option, option );
}

Proxy.fail = function ( callback ) {
    failCallback = callback;
}

module.exports = Proxy;
