import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
import { RetryLink } from '@apollo/client/link/retry';
import { setContext } from '@apollo/client/link/context';

const AUTHENTICATED_URL = 'http://localhost:8000/graphql';
const LOGIN_URL = 'http://localhost:8000/graphql/login';

const httpLink = new HttpLink({ uri: AUTHENTICATED_URL });
const loginLink = new HttpLink({ uri: LOGIN_URL });

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });

/*const directionalLink = new RetryLink().split(
    (operation) => {
        console.log(operation);
        return Object.keys(operation.variables).includes('username') 
        && Object.keys(operation.variables).includes('password')},
    loginLink,
    authLink.concat(httpLink),
  );*/
const cache = new InMemoryCache();

const apollo_auth_client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: cache
});

const apollo_nauth_client = new ApolloClient({
  link: loginLink,
  cache: cache
});

export { apollo_auth_client, apollo_nauth_client }