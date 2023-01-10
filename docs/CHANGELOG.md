# Changelog

## [1.4.0](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/compare/release/1.3.0...release/1.4.0) (2022-11-22)


### Features

* **appsettings:** add appsettings to API ([aca25ca](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/aca25cab8c2176166cd6df89ef567817762b3d5b))


### Bug Fixes

* **appsettings:** fix model and controller ([1f6783e](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/1f6783e536782aaad7be621bf7d986509bd2f382))
* **ci:** convert .gitlab-ci.yml back to unix format ([ef8acd1](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/ef8acd1e62a971aa843e2861b06eefb9e113408b))
* **ci:** delete prettier formating ([3a849a1](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/3a849a1ee3dc5e1d61588528cb500e9dd75971bc))
* **package:** remove old call of script ([cf74425](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/cf74425bd000eeb8a9606b2c2187f8a3e0ff1e9c))
* **test:** remove old test /ping ([3a38205](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/3a38205deb962dec69d802f954190ed2f8dd4f27))


### Build System

* **alpine:** update node alpine version to 16.17.0 ([c0ad2c6](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/c0ad2c6f6ebdf9002825c679203dc29221e1d777))

## [1.3.0](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/compare/release/1.2.1...release/1.3.0) (2022-09-20)


### Features

* **article:** add licence to articles ([9d41650](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/9d4165070f5b1460d4b06e966eba33e7bf7dc148))


### Bug Fixes

* **install:** use yarn instead of npm for install ([94a4f45](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/94a4f4522d8ca40cccab04bebb3d51b9d14ed077))
* **librairies:** update loopback/rest librairy ([9431a5f](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/9431a5f84dcf4e55f571df6f698bc6d429f3bdc0))


### Documentation

* **readme:** translate readme in french ([195c7d7](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/195c7d7621d7b8203de6eeacce92d11285b4e5ee))


### Continuous Integration

* **build-docker:** run for `testing` prerelease ([ae7e792](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/ae7e79237aac0758349749573fe785c7d5a7a8c2))
* **commitlint:** use new standard job `.git:commitlint` ([df0e5a0](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/df0e5a0229c707cc4e1cd9afe5e86085bda8380f))
* **merge-to-dev:** use new standard jobs `.git:merge-to` ([4d45ad0](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/4d45ad02240627bbc5b49b4f69681d6802b27fe0))
* **meteor:** test before generating a new release ([df161bc](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/df161bc5ec43d00071bc9fbb61648597b68c5818))
* **semantic-release:** create `testing` prerelease ([9ca3278](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/9ca327858adc2752d78f8a8ea9e6158a72e0590e))
* **tag docker:** tag `testing` prerelease image ([a6977be](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/a6977be39cee5b3f892d3fbadf35287c131ef570))

## [1.2.1](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/compare/release/1.2.0...release/1.2.1) (2022-07-04)


### Bug Fixes

* **audit:** update npm libraries, add LICENSE ([e47649c](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/e47649c8f9afc23158b7789654b01250209a7552))

# [1.2.0](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/compare/release/1.1.3...release/1.2.0) (2022-05-23)


### Bug Fixes

* **debug:** allow acces to version in package.json ([78a5004](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/78a50040d519b97271af8d67eb2be4c15266d985))
* **mongo_auth:** add authSource parameter for mongo connection ([c171361](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/c1713614b4f6782e175fef8f1993a12612228bfc))


### Features

* **structure:** add structure model ([66bc174](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/66bc174f07da4af9167f57ae2abd002f68fa7225))

## [1.1.3](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/compare/release/1.1.2...release/1.1.3) (2022-01-18)


### Bug Fixes

* **auth:** change authentication method for mongodb ([2e3a71e](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/2e3a71ef5012ed49a347dc9b7e63e4e91d80f3cd))
* **config:** add checks and logs for mongo configuration ([e4d6757](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/e4d6757db32977c5abe48aa30a6e648cb5e92d24))

## [1.1.2](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/compare/release/1.1.1...release/1.1.2) (2022-01-13)


### Bug Fixes

* **version:** update package-lock.json. closes [#2](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/issues/2) ([e8ae3db](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/e8ae3db1d6d50b8a59e79bd75cf7a2d8f2961226))


### Continuous Integration

* **build:** create the docker image and push it to `${CI_REGISTRY}` ([a6c6d53](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/a6c6d53f7c238ac26062d856c89f39f857ab01d1))
* **commitlint:** enforce commit message format ([77231b9](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/77231b9d84bddab829abf2882cb4814a304ad909))
* **release:** avoid regression in `dev` branch ([e0f89cb](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/e0f89cbe8ae9a83be4227fab5e4b1f85a312f854))
* **release:** create release automatically with `semantic-release` ([2f62eb4](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/2f62eb4ef874d4f2dddf63bbbfdb67ca0880c7c7))
* **release:** tag docker images based on release cycle ([b9731cd](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/b9731cd0284e967f4bde58f82365deb93ff1945f))
* **test:** allow failing test ([2a4ff24](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/2a4ff240dff3df203681042d1821359fc52a0e61))
* **test:** verify dependencies, build and code tests ([030c097](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/030c097372c47a30d30570b1beed8165ad244842))


### Documentation

* **contributing:** explain commit message format ([58e04b9](https://gitlab.mim-libre.fr/alphabet/laboite-blog-api/commit/58e04b95cb566d3aac871d99d95f3b6fab1876aa))
