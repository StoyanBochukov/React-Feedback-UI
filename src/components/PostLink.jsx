import React from 'react'
import {FaPeopleArrows} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const PostLink = () => {
  return (
    <div className='about-link'>
        <Link to='/post'>
            <FaPeopleArrows size={30}/>
        </Link>
    </div>
  )
}

export default PostLink