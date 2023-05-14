import { createApp, h, provide } from "vue";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";
import graphql from "@rollup/plugin-graphql";
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";
import App from "./App.vue";

const link = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link,
  cache,
});

// Plugins
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

app.use(graphql);
app.use(Antd);

// Mounting
app.mount("#app");
