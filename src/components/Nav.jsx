import React from 'react'
import HouseRoundedIcon from '@material-ui/icons/HouseRounded';
import PostAddIcon from '@material-ui/icons/PostAdd';
import EventNoteIcon from '@material-ui/icons/EventNote';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <div className='nav_color'>
                <Link to='/'><p><HouseRoundedIcon fontSize='large' /></p></Link>
                <Link to='/add'><p><PostAddIcon fontSize='large' /></p></Link>
                <Link to='/show'> <p><EventNoteIcon fontSize='large' /></p></Link>
            </div>
        </>
    )
}

export default Nav
