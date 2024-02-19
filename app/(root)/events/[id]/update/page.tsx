import EventForm from '@/components/shared/EventForm'
import { auth } from '@clerk/nextjs'
import React from 'react'

const UpdateEvent = () => {
  const {sessionClaims} = auth()
  const userId = sessionClaims?.userId as string
  return (
    <div>
      <EventForm  userId={userId} type='update' />
    </div>
  )
}

export default UpdateEvent