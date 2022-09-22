import React from 'react'
// import RegistrationComponent from '../../components/dashboard/RegistrationComponent'
import BullyRegistration from '../../components/dashboard/BullyRegistration'
import DashboardLayout from '../../components/dashboard/DashboardLayout'
import RegisteredBullies from '../../components/dashboard/RegisteredBullies'

const Registration = () => {
  return (
    <>
    <DashboardLayout>
        <RegisteredBullies/>
    </DashboardLayout>
    </>
  )
}

export default Registration