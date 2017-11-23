'use strict';

module.exports = function ( arg ) {
    let t1 = void 0, t2 = void 0;

    if ( ( t1 = typeof arg ) === 'object' ) {
        t2 = Object.prototype.toString.call( arg ).slice( 8, -1 ).toLowerCase();

        switch ( t2 ) {
            case 'number':
            case 'string':
            case 'boolean':
                return [t1, t2].join(' ');
            case 'null':
            case 'array':
            case 'date':
            case 'regexp':
                return t2;
            default:
                return arg.constructor.toString()
                            .match(/function\s*([^\(\s]*)/)[ 1 ]
                            .toLowerCase();
        }
    }
    else if ( t1 === 'function' ) {
        return t1;
    }
    else {
        switch ( t1  ) {
            case 'undefined':
            case 'boolean':
            case 'string':
                return t1;
            case 'number':
                if( isNaN( arg ) ) return 'NaN';
                if( !isFinite( arg ) ) return 'Infinity';
                return t1;
            default:
                console.log( 'this type undefined.' );
        }
    }
};
