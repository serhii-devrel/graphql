import { createApp, h, provide } from 'vue';
import * as Sentry from '@sentry/browser';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable';
import graphql from '@rollup/plugin-graphql';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import App from './App.vue';
import LifePlugin from './instruments/Life.plugin.vue';

Sentry.init({
  dsn: 'public',

  release: 'graphql@1',
  integrations: [
    new Sentry.BrowserTracing({
      tracePropagationTargets: ['localhost'],
    }),
    new Sentry.Replay(),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  tracesSampleRate: 1.0,

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const link = createHttpLink({
  uri: 'http://localhost:4000/graphql',
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

export let openRequest = indexedDB.open('store', 1);

app.use(graphql);
app.use(Antd);
app.use(LifePlugin);

// Mounting
app.mount('#app');
