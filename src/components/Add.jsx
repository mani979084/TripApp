import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import { addTrip } from '../actions/add'
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Add = ({ addTrip, getTrip }) => {

    const getid = JSON.parse(localStorage.getItem('trip')) || []
    const [open, setOpen] = useState(false);

    const datefield = useRef();
    const placefield = useRef();

    const [getdata, setdata] = useState({ id: getid.length, date: '', place: '', type: 'Trek' })

    function handleChange(e) {
        datefield.current.style.borderColor = '#fff';
        placefield.current.style.borderColor = '#fff';

        const { name, value } = e.target;
        setdata({ ...getdata, [name]: value });
    }

    function handleClick(e) {
        e.preventDefault();
        if (!getdata.date) {
            return datefield.current.style.borderColor = '#f54748';
        } else if (!getdata.place) {
            return placefield.current.style.borderColor = '#f54748';
        }
        setdata({ ...getdata, id: getdata.id + 1, date: '', place: '' })
        addTrip({ ...getdata, id: getdata.id + 1 })
        setOpen(true);
    }


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <div className='add-head'>
                <p>Add a trip</p>
                <form onSubmit={handleClick} className='add-field'>

                    <input onChange={handleChange} ref={datefield} value={getdata.date} name='date' type="date" />
                    <input onChange={handleChange} ref={placefield} autoComplete="off" value={getdata.place} name='place' type="text" placeholder='place' />
                    <select onChange={handleChange} name='type' value={getdata.type} id="">
                        <option value="Trek">Trek</option>
                        <option value="Club">Club</option>
                        <option value="Tropic">Tropic</option>
                    </select>
                    <div>
                        <button style={{ pointerEvents: getTrip.length >= 16 ? 'none' : '' }} >SUBMIT</button>
                        {getTrip.length >= 16 && <span className='add-limit'>Limit Reached</span>}
                    </div>
                    <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">
                            Successfully Trip Added!
                        </Alert>
                    </Snackbar>
                </form>
            </div>
        </>
    )
}

Add.propTypes = {
    addTrip: PropTypes.func.isRequired,
    getTrip: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    getTrip: state.add
})

export default connect(mapStateToProps, { addTrip })(Add)
