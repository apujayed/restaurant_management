import React from 'react'
import { CircularProgress, Backdrop } from '@mui/material'

const Spinner = () => {
  return (
<Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 100 }}
  open={true}
  // onClick={handleClose}
>
  <CircularProgress color="inherit" />
</Backdrop>
  )
}

export default Spinner