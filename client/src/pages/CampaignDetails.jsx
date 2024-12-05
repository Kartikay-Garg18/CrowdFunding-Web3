import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ethers } from 'ethers'
import { useStateContext } from '../context'
import { CustomButton } from '../components'
import { calculateBarPercentage, daysLeft } from '../utils'

const CampaignDetails = () => {
  const { state } = useLocation()
  console.log(state)
  const { getDonations, address, contract } = useStateContext()
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [donators, setDonators] = useState([]);

  const remainingDays = daysLeft(state.deadline);

  return (
    <div>
      {isLoading && 'Loading...'}
      <div className='w-full flex md:flex-row flex-col mt-10 gap-[30px]'>
        <div className="flex-1 flex-col">
          <img src={state.image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default CampaignDetails