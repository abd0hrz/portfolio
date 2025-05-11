import { ApolloClient, createHttpLink, InMemoryCache, makeVar } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { relayStylePagination } from "@apollo/client/utilities";
import { graphQLUrl } from "./graphqlOperations/profile";

// Create the HTTP link for GraphQL
const httpLink = createHttpLink({
  uri: graphQLUrl, // Use the static URL here
});

// Authentication link
const authLink = setContext((_, { headers }) => {
  const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3NDYxODI4NDgsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuaHlncmFwaC5jb20vdjIvY21hNm8waTcwMDJmZTA3dzdpbmpzMnA4cy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC11cy13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiMmIxYjAxZDQtYTYxOC00MjE2LWExYjMtZWU4ZWEzZTY4N2IxIiwianRpIjoiY2xhdmd3dG9nMnpqdDAxdDEzeW42aHFsMCJ9.jOahVPF0d2KREBod0jh9lWPJWi83zdtgfxfzoDdb0wxHUnORdt1DsvqtkaD0rKvRlpOESIEHJjTVBiKfEUmxfnps60kl_AsxGfY5bkbg403NdRdKo__NrDkjNPAcXox4We9-m6jpYvh5Rg80SErl66UbNAEU_ZAqvAUJd-NFVxI1H59F-F4KbqqOvVjOsvRWQlMB63_F1I4z8Xqc0GyuLIlEriOXNrTFuqQssl0VtfEu6elxR0RIf4-sizA7s8tNKzdXOFDtjRAKFCAfea133SY42KEyA_68uPR2H4ixja6IsgHhOHYPz_X8ohaZuQhhryj1wYWW-MAJqBrwyjAfFbELfivxcNBhi-QJhbbtG5_GQKD5WCCeof2WwS_4xvARRYDTZEIYCnFO3U9c8MFUKSs4KPu6dRP92n5AeXABjQiU7z7yRBDPP8o0P5lr1lsbbpqvLRXncQ52eknGnXShuisnJQtCaVf83MqD4X4Pl-KOH8LaQfZXRkuXdOAtOoC61uofYEYtvWdX3gshlQKS7sV3rlokTV89r8DZ0_ld7PZBvLxX5pAWk4I0qA2apzEaxIYBbYQkRUFCRIvoiAB-iemPYGrnmKaxfeH9cYcgSzJKJCuDU-wcwGOjRGnvDW4Jv3D9gFkioA3NGOJAzc5LhVgISPMkmBdArSGfWDLgNqw";
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Initialize Apollo Client
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          worksConnection: relayStylePagination(),
          guestBooksConnection: relayStylePagination(),
          blogs: {
            read(existing = [], { args: { skip, first } }: any) {
              return existing.slice(skip, skip + first);
            },
            keyArgs: false,
            merge(existing = [], incoming, { args: { skip } }: any) {
              const merged = [...existing];
              for (let i = 0; i < incoming.length; ++i) {
                merged[skip + i] = incoming[i];
              }
              return merged;
            },
          },
        },
      },
    },
  }),
});

export const currentWorkTab = makeVar<string>("All");
export const currentMenu = makeVar<number>(1);
export const currentWork = makeVar<null | string>(null);
export const showMenu = makeVar<boolean>(false);

export default client;
