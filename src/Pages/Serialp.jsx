import { Serial } from "../Component/Serial"
import { PotectMovie } from "../Component/PotectMovie"

 function Serialp({ isloggedin }) {
    return (
        <div>
          <PotectMovie   isloggedin={isloggedin}>
                <Serial/>
            </PotectMovie>


        </div>
    )
}

export default Serialp