This is the prototype for all Apollo typescript project powered by `yarn`

# Apollo Server
To create a stardard production level Apollo Server, we will start from the [Apollo tutorial](https://www.apollographql.com/docs/apollo-server/getting-started/) and move on.

## initial
1. install yarn by `brew install yarn`
2. initialize the project in the project root directory by `yarn init`
3. just follow the Apollo tutorial to create a simple server: [Apollo tutorial](https://www.apollographql.com/docs/apollo-server/getting-started/)

## dependencies
for the further development, we need to add more dependencies in the `package.json` file:
   1. `yarn add --dev <package you what>` to install in `devDependencies`, [--dev links](https://classic.yarnpkg.com/en/docs/cli/install/)
   2. `yarn add <package you what>` to install in `dependencies`.
   3. all dependencies we need

## `tsconfig`
use `tsconfig` to configure your typescript compiler, initialize your `tsconfig.json`: `yarn tsc --init --rootDir src --outDir ./bin`
   1. you might get a error: "No inputs were found in config file", this mean you need to add at least one `.ts` file in the project, or just restart your IDE
   2. the `rootDir` is where the source code sit and `outDir` is where the compiled `.js` file output.

## context
context use to store some global variables:
   1. create a folder `context`
   2. create an `index.ts` inside the folder
   3. we need to create several files to support the `content`, for more details, just check the content folder to see what is in it.

## codegen
codegen file could generate typescript's type from graphql, codegen: [tutorial comes here](https://www.graphql-code-generator.com/docs/getting-started)
   1. use the `codegen.yml` file here
   2. to run it, using `yarn graphql-codegen -c ./codegen.yml`
   3. there are several comments in the codegen for detail learning.
   
## separate `schema` and `resolver`
new we need to separate `schema` and `resolver` to make it more convenient in production level development.
   1. for details, just go to `./src/models/graphql/schema.ts` and `./src/resolvers.ts`.


## query from frontend
if you want to query the data from Postman:
   1. use `POST` instead of `GET`
   2. (tutorials)[https://learning.postman.com/docs/sending-requests/supported-api-frameworks/graphql/] comes here

## local and production environment
we need to configure some secret variables base on which environment the server is running. in the repo we have some file like `.env.localhost` or `.env.prod` to define these variables
1. (`process.env`)[https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env]


# mongodb
we used to hard code the dataset, now by using mongodb, data can be store in it dynamically.

## start and stop
1. [start](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#run-mongodb-community-edition)
2. [stop](https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/#stop-mongod-processes)