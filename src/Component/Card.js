import "./Card.css";
import { Link } from "react-router-dom";
export function Card(props) {
    const movie = props.movie
    // console.log(movie)
    return (

        <Link to={`/Movie/${movie.id}`}>
            <div className="Movie-card w-32  border-white bottom-2 rounded-lg hover:scale-110 hover:z-50 shadow-lg shadow-slate-600  cursor-pointer transition-all duration-300  relative " style={{ width: "300px", height: "450px" }}>
                <div className="image-container">
                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} />
                </div>
                <div className="image-overlay absolute  z-10 pl-3 bottom-0 pb-2  " style={{ background: "rgba(0,0,9,0.6)" }}>
                    <h1 className="movie-title text-red-600 text-[16px] font-bold">{movie ? movie.original_title : ""}</h1>
                    <h4 className="vote text-[20px]">{movie ? movie.vote_average : ""}
                        <span>*</span>
                    </h4>
                    <p className="movie-overview text-[18px]">{movie ? movie.overview.substr(0, 150) : ""}</p>

                </div>

            </div>
        </Link>

    )
}   