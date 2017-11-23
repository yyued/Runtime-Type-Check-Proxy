# Runtime-Type-Check-Proxy

Through "proxy" function, to check the arguments type. It is different from the static methods such as TypeScript and is only used as a lightweight runtime arguments checking function.

[简体中文](./README.zh-CN.md)

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

RTCP( X, 'number' )( 1 );
RTCP( X, 'number|string' )( '1' );
RTCP( X, 'number' )( '1' ); // fail
```

## License

[MIT](./LICENSE)
