import { useContext, useState } from "react"
import { useEffect } from "react"
import { APiContent } from "../ContextAPI/ApiContext"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import './HomeCo.css'


export function HomeCo() {

    

    const [popular, setPopular] = useState(
        [
            {
                "adult": false,
                "backdrop_path": "/iIvQnZyzgx9TkbrOgcXx0p7aLiq.jpg",
                "genre_ids": [
                    27,
                    53
                ],
                "id": 1008042,
                "original_language": "en",
                "original_title": "Talk to Me",
                "overview": "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.",
                "popularity": 2025.794,
                "poster_path": "/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
                "release_date": "2023-07-26",
                "title": "Talk to Me",
                "video": false,
                "vote_average": 7.2,
                "vote_count": 758
            },
            {
                "adult": false,
                "backdrop_path": "/H6j5smdpRqP9a8UnhWp6zfl0SC.jpg",
                "genre_ids": [
                    28,
                    878,
                    12
                ],
                "id": 565770,
                "original_language": "en",
                "original_title": "Blue Beetle",
                "overview": "Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.",
                "popularity": 2763.496,
                "poster_path": "/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg",
                "release_date": "2023-08-16",
                "title": "Blue Beetle",
                "video": false,
                "vote_average": 7.1,
                "vote_count": 703
            },
            {
                "adult": false,
                "backdrop_path": "/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
                "genre_ids": [
                    35,
                    12,
                    14
                ],
                "id": 346698,
                "original_language": "en",
                "original_title": "Barbie",
                "overview": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
                "popularity": 1906.284,
                "poster_path": "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
                "release_date": "2023-07-19",
                "title": "Barbie",
                "video": false,
                "vote_average": 7.3,
                "vote_count": 4867
            },
            {
                "adult": false,
                "backdrop_path": "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
                "genre_ids": [
                    28,
                    80,
                    53
                ],
                "id": 385687,
                "original_language": "en",
                "original_title": "Fast X",
                "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
                "popularity": 1995.539,
                "poster_path": "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
                "release_date": "2023-05-17",
                "title": "Fast X",
                "video": false,
                "vote_average": 7.3,
                "vote_count": 3786
            },
            {
                "adult": false,
                "backdrop_path": "/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg",
                "genre_ids": [
                    28,
                    878,
                    27
                ],
                "id": 615656,
                "original_language": "en",
                "original_title": "Meg 2: The Trench",
                "overview": "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
                "popularity": 2027.1,
                "poster_path": "/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
                "release_date": "2023-08-02",
                "title": "Meg 2: The Trench",
                "video": false,
                "vote_average": 7,
                "vote_count": 1866
            },
            {
                "adult": false,
                "backdrop_path": "/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg",
                "genre_ids": [
                    28,
                    9648,
                    53,
                    80
                ],
                "id": 762430,
                "original_language": "en",
                "original_title": "Retribution",
                "overview": "When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks. With his kids trapped in the back seat and a bomb that will explode if they get out of the car, a normal commute becomes a twisted game of life or death as Matt follows the stranger's increasingly dangerous instructions in a race against time to save his family.",
                "popularity": 1928.276,
                "poster_path": "/oUmmY7QWWn7OhKlcPOnirHJpP1F.jpg",
                "release_date": "2023-08-23",
                "title": "Retribution",
                "video": false,
                "vote_average": 6.8,
                "vote_count": 168
            },
            {
                "adult": false,
                "backdrop_path": "/53z2fXEKfnNg2uSOPss2unPBGX1.jpg",
                "genre_ids": [
                    27,
                    9648,
                    53
                ],
                "id": 968051,
                "original_language": "en",
                "original_title": "The Nun II",
                "overview": "In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.",
                "popularity": 1518.296,
                "poster_path": "/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
                "release_date": "2023-09-06",
                "title": "The Nun II",
                "video": false,
                "vote_average": 6.6,
                "vote_count": 258
            },
            {
                "adult": false,
                "backdrop_path": "/c6Splshb8lb2Q9OvUfhpqXl7uP0.jpg",
                "genre_ids": [
                    28,
                    53
                ],
                "id": 717930,
                "original_language": "en",
                "original_title": "Kandahar",
                "overview": "After his mission is exposed, an undercover CIA operative stuck deep in hostile territory in Afghanistan must fight his way out, alongside his Afghan translator, to an extraction point in Kandahar, all whilst avoiding elite enemy forces and foreign spies tasked with hunting them down.",
                "popularity": 1248.444,
                "poster_path": "/lCanGgsqF4xD2WA5NF8PWeT3IXd.jpg",
                "release_date": "2023-05-25",
                "title": "Kandahar",
                "video": false,
                "vote_average": 6.9,
                "vote_count": 523
            }
        ]
    )
    const [loader, setLoader] = useState(false)
    
    useEffect(() => {
        async function PopularMovie() {
            setLoader(true)
            try {
                const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US');
                const datapopular = await res.json()
                console.log(datapopular)
                setPopular(datapopular.results)
            }
            catch (error) {
                console.log(error)
            }
            setLoader(false)
        }
        PopularMovie();


    }, [])
    // console.log(popular)
   

   

    return (

        loader ? <Spinner></Spinner> :
            <div className="cont-poster " >
                <div className="poster"    >
                    <Carousel

                        showThumbs={false}
                        autoPlay={true}
                        transitionTime={3}
                        infiniteLoop={true}
                        showStatus={false}
                    >
                        {popular.map((movie) => (
                            // <div>Kuch ho gya </div>
                            <div key={movie.id} className="" style={{ color: "white", position: "relative", height: "100%" }}>
                                <div className="posterImage" style={{ width: "100%" }}>
                                    <img style={{ width: "100%", height: "100%" }} src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="poaterImage_overlay" style={{ top: "0px", zIndex: "10", background: "rgba(0,0,9,0.2)", height: "100%", width: "100%", position: "absolute" }}>
                                    <section className="" style={{ width: "100%", height: "100%", background: "", position: "relative" }}>
                                        <div className="absolute  w-[70%] ml-36 h-80 bottom-16 z-10" >
                                            <div className="posterImage_title text-left w-full text-[60px] space-x-2 text-red-600 font-bold ">{movie ? movie.original_title: ""}</div>
                                            <div className="posterImage_runtime text-[20px] text-left ml-1 mt-5 ">{movie ? movie.release_date : ""}
                                                <span className="PosterImage_rating ml-10 ">
                                                    Rating
                                                    {
                                                        movie ? movie.vote_average : ""
                                                    }
                                                    <i className="fas fa-star">{""}</i>
                                                </span>
                                            </div>

                                            <div className="desc text-[20px] w-full mt-3 text-left">{movie ? movie.overview : ""}</div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        ))

                        }

                    </Carousel>

                </div>

            </div>
    )
}