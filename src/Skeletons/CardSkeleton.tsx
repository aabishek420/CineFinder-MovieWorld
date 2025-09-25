import { Skeleton } from '@mui/material'
import React from 'react'

const CardSkeleton = () => {
  return (
    <div className='flex flex-col'>
      <Skeleton animation="wave" variant='rectangular' height={200} width={150} style={{ marginBottom: 0 }} sx={
            {
                bgcolor: (theme) =>
      theme.palette.mode === "dark" ? "grey.700" : "grey.500",
            }
        }  />
      <Skeleton animation="wave" width={150} sx={
            {
                bgcolor: (theme) =>
      theme.palette.mode === "dark" ? "grey.700" : "grey.500",
            }
        }  />
      <div className='flex gap-12.5'>
        <Skeleton animation="wave" width={50} sx={
            {
                bgcolor: (theme) =>
      theme.palette.mode === "dark" ? "grey.700" : "grey.500",
            }
        } />
        <Skeleton animation="wave" width={50} sx={
            {
                bgcolor: (theme) =>
      theme.palette.mode === "dark" ? "grey.700" : "grey.500",
            }
        } />
      </div>
    </div>
  )
}

export default CardSkeleton
