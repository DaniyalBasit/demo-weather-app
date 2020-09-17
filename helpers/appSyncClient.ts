// import { Auth } from "aws-amplify"
// import { createAppSyncLink } from "aws-appsync"
// import awsconfig from '../aws-exports'
// import { ApolloClient } from 'apollo-client';
// import { createHttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';

// const httpLink = createHttpLink({
//   uri: awsconfig.aws_appsync_graphqlEndpoint,
// });

// const awsLink = createAppSyncLink({
//   url: awsconfig.aws_appsync_graphqlEndpoint,
//   region: awsconfig.aws_appsync_region,
//   auth: {
//     type: awsconfig.aws_appsync_authenticationType,
//     apiKey: awsconfig.aws_appsync_apiKey,
//     // credentials: () => Auth.currentCredentials(),
//     // jwtToken: async () =>
//       // (await Auth.currentSession()).getAccessToken().getJwtToken()
//   },
//   complexObjectsCredentials: () => Auth.currentCredentials()
//  })

// export default new ApolloClient({
//   link: awsLink.concat(httpLink),
//   cache: new InMemoryCache()
// });
