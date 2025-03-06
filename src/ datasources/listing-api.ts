/*
grab the datalisting on the souce using  
this api code
forgot to install the npm install @apollo/datasource-rest
*/
import { RESTDataSource } from "@apollo/datasource-rest";

export class ListingAPI extends RESTDataSource {
    baseURL =  "https://rt-airlock-services-listing.herokuapp.com/";
    getFeaturedListings(){
        return this.get<any[]>("featured-listings");
    }
}
