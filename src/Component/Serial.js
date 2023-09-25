import { useState ,useEffect, useContext} from 'react'
import Spinner from './Spinner';
import { AppcontextProvider } from '../ContextAPI/ApiContext';
export function Serial() {

    // const Url = `https://www.omdbapi.com/?i=tt0944947&Season=1&apikey=86dc460a`;

    // const [movie, setMovie] = useState('')
    const [loading, setLoading] = useState(false)
// const{loading}=useContext(AppcontextProvider)
    // console.log(movie)
    // useEffect(() => {

    //     async function Movieapi() {
    //         setLoading(true)
    //         try {
    //             const res = await fetch(Url);
    //             const output = await res.json();
    //             // console.log(output)
    //             setMovie(output)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //         setLoading(false)
    //     }
    //     Movieapi();
    // }, [])


    return (
        <div>
          
              
 <div>
            {
                loading?<Spinner></Spinner>:

                <div>
                    <img src={require('./img/steve.jpeg')}></img>

                </div>
            }

           
        </div>


        </div>
    )
}