# GraphqlV4

## Description
This project is a GraphQL API built with Apollo Server and TypeScript. It demonstrates how to define schemas, implement resolvers, and handle queries and mutations efficiently.

[here is the link to the project repo:](https://github.com/nicklm0/graphqlv_4)

Technologies used  
- Apollo Server
- GraphQL
- TypeScript
- Node.js

note:
if i forgot to mention some packages 
try to look at the package.json file 

## Installation 🛠️

```bash
1. Clone the repository:
git clone https://github.com/nicklm0/graphqlv_4

2. go to the project directory
$ cd graphqlv_4

3. go final answer branch
$ git checkout final_answer

to install the types.ts
$ npm run generate

4. Install dependencies:
# Install dependencies
$ npm install

5. run the development server:
$ npm run dev

The server will run at http://localhost:4000.
```

# My Journey with Apollo GraphQL: What I Learned
GraphQL has always intrigued me, but diving into Apollo GraphQL gave me a hands-on understanding of how it simplifies API development. In this project, I’ll share what I learned while building a GraphQL server with Apollo.

# Setting Up Apollo GraphQL

Getting started with Apollo GraphQL requires setting up a server. The process involves installing the necessary dependencies and configuring the server. Here’s a simple way to initialize a project:
```bash
npm init --yes && npm pkg set type="module"
npm install @apollo/server graphql
```
From there, I created a basic Apollo Server instance and defined a schema.

Understanding GraphQL Schemas and Resolvers

A schema is the backbone of any GraphQL API. It defines the structure of data and how queries/mutations interact with it. I learned how to create type definitions and set up resolvers to handle requests.
```gql
Example schema:

type Query {
  greeting: String
}
```
And its corresponding resolver:
```gql
const resolvers = {
  Query: {
    greeting: () => "Hello, GraphQL!"
  }
};
```

Exploring Mutations and Scalars

Mutations allow modifying data, and I learned how to structure them properly. Additionally, GraphQL comes with built-in scalar types like String, Int, and Boolean, which help define the data structure.

Example mutation:
```ts
type Mutation {
  addUser(name: String!): User
}
```
Resolvers for handling the mutation:

```ts
const resolvers = {
  Mutation: {
    addUser: (_, { name }) => ({ id: Date.now(), name })
  }
};
```

# Key Takeaways
- Apollo Server simplifies GraphQL API development with built-in tools and middleware support.

- Schemas and resolvers define how data is structured and fetched in GraphQL.

- Mutations and scalars help modify and validate data efficiently.

- GraphQL provides flexibility and reduces over fetching of data, making it a powerful  alternative to REST APIs.

