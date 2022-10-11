import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../UserContext'

function Resortdetail() {


  const { id } = useParams();

  const context = useContext(UserContext);
  const {
    serverData,
    handleFilterByTitle,
    handleBySort,
    resortsData,
    sortedData,
    setResortsData,
    setSortedData,
    bucket,
    setBucket,
    handleAddBucket,
  } = context;


  return (
    <div>
      {serverData.map((item) => {
        if (id == item.id) {
          return (
            <section>
              <div className="container px-4 px-lg-5 my-5" key={item.id}>
                <div className="row gx-4 gx-lg-5 align-items-center">
                  <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={item.img} alt="" /></div>
                  <div className="col-md-6">
                    <h1 className="display-5 fw-bolder">{item.title}</h1>
                    <div className="fs-5 mb-5">
                      <span>{item.price}</span>
                    </div>
                    <p className="lead">{item.description}{item.description}</p>
                    <div className="d-flex">
                      <button className="btn btn-outline-dark flex-shrink-0" type="button" value={item.id} onClick={handleAddBucket}>
                        Add to Bucket
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        }
      })}
    </div>
  )
}

export default Resortdetail