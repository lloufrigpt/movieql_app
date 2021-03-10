import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
    // schema
    // 사용자에게 보내거나 사용자로부터 받을 데이터에 관한 설명

    typeDefs: "graphql/schema.graphql",
    resolvers

});

server.start(() => console.log("Server Running"));