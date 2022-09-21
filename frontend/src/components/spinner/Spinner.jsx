import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

const Spinner = () => {
  return (
    <div><Backdrop open={true}>
      <CircularProgress sx={{ color: '#FFF' }} />
    </Backdrop></div>
  )
}

export default Spinner