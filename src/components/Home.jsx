import React from 'react'
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


const Home = ({ getdata }) => {

    return (
        <>
            <div className='home-head'>
                <p>{getdata.length}<span> trips</span> </p>
                <div className='home-sub'>
                    <p>{
                        getdata.filter((d) => (d.type === 'Trek')).length
                    }
                        <WbSunnyIcon /></p>
                    <p>{
                        getdata.filter((d) => (d.type === 'Club')).length
                    }
                        <FilterHdrIcon /></p>
                    <p>{
                        getdata.filter((d) => (d.type === 'Tropic')).length
                    }
                        <FreeBreakfastIcon /></p>
                </div>
                <div className='home-load'>
                    <LinearProgress variant="determinate" color='secondary' value={getdata.length === 16 ? getdata.length * 6 + 4 : getdata.length * 6} />
                    <span>{getdata.length === 16 ? getdata.length * 6 + 4 : getdata.length * 6}%</span>
                    {getdata.length === 16 && <span className='home-limit'>Limit Reached</span>}

                </div>

            </div>
        </>
    )
}

Home.propTypes = {
    getdata: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    getdata: state.add
})

export default connect(mapStateToProps)(Home)
