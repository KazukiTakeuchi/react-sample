import React, { useState } from 'react'

const UPDATE_CYCLE = 1000;

const KEY_LOCAL = 'KEY_LOCAL';

enum Local {
  US = 'en-US',
  JP = 'ja-JP',
}


const getLocalFromString = (text: string) => {
  switch (text) {
    case Local.US:
      return Local.US
    case Local.JP:
      return Local.JP
    default:
      return Local.US
  }
}

export const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date());
  const [local, setLocal] = useState(Local.US);

  

  return (
    <div></div>
  )
}
