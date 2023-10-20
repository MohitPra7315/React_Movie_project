import { MovieDetails } from "../Component/MovieDetails"
import { PotectMovie } from "../Component/PotectMovie"
export function MovieDetailsp({isLoggedin}){
    return(
        <div>
            <PotectMovie isloggedin={isLoggedin}>
            <MovieDetails/>

            </PotectMovie>
    
        </div>
    )
}