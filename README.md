koa protobuf parser
===
Middlware that parses protocol buffers from request body.

Installation
---
```
npm install koa-protobuf-parser
```

Usage
---

```javascript
/* users.proto file

message User {
  string email = 1;
  string name = 2;
}

*/

const router = require('koa-router')();
const parser = require('koa-protobuf-parser');
const Protobuf = require('protobufjs');

const builder = Protobuf.loadProtoFile('users.proto');
const User = builder.build('User');

router.post('test', parser(User), function *() {
  const { message } = this;
  console.log(message);
  /*
  {
    name: 'Lucas',
    email: 'sunsi.lucas@gmail.com',
  }
  */
});
```

License
---
MIT
