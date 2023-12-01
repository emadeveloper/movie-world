import React from 'react'
import SavedMovies from '../components/SavedMovies'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
      <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/91375920-3110-4636-833b-b29b3c076b2a/AR-es-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>My Movies</h1>
        </div>
      </div>
      <SavedMovies />
    </>
  )
}

export default Account