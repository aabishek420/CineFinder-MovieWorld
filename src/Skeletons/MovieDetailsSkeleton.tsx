import { Skeleton } from '@mui/material'


const MovieDetailsSkeleton = () => {
  return (
    <div className='flex flex-col md:flex-row gap-0 items-center justify-center mt-15 p-10'>
        <div>
            <Skeleton animation="wave" variant='rectangular'
                sx={{
                height: {
                    xs: 200, 
                    sm: 300,   
                    md: 400,   
                    },
                    width: {
                    xs: 150,
                    sm: 200,
                    md: 300,
                    } ,
                    bgcolor: (theme) =>
      theme.palette.mode === "dark" ? "grey.700" : "grey.500",
                    
                    }}/> 
        </div>
      <div className='flex flex-col gap-5 mt-15'>
        <Skeleton animation="wave"
        sx={
            {
                bgcolor: (theme) =>
      theme.palette.mode === "dark" ? "grey.700" : "grey.500",
            }
        } 
        
        className='w-60 md:w-110 lg:w-160 m-10' 
            height={40}
        />
        <Skeleton animation="wave" className='w-50 md:w-100 lg:w-150 m-10' sx={
            {
                bgcolor: (theme) =>
      theme.palette.mode === "dark" ? "grey.700" : "grey.500",
            }
        }  />
        <Skeleton animation="wave" className='w-40 md:w-90 lg:w-140 m-10' sx={
            {
                bgcolor: (theme) =>
      theme.palette.mode === "dark" ? "grey.700" : "grey.500",
            }
        }  />
        <Skeleton animation="wave" className='w-30 md:w-80 lg:w-130 m-10' sx={
            {
                bgcolor: (theme) =>
      theme.palette.mode === "dark" ? "grey.700" : "grey.500",
            }
        }  />
        <Skeleton animation="wave" className='w-20 md:w-70 lg:w-120 m-10' sx={
            {
                bgcolor: (theme) =>
      theme.palette.mode === "dark" ? "grey.700" : "grey.500",
            }
        }  />
      </div>
    </div>
  )
}

export default MovieDetailsSkeleton
