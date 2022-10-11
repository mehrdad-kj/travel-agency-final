
import React, { useContext, useEffect, useState } from 'react'
import Resort from './Resort'
import { UserContext } from '../UserContext'


export default function Resorts() {

    const context = useContext(UserContext);
    const {
        serverData,
        handleFilterByTitle,
        handleBySortTop,
        resortsData,
        sortedData,
        setResortsData,
        setSortedData,
        handleBySortDown,
    } = context;



    return (
        <div>
            <section className="py-5 mb-5">
                <div className="container px-4 px-lg-5 mt-5 mb-5">
                    <div className='d-flex align-items-center mb-5 justify-content-between'>
                        <input className='input-name w-50 form-control' type='text' placeholder='Search Resorts By Title' onChange={handleFilterByTitle}></input>
                        <div className='d-flex gap-2'>
                            <button className='btn btn-primary d-flex align-items-center gap-2' onClick={handleBySortTop}>
                                Sort
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sort-up" viewBox="0 0 16 16">
                                    <path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707V12.5zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                                </svg>
                            </button>
                            <button className='btn btn-primary d-flex align-items-center gap-2' onClick={handleBySortDown}>
                                Sort
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sort-down" viewBox="0 0 16 16">
                                    <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
                        {sortedData.length === 0 ?
                            resortsData.map((item) => {
                                return (
                                    <Resort {...item} key={item.id} />
                                )
                            })
                            :
                            sortedData.map((item) => {
                                return (
                                    <Resort {...item} key={item.id} />
                                )
                            })}
                    </div>
                </div>
            </section>
        </div>
    )
}
