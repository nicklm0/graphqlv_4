// TODO :create a apollo server
//importing the @apollo/server & startStandaloneServer
import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone"
//To bring in the contents of schema.graphql, we'll need some additional imports
import { readFileSync, readSync } from "fs";
import path from "path";
import { gql } from "graphql-tag";
/*
ust below these imports, 
we'll add a line that puts all of these imports together 
and reads in our schema file.
*/
const typeDefs = gql(
    readFileSync(path.resolve(__dirname, "./schema.graphql"), {
      encoding: "utf-8",
    })
  );

  /*
  Next, let's set up an async function called startApolloServer. 
  Inside, we'll create an instance of the ApolloServer 
  class and pass it our typeDefs in its options object:
  */
 /*
  To start the server, we'll use the startStandaloneServer 
  function, passing it the server we just initialized.

  The startStandaloneServer function returns a Promise, 
  so we'll await the results of that call, 
  and pull out the url property from the result.
  */ 
  async function startApolloServer() {
    const server = new ApolloServer({ typeDefs });
    const { url } = await startStandaloneServer(server);
    console.log(`
      🚀  Server is running!
      📭  Query at ${url}
    `);
  }

  //put the startApolloServer function at the bottom of the file
  startApolloServer();