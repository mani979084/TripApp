import React, { useEffect } from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { deleteTrip } from '../actions/add'


const Show = ({ getdata, deleteTrip }) => {

    const [trip, settrip] = useState(getdata)
    const [checkdata, setcheck] = useState([])

    useEffect(() => {
        settrip(getdata)
    }, [getdata])

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

    function check(e) {
        const { value, checked } = e.target;
        if (checked) {
            setcheck([...checkdata, value])
        } else {
            const newdata = checkdata.filter((d) => (d !== value))
            setcheck(newdata)
        }
    }


    function deletedata() {
        const c = getdata.filter(x => !checkdata.filter(y => y === x.id).length);
        deleteTrip(c)
    }

    return (

        <>
            <div className='show-head'>
                <p >All Trips{getdata.length !== 0 && <span><Fab onClick={deletedata} aria-label="delete">
                    <DeleteOutlineIcon />
                </Fab></span>}</p>
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
                                    <td>
                                        <Checkbox name="checkedA" value={data.id} onChange={check} />
                                    </td>

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
    deleteTrip: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    getdata: state.add
})

export default connect(mapStateToProps, { deleteTrip })(Show)
