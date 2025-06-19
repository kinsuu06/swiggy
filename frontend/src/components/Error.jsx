import React from 'react'
import { useRouteError } from 'react-router'

function Error() {
    const error = useRouteError();
  return (
    <div>
        <div>Error Page</div>
        <h1>Status : {error.status} - {error.statusText}</h1>
        <h1>Error : {error.data}</h1>
    </div>
  )
}

export default Error