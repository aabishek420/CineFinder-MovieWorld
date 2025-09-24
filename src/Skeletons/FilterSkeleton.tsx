import React from 'react'
import CardSkeleton from './CardSkeleton'
import { Skeleton } from '@mui/material'

const FilterSkeleton = () => {
  return (
    <div>
        <div className='flex flex-col gap-5 items-center mt-15'>
            <Skeleton animation="wave" className='w-50 md:w-100 lg:w-150 m-10' sx={
            {
                bgcolor: (theme) =>
      theme.palette.mode === "dark" ? "grey.700" : "grey.500",
            }
        } />
        </div>
        <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-10 place-items-center'>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
    </div>
    </div>
  )
}

export default FilterSkeleton
