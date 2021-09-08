import React from 'react'

const Loader = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center bg-dark bg-opacity-50" style={{
                position: 'absolute',
                height: '100vh',
                width: '100%',
                zIndex: '1'
            }}>
                <div style={{
                    height: '10rem',
                    width: '10rem',
                    backgroundColor: '#fff'
                }} className='d-flex flex-column justify-content-center align-items-center rounded-3'>
                    <h4 className='mb-4'>
                        Listening...
                    </h4>
                    <div className="spinner-grow text-primary d-flex justify-content-center align-content-center" role="status" />
                </div>
            </div>
        </>
    )
}

export default Loader
