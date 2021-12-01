import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";

const BACK_URL = 'http://localhost:8000/graphql';

const httpLink = new HttpLink({ uri: BACK_URL });

const authLink = new ApolloLink((operation, forward) => {
    // Retrieve the authorization token from local storage.
    const token = localStorage.getItem('token');

    // Use the setContext method to set the HTTP headers.
    if (token) {
        operation.setContext({
            headers: {
                authorization: `Bearer ${token}`
            }
        });
    }

    // Call the next link in the middleware chain.
    return forward(operation);
});

export const apollo_client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});