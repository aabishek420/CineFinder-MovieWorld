import { Skeleton } from '@mui/material'
import React from 'react'
import CardSkeleton from './CardSkeleton'

const HomeSkeleton = () => {
  return (
    <div className='flex flex-col items-center gap-5 mt-30'>
      <div>
        <div className='flex flex-col gap-5 items-center'>
          <Skeleton animation="wave" className='w-50 md:w-100 lg:w-150' sx={
            {
                bgcolor: (theme) =>
      theme.palette.mode === "dark" ? "grey.700" : "grey.500",
            }
        } />
          <Skeleton animation="wave" className='w-70 md:w-100 lg:w-150' sx={
            {
                bgcolor: (theme) =>
      theme.palette.mode === "dark" ? "grey.700" : "grey.500",
            }
        }  />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-40 p-10 '>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
      </div>
    </div>
  )
}

export default HomeSkeleton
