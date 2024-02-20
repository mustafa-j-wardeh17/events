import EventForm from '@/components/shared/EventForm'
import { getEventById } from '@/lib/actions/event.action'
import { auth } from '@clerk/nextjs'
import React from 'react'

interface UpdateEventsParams {
  params: {
    id: string
  }
}
const UpdateEvent = async ({ params: { id } }: UpdateEventsParams) => {
  const event = await getEventById(id)
  const { sessionClaims } = auth()
  const userId = sessionClaims?.userId as string
  return (
    <div>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Create Event</h3>
      </section>
      <div className="wrapper my-8">
        <EventForm userId={userId} eventId={id} event={event} type='Update' />
      </div>
    </div>
  )
}

export default UpdateEvent