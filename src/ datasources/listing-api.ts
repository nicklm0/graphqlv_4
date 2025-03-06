/*
grab the datalisting on the souce using  
this api code
forgot to install the npm install @apollo/datasource-rest
*/
 
//put the import below to the  ListingAPI file
import { RESTDataSource } from "@apollo/datasource-rest";
import { Listing } from "../types";

export class ListingAPI extends RESTDataSource {
  
  baseURL = "https://rt-airlock-services-listing.herokuapp.com/";
  
  getFeaturedListings(): Promise<Listing[]> {
    return this.get<Listing[]>("featured-listings");
  }
  
  getListing(listingId: string): Promise<Listing> {
    return this.get<Listing>(`listings/${listingId}`);
  }
}