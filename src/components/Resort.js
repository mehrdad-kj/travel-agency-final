import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'


function Resort(props) {

    const context = useContext(UserContext);
    const {
        handleAddBucket,
    } = context;


    return (
        <div className="col mb-5" >
            <div className="card h-100" >
                <img className="card-img-top" src={props.img} alt="..." />
                <div className="card-body p-4">
                    <div className="">
                        <Link className='text-decoration-none' to={`resorts/${props.id}`}><h5 className="fw-bolder">{props.title}</h5></Link>
                    </div>
                    <div>
                        <p>{`price: ${props.price}`}</p>
                    </div>
                    <div>
                        <p>{props.description}</p>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <button className="btn btn-outline-dark mt-auto" href="#" value={props.id} onClick={handleAddBucket}>Add to Bucket</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resort