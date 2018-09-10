# serf

```js
type RouteContextT = {
  request: RequestT,
  response: ResponseT
}

type RouteHandlerT = (context: RouteContextT): any

type RouteOptionsT = {
  method: 'get' | 'put' | 'post' | 'delete',
  match: string,
  handler: RouterHandlerT
}
type ServerOptionsT = {
  port: number,
  routerPrefix: string,
  routes: RouteOptionsT[]
}
```
