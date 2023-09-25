import { createContext, useEffect, useState } from "react"

export const APiContent = createContext()

export function AppcontextProvider({ children }) {
    const Popular = `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    const upcomming = `https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    const TopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`



    const [loader, setLoader] = useState()
    const [toprated, setToprated] = useState()
    const [upcoming, setUpcoming] = useState()
    const [popular, setPopular] = useState()
   
    // console.log("PPopular"+popular)

    // useEffect(() => {
    //     async function PopularMovie() {
    //         setLoader(true)
    //         try {
    //             const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US');
    //             const datapopular = await res.json()
    //             console.log(datapopular)
    //             setPopular(datapopular)
    //         }
    //         catch (error) {
    //             console.log(error)
    //         }
    //         setLoader(false)
    //     }
    //     PopularMovie();


    // }, [])
    // console.log(popular)

    // useEffect(() => {
    //     async function TopRatedMovie() {
    //         // setLoader(true)
    //         try {
    //             const res = await fetch(TopRated);
    //             const topmovie = await res.json()
    //             console.log(topmovie)
    //             setToprated(topmovie)
    //         }
    //         catch (error) {
    //             console.log(error)
    //         }
    //         // setLoader(false)
    //     }
    //     TopRatedMovie();


    // }, [])

    // useEffect(() => {
    //     async function UpcomingMovie() {
    //         // setLoader(true)
    //         try {
    //             const res = await fetch(upcoming);
    //             const upcoming = await res.json()
    //             console.log(upcoming)
    //             setUpcoming(upcoming)
    //         }
    //         catch (error) {
    //             console.log(error)
    //         }
    //         // setLoader(false)
    //     }
    //     UpcomingMovie();


    // }, [])



   

    const value = {
        loader, setLoader,
        toprated, setToprated,
        upcoming, setUpcoming,
        popular, setPopular
    }
    return <APiContent.Provider value={value}>
        {children}
    </APiContent.Provider>


}