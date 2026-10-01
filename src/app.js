const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@as-integrations/express5");

const typeDefs = require("./graphql/schema");
const jenisKelaminResolvers = require("./graphql/jenis_kelamin/resolvers");

const app = express();
const resolvers = [jenisKelaminResolvers];

const server = new ApolloServer({
  typeDefs,
  resolvers
});

async function startGraphQL() {
  await server.start();
  app.use(cors());
  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({
      message: "API Mahasiswa berjalan Dan Sukses",
      port: process.env.PORT
    });
  });

  app.use("/graphql", expressMiddleware(server));
}

startGraphQL();

module.exports = app;