
import React from 'react'
import Otp from './Otp'
import AuthLayout from '@/app/Layouts/AuthLayout/AuthLayout'

const AuthScreen = () => {
  return (
     <AuthLayout>
        <div>
           <Otp />
        </div>
     </AuthLayout>
  )
}

export default AuthScreen