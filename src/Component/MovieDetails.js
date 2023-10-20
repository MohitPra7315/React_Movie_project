import { useParams } from 'react-router-dom';
import "./MovieDetails.css"
import { useState, useEffect } from 'react'
import Spinner from './Spinner';
export function MovieDetails() {


    const [movie, setMovie] = useState('')
    const [loading, setLoading] = useState(false)
    const [titleMoviedata, setTitlemoviedata] = useState(`${movie.original_title}`)
    // const [ttid, setTtid] = useState([movie.imdb_id])
    const [originaltitle, setOriginaltitle] = useState([movie.original_title
    ])

    const { id } = useParams()

    // console.log(movie);


    async function Movieapi() {
        // const Url = `https://api.themoviedb.org/3/movie/?${id}&api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
        const Url = `
        https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        setLoading(true)
        try {
            const res = await fetch(Url);
            const output = await res.json();
            // console.log(output)
            setMovie(output)
            // setTtid(movie.imdb_id)
            // setOriginaltitle(movie.original_title);
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    async function imdb_idData(movie) {
        setLoading(true)
        console.log(movie.original_title)
        try {
            const Uurl = await fetch(`https://www.omdbapi.com/?t=${movie.original_title}&apikey=86dc460a`)
            const idmovie = await Uurl.json();
            // console.log(idmovie);
            setTitlemoviedata(idmovie)
        }
        catch (error) {
            console.log("error is occured")
            console.log(error);
        }
        setLoading(false)

    }
    useEffect(() => {

        Movieapi();
        // imdb_idData(movie);
    }, [])

    // useEffect(() => {
    //     imdb_idData(movie);
    // }, [movie.original_title])
    useEffect(() => {
        Movieapi()
    }, [id])

    return (
        <div>
            {
                loading ? <Spinner></Spinner> :

                    <div className='pb-[50px]'>
                        <div className=' imag-cont pb-[100px] '>
                            <img className="movie__backdrop  cover " src={`https://image.tmdb.org/t/p/original${movie ? movie.backdrop_path : ""}`} />
                            <div className="movie__detail ">
                                <div className="movie__detailRight ">
                                    <div className="movie__detailRightTop">
                                        <div className="movie__name">{movie ? movie.original_title : ""}</div>
                                        <div className='connt'>

                                            <div className="movie__tagline">{movie ? movie.tagline : ""}</div>
                                            <div className='flex '>
                                                <div className="movie__rating">
                                                    {movie ? movie.vote_average : ""} <i class="fas fa-star" className='border-l-2 -px-2' />
                                                    <span className="movie__voteCount border-r-2 px-2">{movie ? "(" + movie.vote_count + ") votes" : ""}</span>
                                                </div>
                                                <div className="movie__runtime">{movie ? movie.runtime + " mins" : ""}</div>
                                            </div>
                                            <div className="movie__releaseDate">{movie ? "Release date: " + movie.release_date : ""}</div>
                                        </div>
                                        <div className="movie__genres">
                                            {
                                                movie && movie.genres
                                                    ?
                                                    movie.genres.map(genre => (
                                                        <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                                    ))
                                                    :
                                                    ""
                                            }
                                        </div>
                                    </div>
                                    <div className="movie__detailRightBottom">
                                        <div className="synopsisText">Synopsis</div>
                                        <div>{movie ? movie.overview : ""}</div>
                                    </div>

                                </div>
                            </div>
                            {/* <div className=' hot mx-auto rounded-md text-white h-18 w-11/12 bg-linear-gradient(90deg,#333 5%,#181818 95%);' >
                                <p className='text-[50px]'>{titleMoviedata.Language}</p>
                            </div> */}
                        </div>
                        <div className=''>
                            <h1 className='text-center text-white text-[30px] -mb-5'>overview</h1>
                            <div className='section w-[80%] h-36 mx-auto mt-12 text-white '>

                                <hr></hr>
                                <p className='w-[900px] mx-auto text-center text-[16px] h-full pt-8 leading-20'>{movie.overview}</p>
                                <hr></hr>
                            </div>
                        </div>
                        <div className=' bg-white  w-[80%] mt-8 h-[555px] pl-20  rounded-lg flex mx-auto justify-around items-center' >
                            <div className="movie__detailLeft  ">
                                <div className="movie__posterBox h-470px  ">
                                    <img className="movie__poster h-full " src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
                                </div>
                            </div>
                            <div className='bg-#333 h-full w-[80%] mr-8 mt-3 rounded-lg  '>
                                <section className='bg-black h-[440px] w-full mt-14  rounded-lg'>
                                <div className="movie__detailRight ">
                                    <div className="movie__detailRightTop">
                                        <div className="movie__name">{movie ? movie.original_title : ""}</div>
                                        <div className='connt'>

                                            <div className="movie__tagline">{movie ? movie.tagline : ""}</div>
                                            <div className='flex '>
                                                <div className="movie__rating">
                                                    {movie ? movie.vote_average : ""} <i class="fas fa-star" className='border-l-2 -px-2' />
                                                    <span className="movie__voteCount border-r-2 px-2">{movie ? "(" + movie.vote_count + ") votes" : ""}</span>
                                                </div>
                                                <div className="movie__runtime">{movie ? movie.runtime + " mins" : ""}</div>
                                            </div>
                                            <div className="movie__releaseDate">{movie ? "Release date: " + movie.release_date : ""}</div>
                                        </div>
                                        <div className="movie__genres">
                                            {
                                                movie && movie.genres
                                                    ?
                                                    movie.genres.map(genre => (
                                                        <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                                    ))
                                                    :
                                                    ""
                                            }
                                        </div>
                                    </div>
                                    <div className="movie__detailRightBottom">
                                        <div className="synopsisText">Overview</div>
                                        <div>{movie ? movie.overview : ""}</div>
                                    </div>

                                </div>
                                  
                                </section>

                            </div>
                        </div>
                          <p className='text-white'>{movie.tagline}</p> 
                                    <h1 className='text-center text-[30px]  rounded-lg w-[400px] text-white font-bold letter-space-2 mx-auto  py-3 px-4'>Production companies</h1>
                                     <div className='flex w-[100%] justify-around  items-center mt-7 '>
                                        <div className='w-[150px] h-[150px] border-2 border-white'>
                                            <img className='h-[100%] w-[100%]' src={`https://image.tmdb.org/t/p/original/iB6GjNVHs5hOqcEYt2rcjBqIjki.png`}></img>
                                           
                                        </div>
                                        <div className='w-[150px] h-[150px] border-2 border-white'>
                                            <img className='h-[100%] w-[100%] bg-cover bg-center' src={`https://image.tmdb.org/t/p/original/8PAf5K4VVI6xO9SjB7bxLtpi4xH.png`}></img>

                                        </div>
                                     
                                    </div>

                    </div>

            }


        </div>
    )
}