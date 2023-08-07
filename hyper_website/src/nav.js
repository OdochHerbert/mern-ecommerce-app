import React from 'react'
import { FaTruckMoving} from 'react-icons/fa'
import { BsFillChatHeartFill } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { GiContract } from 'react-icons/gi'
import './nav.css'
const Nav = () => {
  return(
    <>
    <div className='free'>
        <div className='icon'><FaTruckMoving/></div>
        <p>Free Shipping when shopping upto $1000</p>
    </div>
    <div className='main_header'>
      <div className='container'>
         <div className='logo'>
          <img src='./img/logo.jpeg' width='100px' alt='hearth_solutions'></img>

         </div>
         <div className='search_box'>
          <input type='text' value='' placeholder='Search Hyper' autoComplete='off'></input>
          <button>Search</button>
         </div>
         <div className='icon'>
          <div className='account'>
            <div className='user_icon'>
              <AiOutlineUser/>
            </div>
            <p>Hello User</p>
          </div>
          <div className='second_icon'>
            <p>
          <GiContract/>
            </p>
            <p>
          <BsFillChatHeartFill/>
            </p>
          </div>

         </div>
      </div>
    </div>
    </>
  )
}
export default Nav