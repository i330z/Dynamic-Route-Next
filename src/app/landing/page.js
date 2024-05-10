import React from 'react'

const Landing = () => {

    const images = [
        'https://images.unsplash.com/photo-1610142991820-e02266a4a9f0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1551799517-eb8f03cb5e6a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]

    return (
        <div className='wrapper bg-[#FFECEC]'>
            <div className="hero  bg-[url('https://plus.unsplash.com/premium_photo-1682096353438-03b20899f011?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
                <div className='min-h-screen flex flex-col justify-between bg-slate-300 p-6 bg-opacity-20'>
                    <h1 className='text-[#7A2626] text-5xl'>Vibbe.</h1>
                    <div className='text-5xl text-white font-semibold'>
                        Create <br /> Your Own Vibe
                    </div>
                </div>
            </div>
            <div className='create-now p-6'>
                {
                    images.map(img => (

                        <div className="card bg-white rounded-xl overflow-hidden mb-5" >
                            <img className='h-96 object-cover object-center w-full' src={img} alt="" srcset="" />
                            <div className='px-4 py-6 flex justify-between'>
                                <div>
                                    <h2 className='text-2xl font-semibold'>CAPTION TEE</h2>
                                    <span className='text-gray-600'>FROM $999</span>
                                </div>
                                <button className='border-2 border-gray-500 px-6 rounded-lg'>
                                    CREATE NOW
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='template px-6 pb-6'>
                <h2 className='text-center text-2xl mb-10'>START WITH TEMPLATE</h2>
                
                <div className="grid grid-cols-2 gap-2">
                    <div className='h-64 bg-red-400 rounded-lg relative overflow-hidden'>
                        <img src="https://images.unsplash.com/photo-1589902860314-e910697dea18?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" srcset="" />
                        <button className='bg-[#7A2626] w-4/5 py-2 text-white rounded-full absolute bottom-4 left-1/2 transform -translate-x-1/2'>Choose</button>
                    </div>
                    <div className='h-64 bg-red-400 rounded-lg relative overflow-hidden'>
                        <img src="https://images.unsplash.com/photo-1565128354282-a6390fc125b2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" srcset="" />
                    <button className='bg-[#7A2626] w-4/5 py-2 text-white rounded-full absolute bottom-4 left-1/2 transform -translate-x-1/2'>Choose</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing