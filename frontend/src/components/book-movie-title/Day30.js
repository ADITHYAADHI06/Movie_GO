import React from 'react'
import { Link } from 'react-router-dom';


const Day30 = ({ match, year, month, todaydate }) => {
    console.log("runing30");

    return (
        <>
            {[...Array(31)].map((_, i) => (
                i > todaydate ? (
                    <Link key={i} to={`${match.url}/${i}-${month}-${year}`}><span>{i}-{(month)}-{year}</span></Link>
                ) : (
                    <span className='none'> </span>
                )
            ))
            }
        </>
    )
}

export default Day30