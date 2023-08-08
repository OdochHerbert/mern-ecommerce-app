import React from 'react'
import { Link} from 'react-router-dom'
const Home = () =>{
    return (
        <>
        <div className='top_banner'>
            <div className='container'>
                <div className='detail'>
                <h2> The Best NoteBook Collection 2023</h2>
                
                <Link to='/product'> Shop Now </Link>
                
                </div>
            </div>
        </div>
        </>
    )
}
export default Home 