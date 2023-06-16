import React from 'react'
import {Stack} from '@mui/material'

const CommunitySlide = () => {
  return (
    <Stack mt={"50px"} mb={'50px'} overflow={'hidden'}>
        <div className='Text-Below-Card'>A Community For:</div>
        <div class="animated-text">
        <span><i className="fas fa-briefcase"></i> Businessmen</span>
        <span><i className="fas fa-kitchen-set"></i> Chef</span>
        <span><i className="fas fa-user-md"></i> Doctor</span>
        <span><i className="fas fa-tools"></i> Carpenter</span>
        </div>
    </Stack>
  )
}

export default CommunitySlide