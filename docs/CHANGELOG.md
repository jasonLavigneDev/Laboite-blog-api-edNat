# Changelog

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
