import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useState } from 'react';


const Show = ({ getdata }) => {

    const [trip, settrip] = useState(getdata)

    function allClick() {
        settrip(getdata)
    }
    function treksClick() {
        const newdata = getdata.filter((data) => (data.type === 'Trek'))
        settrip(newdata)
    }
    function clubsClick() {
        const newdata = getdata.filter((data) => (data.type === 'Club'))
        settrip(newdata)
    }
    function tropicsClick() {
        const newdata = getdata.filter((data) => (data.type === 'Tropic'))
        settrip(newdata)
    }

    return (

        <>
            <div className='show-head'>
                <p >All Trips</p>
                <div className='show-table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Place</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trip.map((data) => (
                                <tr key={data.id} >
                                    <td>{data.date}</td>
                                    <td>{data.place}</td>
                                    <td>{data.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {!getdata.length && <p className='show-no'>No Trip Available</p>}

                <div className='show__filter'>
                    <span>
                        Filter by:
                    </span>
                    <span onClick={allClick} className='show-filter'> All<span className='show-icon'><FiberManualRecordIcon fontSize='inherit' /></span></span>
                    <span onClick={treksClick} className='show-filter'> Trecks<span className='show-icon'><FiberManualRecordIcon fontSize='inherit' /></span></span>
                    <span onClick={clubsClick} className='show-filter'> Clubs<span className='show-icon'><FiberManualRecordIcon fontSize='inherit' /></span></span>
                    <span onClick={tropicsClick} className='show-filter'> Tropics<span className='show-icon'><FiberManualRecordIcon fontSize='inherit' /></span></span>
                </div>
            </div>
        </>
    )
}

Show.propTypes = {
    getdata: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    getdata: state.add
})

export default connect(mapStateToProps)(Show)
