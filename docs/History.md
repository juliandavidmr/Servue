# TODO

- Render templates VueJS
- Total integration of SocketIO
- Allow multiple paths for a single controller method. The routes are passed through the decorator.
- Entering schematics through the decorator to define the parameters to receive, keeping the parameters 'req' and 'res'. A method similar to controller C#.
- Implement decorators:
  - Private
  - Anonymous
- Implement redux (or vuex?) to control states in the socket.
- Injection dependencies, modules, middlewares.

# Changelog

### 2017-04-13
- **[Fixes]** Fixes decorators Post, Put, Head, Delete [See commit →](https://github.com/juliandavidmr/Servue)

### 2017-04-13
- **[Feature]** Add `Module` decorator. Create `Server` function [See commit →](https://github.com/juliandavidmr/Servue/commit/b4e8ba08317f072492c428571f75d09d4c42b152)

### 2017-04-12
- **[Fixes]** Fix url controller path prefix [See commit →](https://github.com/juliandavidmr/Servue/commit/1028f673c46d7e6941eeda2abd412d79e663bf4e)

### 2017-04-11
- **[Change]** Conversion of current architecture to TypeScript.
[See commit →](https://github.com/juliandavidmr/Servue/commit/3ddc4496b9cd641387d612047d46a87098fa8f6b)
- **[Feature]** Implements decorators: VueComponent, Get, Prop, Watch.
[See commit →](https://github.com/juliandavidmr/Servue/commit/fcb0030f947a62e280cef9eed596ed4d1caff2a5)
- **[Fixes]** Fixes and tests in Express. 
[See commit →](https://github.com/juliandavidmr/Servue/commit/255d0e08aa214fcff941c1f6d55e8addc1d698fc)

### 2017-04-09
- **[Feature]** Partial integration of ExpressJS with VueJS. [See commit →](https://github.com/juliandavidmr/Servue/commit/1028f673c46d7e6941eeda2abd412d79e663bf4e)