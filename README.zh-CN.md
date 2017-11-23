# Runtime-Type-Check-Proxy

通过 “代理” 函数，检查参数类型。它不同于 TypeScript 等静态检查方法，仅作为一个轻量级运行时的参数检查功能。

## 安装

```sh
$ npm i rtcp --save
```

或者 下载 [RTCP.min.js](https://github.com/yyued/Runtime-Type-Check-Proxy/blob/master/dist/RTCP.min.js)

```html
<script src="./RTCP.min.js"></script>
```

## 例子

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

## 许可

[MIT](./LICENSE)
