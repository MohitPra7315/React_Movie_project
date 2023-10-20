import { useState } from 'react'
import Spinner from './Spinner';

import { Card } from './Card';
import { useParams } from 'react-router-dom';
import { Pagination } from './Pagination';

// import { useLocation } from 'react-router-dom';
export function Movies({moviedata}) {
    const{type}=useParams();
    console.log(type)
// console.log(moviedata)

    
    
const[loader,setLoader]=useState(false)

  

    return (
        <div className='text-white pb-5'>
           <div className='text-white'>
                <h1 className='text-white font-bold text-[50px] ml-56 pt-28 '>{type.toUpperCase()}</h1>

                <section className="w-[1800px]  mx-auto flex  gap-4 items-center justify-center  h-auto flex-wrap pt-12 ">
                    {
                        loader ?
                            <Spinner></Spinner> :
                            moviedata.map((movie) => (<Card key={movie.id} movie={movie} ></Card>))
                    }
                </section>
            </div>

       
        </div>
    )
}