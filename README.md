# Runtime-Type-Check-Proxy

Through "proxy" function, to check the arguments type. It is different from the static methods such as TypeScript and is only used as a lightweight runtime arguments checking function.

[简体中文](./README.zh-CN.md)

## Type

number / string / boolean / null / array / date / regexp / function / undefined / NaN / Infinity

## Installing

```sh
$ npm i rtcp --save
```

or download [RTCP.min.js](https://github.com/yyued/Runtime-Type-Check-Proxy/blob/master/dist/RTCP.min.js)

```html
<script src="./RTCP.min.js"></script>
```

## Example

```js
RTCP.fail(( name, fail ) => {
    console.error( `function ${ name }`, fail );
})

function X ( x ) {
    console.log( x + 1 );
}

function Y ( x, y ) {
    console.log( x + y );
}

RTCP( X, 'number' )( 1 );
RTCP( X, 'number|string' )( '1' );
RTCP( X, 'number' )( '1' ); // fail

RTCP( Y, [ 'number', 'number' ] )( 1, 1 );
RTCP( Y, [ 'number', 'number' ] )( 1, '1' ); // fail
```

## Support as decorator

```js
class X {
    @RTCP( 'string' )
    hello ( name ) {
        console.log( `hello, ${ name }` );
    }
}

( new X() ).hello( 'foo' );
( new X() ).hello(); // fail
```

## License

[MIT](./LICENSE)
