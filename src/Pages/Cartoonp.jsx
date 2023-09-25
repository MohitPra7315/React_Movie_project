import { Cartoon } from "../Component/Cartoon"
import { PotectMovie } from "../Component/PotectMovie"
export function Cartoonp({isLoggedin}){
    return(
        <div>
            <PotectMovie isloggedin={isLoggedin}>
            <Cartoon/>

            </PotectMovie>
    
        </div>
    )
}