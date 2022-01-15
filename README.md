This is the template for all Apollo typescript project powered by `yarn`
# the basic prototype
## steps
1. install yarn by `brew install yarn`
2. initialize the project in the project root directory by `yarn init`
3. add dependencies:
   1. `yarn add --dev <package you what>` to install in `devDependencies`, [--dev links](https://classic.yarnpkg.com/en/docs/cli/install/)
   2. `yarn add <package you what>` to install in `dependencies`.
   3. list that we need
4. initialize your `tsconfig.json`: `yarn tsc --init --rootDir src --outDir ./bin`
   1. you might get a error: "No inputs were found in config file", this mean you need to add at least one `.ts` file in the project, or just restart your IDE
   2. the `rootDir` is where the source code sit and `outDir` is where the compiled `.js` file output.
5. context: 
   1. create a folder `context`
   2. create an `index.ts` inside the folder
6. codegen: [tutorial comes here](https://www.graphql-code-generator.com/docs/getting-started)
   1. use the `codegen.yml` file here
   2. to run it, using `yarn graphql-codegen -c ./codegen.yml`
   3. there are several comments in the codegen
7. if you want to query the data from Postman:
   1. use `POST` instead of `GET`
   2. (tutorials)[https://learning.postman.com/docs/sending-requests/supported-api-frameworks/graphql/] comes here


## structures
1. `codegen.yml`
   1. generate codegen files for types