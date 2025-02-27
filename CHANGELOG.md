# [3.0.0](https://github.com/groupme-js/node-groupme/compare/v2.7.0...v3.0.0) (2022-05-27)


### Bug Fixes

* :rotating_light: replace avatar with avatar_url ([826ef0b](https://github.com/groupme-js/node-groupme/commit/826ef0be0661a0363ff26a2dc0815964fa23decc))


### Code Refactoring

* **Channel:** :building_construction: extend `Base`, update constructor signature ([e5feacb](https://github.com/groupme-js/node-groupme/commit/e5feacbd0e914281c264200b75d44eee08b747f6))
* **User:** :recycle: rename `avatar` to `avatar_url` in User constructors ([1e5c629](https://github.com/groupme-js/node-groupme/commit/1e5c629cb6b626fbe6c21eb62195b8c325f88ebd))


### Features

* add helper functions for constructing request handlers ([#98](https://github.com/groupme-js/node-groupme/issues/98)) ([1aea72e](https://github.com/groupme-js/node-groupme/commit/1aea72e239121f0b2698ae4f7c943c25be16fa0a))
* **Base:** :poop: implement BaseGroup#_patch ([7641639](https://github.com/groupme-js/node-groupme/commit/7641639f7409c2f9cf56ac857688e8b99c6a7d0b))
* **Base:** :poop: implement Chat#_patch ([1a86da5](https://github.com/groupme-js/node-groupme/commit/1a86da567e22fecfcd41b379c0a0f397cc1442e2))
* **Member:** :sparkles: add Member#image_url ([1376aed](https://github.com/groupme-js/node-groupme/commit/1376aed6da22349710f0fc6e6aef484ab42a03dc))
* mock API calls in tests ([#96](https://github.com/groupme-js/node-groupme/issues/96)) ([a97289c](https://github.com/groupme-js/node-groupme/commit/a97289cd8b39def11edf5a77baca66038af1ddc8))
* **Poll:** :beers: poll overhaul ([67f700b](https://github.com/groupme-js/node-groupme/commit/67f700b209dd63a886e15bcfbb40e3617e308216))


### BREAKING CHANGES

* **Channel:** Channel constructor changed:
`Channel(ChannelData)` -> `Channel(Client, ChannelData)`
* **User:** User constructor no longer accepts `avatar` property; use `avatar_url` instead

# [2.7.0](https://github.com/groupme-js/node-groupme/compare/v2.6.0...v2.7.0) (2022-05-17)


### Features

* **Messages:** implement Message#delete ([c1f4857](https://github.com/groupme-js/node-groupme/commit/c1f4857d1f26af907036c2beab5426342b98c465))

# [2.6.0](https://github.com/groupme-js/node-groupme/compare/v2.5.0...v2.6.0) (2022-05-15)


### Features

* Create autoreviewers github action ([6995694](https://github.com/groupme-js/node-groupme/commit/69956940c5033e592bc664a215ad5c2ddfe2e2d0))

# [2.5.0](https://github.com/groupme-js/node-groupme/compare/v2.4.0...v2.5.0) (2022-05-15)


### Bug Fixes

* **Groups:** separate documentation of overloaded GroupManager#join ([999e0bf](https://github.com/groupme-js/node-groupme/commit/999e0bf96178ed3c8879cd75a59762b7a50ea9ee))
* **Groups:** validate invite link hostname ([c6d9b9e](https://github.com/groupme-js/node-groupme/commit/c6d9b9ef22f74bcb7a5ecc04674855bb3e382942))


### Features

* **Groups:** implement GroupManager#join ([1422615](https://github.com/groupme-js/node-groupme/commit/14226158603bfec87437f14093c14887935fe7aa))

# [2.4.0](https://github.com/groupme-js/node-groupme/compare/v2.3.0...v2.4.0) (2022-05-14)


### Features

* **Groups:** implement Group#delete ([cda2b80](https://github.com/groupme-js/node-groupme/commit/cda2b80a12ebb59e9ff8a2f99f300532b9645735))

# [2.3.0](https://github.com/groupme-js/node-groupme/compare/v2.2.0...v2.3.0) (2022-05-12)


### Bug Fixes

* **Groups:** remove unnecessary await in GroupManager#create ([2e0a94a](https://github.com/groupme-js/node-groupme/commit/2e0a94a399db6f6f37b482c0e2d9ab116add13af))
* **Groups:** rename reqBody to body for consistent naming ([db9b776](https://github.com/groupme-js/node-groupme/commit/db9b776c9761ecf9bbb0ef7ae2e989e17f34327f))
* **Groups:** send PostGroupBody instead of GroupCreateOptions ([79902a8](https://github.com/groupme-js/node-groupme/commit/79902a803c0b70f856dc837316dbb9d98cc2d734))
* **Groups:** use the more specific PostGroupResponse alias ([f5c9a0c](https://github.com/groupme-js/node-groupme/commit/f5c9a0cd3197c27cecff2e9a0041184af6f61136))


### Features

* **Groups:** add GroupManager create ([0aa27f0](https://github.com/groupme-js/node-groupme/commit/0aa27f0ba8d0a9533edea97669bbfead9f82a55a))

# [2.2.0](https://github.com/groupme-js/node-groupme/compare/v2.1.0...v2.2.0) (2022-02-09)


### Features

* **Relationships:** :sparkles: add relationship support ([9d5b534](https://github.com/groupme-js/node-groupme/commit/9d5b534882b42327725aa122ee805cea6ddaa490))

# [2.1.0](https://github.com/groupme-js/node-groupme/compare/v2.0.0...v2.1.0) (2022-02-08)


### Bug Fixes

* :mute: remove logging ([7d740cb](https://github.com/groupme-js/node-groupme/commit/7d740cb6d80cdcd3d5eb976f6734605c55455b15))


### Features

* :sparkles: add support for API versions v2, v3, v4 ([c06d5f9](https://github.com/groupme-js/node-groupme/commit/c06d5f9c19f5a8dd1d33c948fb6f0e4859e01720))

# [2.0.0](https://github.com/groupme-js/node-groupme/compare/v1.0.0...v2.0.0) (2022-02-07)


### Code Refactoring

* :fire: remove Member#autokicked ([9f88a91](https://github.com/groupme-js/node-groupme/commit/9f88a91f3227abe2d078485da35d1d822c6d0381))


### BREAKING CHANGES

* Member#autokicked is gone

# 1.0.0 (2022-02-03)


### Bug Fixes

* :ambulance: bad index signature in RequestOptions#query ([c931e0a](https://github.com/groupme-js/node-groupme/commit/c931e0a847802b12918af5daa99481e012c375a0))
