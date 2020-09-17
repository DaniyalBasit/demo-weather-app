import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from "react-native";
import ApolloClient from 'apollo-client';
import Amplify from 'aws-amplify';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from 'apollo-link';
import { createAuthLink } from 'aws-appsync-auth-link';
import { createHttpLink } from 'apollo-link-http';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import AppSyncConfig from './aws-exports';

Amplify.configure(AppSyncConfig);

const url = AppSyncConfig.aws_appsync_graphqlEndpoint;
const region = AppSyncConfig.aws_appsync_region;
const auth = {
  type: AppSyncConfig.aws_appsync_authenticationType,
  apiKey: AppSyncConfig.aws_appsync_apiKey
};
const link = ApolloLink.from([
  createAuthLink({ url, region, auth: auth as any }),
  createHttpLink({ uri: url })
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache() as any
});


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApolloProvider client={client as any}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </ApolloProvider>
    );
  }
}
