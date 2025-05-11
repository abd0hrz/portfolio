import { gql } from "@apollo/client"

export default {
  Queries: {
    getProfile: gql`
      query GetProfile {
        profiles {
          cv
          id
          name
          ownersPhoto {
            url
          }
          bgImages {
            url
          }
        }
      }
    `,

    getNameImage: gql`
      query GetProfile {
        profiles {
          name
          ownersPhoto {
            url
          }
        }
      }
    `,

    getBio: gql`
      query GetBio {
        profiles {
          bio
        }
      }
    `,

    getServices: gql`
      query GetServices {
        services {
          id
          title
          serviceDesc
        }
      }
    `,

    getPrices: gql`
      query GetPrices {
        prices {
          id
          packageName
          packagePrice
          priceType
          freelanceUrl
          packageServices {
            id
            isIncluded
            packageService
          }
        }
      }
    `,

    getTestimonials: gql`
      query GetTestimonials {
        testimonials {
          id
          userName
          userProfession
          quote
          userImage {
            url
          }
        }
      }
    `,
  },
}
// Log and check if GraphQL URL is set
export const graphQLUrl = "https://us-west-2.cdn.hygraph.com/content/cma6o0i7002fe07w7injs2p8s/master"; // Directly use the provided URL
