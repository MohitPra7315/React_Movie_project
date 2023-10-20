import { useContext, useState } from "react"
import { APiContent } from "../ContextAPI/ApiContext"
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
        <div className="w-[1560px] h-[70px] bg-black mx-auto  ">
            <div className="flex justify-center items-center my-auto h-[70px]">

                <button className="bg-red-700 py-3 px-4 rounded-md font-semibold hover:cursor-pointer hover:bg-red-500"
                    onClick={prevHandler}
                >
                    Prev
                </button>

                <div className="py-3 px-4 text-white">
                    {popularpage}
                </div>
                <button className="bg-red-700 py-3 px-4 rounded-md font-semibold hover:cursor-pointer hover:bg-red-500"
                    onClick={NextHandler}
                >Next</button>
            </div>
        </div>
    )
}