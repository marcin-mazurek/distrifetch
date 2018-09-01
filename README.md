# distrifetch

HTTP client for distributed systems

## Ideas

### Technical

- [ ] Written in TypeScript
- [ ] Provides Flow library definitions
- [ ] Runnable both on the client- and server-side (?)

### Functionality

- [ ] Standard HTTP request library functionality
- [ ] Logging
  - [ ] Request metrics
  - [ ] Correlation ID
- [ ] In-memory caching
  - [ ] According to the response headers
  - [ ] With custom settings
  - [ ] Only for 2xx codes (by default)
  - [ ] With additional keys (eg. user role)
  - [ ] With limit of responses cached
  - [ ] Prefetching
- [ ] Parsing response
  - [ ] Text
  - [ ] JSON
  - [ ] Images
  - [ ] ?
- [ ] Rate limiting
  - [ ] Arbitrary value
  - [ ] Based on the response time
- [ ] Serving last known good response in case of failure
- [ ] Retrying calls
- [ ] Failover - switching to a different URL(s)
- [ ] Circuit breaker - to avoid overloading a dead service with unnecessary requests
- [ ] Throttling - to avoid making too many requests for the same resource
- [ ] Proxy support

### Interface

- [ ] Bare HTTP request library by default
- [ ] Possibility to set config per library instance
- [ ] Possibility to set/override config per single library call
- [ ] Possibility to compute config dynamically and asynchronously
- [ ] Support for async/await
- [ ] Support for promises

## Inspiration

- https://github.com/Netflix/ribbon
- https://www.npmjs.com/package/resilient
