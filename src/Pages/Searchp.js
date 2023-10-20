



import { useContext } from "react"
import { APiContent } from "../ContextAPI/ApiContext"


export function Searchp() {

    const { search, setSearch } = useContext(APiContent)
    console.log(search)


    function searchHandler(e) {
        setSearch((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })

    }
    return (
        <div className="h-screen w-full bg-slate-300  ">


            < div className="w-[80%]" >
                <label>

                    <input type="text"
                        style={{ color: "black" }}
                        placeholder='search movie'
                        name="searchdata"
                        value={search.value}
                        onChange={searchHandler}
                    />
                    search
                </label>
            </div >

        </div>
    )
}