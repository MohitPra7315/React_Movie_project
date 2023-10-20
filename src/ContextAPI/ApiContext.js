import { createContext, useEffect, useState } from "react"

export const APiContent = createContext()

export function AppcontextProvider({ children }) {
    
    
    
    const [loader, setLoader] = useState()
    const [toprated, setToprated] = useState()
    const [upcoming, setUpcoming] = useState()
    const [popular, setPopular] = useState()
    const [search, setSearch] = useState("")
    const[popularpage,setPopularpage]=useState("1")
    const[upcomingpage,setupcomingpage]=useState("1")
    const[top_ratedpage,settop_ratedpage]=useState("1")
    
    const Popular = `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1`
    const upcomming = `https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1`
    const TopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1`





    const value = {
        loader, setLoader,
        toprated, setToprated,
        upcoming, setUpcoming,
        popular, setPopular,
        search, setSearch,
        popularpage,setPopularpage,
        upcomingpage,setupcomingpage,
        top_ratedpage,settop_ratedpage
    }
    return <APiContent.Provider value={value}>
        {children}
    </APiContent.Provider>


}