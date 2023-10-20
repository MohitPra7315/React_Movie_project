import { useContext, useState } from "react"
import { APiContent } from "../ContextAPI/ApiContext"
import "./pagination.css"
export function Pagination() {

    const { popularpage, setPopularpage } = useContext(APiContent)

    const [count, setCount] = useState(1)
    setPopularpage(count)
    console.log(popularpage)

    function prevHandler() {
        console.log("prev clicked")

        if (count > 0) {

            setCount(count - 1)
        } else {
            setCount(1)
        }
    }

    function NextHandler() {
        console.log("Next clicked")
        setCount(count + 1)

    }


    return (
        <div className="footer  w-[1560px] h-[70px] bg-slate-700 mx-auto  ">
            <div className="flex  items-center my-auto justify-around h-[70px]">

                <div className="flex ">
                    <div className=" text-[20px] text-red-500 font-semibold py-3 px-4">Page</div>
                    <div className=" text-[20px] py-3 px-4 text-white">
                        {popularpage}
                    </div>
                </div>
                <div>
                    <button className="bg-red-600 text-white py-3 px-4 rounded-md font-semibold hover:cursor-pointer mr-4 hover:bg-red-500"
                        onClick={prevHandler}
                    >
                        Prev
                    </button>
                 

                    <button className="bg-red-600 py-3 text-white px-4 rounded-md font-semibold hover:cursor-pointer hover:bg-red-500"
                        onClick={NextHandler}
                    >Next</button>

                </div>
            </div>
        </div>
    )
}