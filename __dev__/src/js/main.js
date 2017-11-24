'use strict';

import RTCP from './RTCP';

RTCP.config({ isThrowFail: false });

RTCP.fail(( name, fail ) => {
    console.error( `function ${ name }`, fail );
})

function X ( x ) {
    console.log( `[ X ]`, x + 1 );
}

RTCP( X, 'number' )( 1 );
RTCP( X, 'number|string' )( '1' );
// RTCP( X, 'number' )( '1' ); // fail

class Y {
    @RTCP( 'string' )
    hello ( name ) {
        console.log( `hello, ${ name }` );
    }
}

( new Y() ).hello( );
( new Y() ).hello( 1 );
