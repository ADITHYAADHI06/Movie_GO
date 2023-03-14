import React from 'react'
import { Link } from 'react-router-dom';



const Day31 = ({ match, year, month, todaydate }) => {
    console.log("runing31");

    return (
        <>{
            [...Array(32)].map((_, i) => (
                i > todaydate ? (
                    <Link key={i} className='datebox' to={`${match.url}/${i}-${month}-${year}`}><span>{i}-{month}-{year}</span></Link>
                ) : (
                    <span className='none'> </span>
                )
            )
            )
        }
        </>
    )
}

export default Day31