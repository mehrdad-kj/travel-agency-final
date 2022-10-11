import { Button } from 'bootstrap';
import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

function Bucket() {
    const context = useContext(UserContext);
    const {
        addedResorts,
        handleDeleteBucket,
    } = context;



    return (
        <div className='m-5'>
            <h1 className='container m-4'>Bucket List</h1>
            {addedResorts.map((item) => {
                return (
                    <div className='card bg-light m-4 mt-5 d-flex align-items-center flex-row ' key={item.id}>
                        <p className='fs-5 m-0 card-body font-weight-bold'>{item.title}</p>
                        <button className='btn btn-danger me-3' value={item.id} onClick={handleDeleteBucket}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Bucket