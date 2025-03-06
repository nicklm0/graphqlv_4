//create the resolver code 

//create some changes to the resolvers
import { Resolvers } from './types'

export const resolvers: Resolvers = {
  Query: {
    featuredListings: (_, __, {dataSources}) => {
      return dataSources.listingAPI.getFeaturedListings();
    },
    listing: (_, { id }, { dataSources }) => {
      return dataSources.listingAPI.getListing(id);
    },
  },
};