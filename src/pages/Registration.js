import React from 'react'
import Form  from './Registration/Form'
import Venue from './Registration/Venue'

const Registration = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline" >Registration page</h1>


       <Form></Form>
       <Venue></Venue>
    </div>
  )
}

export default Registration