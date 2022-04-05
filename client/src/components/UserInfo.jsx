import React from 'react'

const InfoCard = ({ user, setInput, setOutput }) => {

  const handleAddInput = () => {
    setInput({ "txid": user.txid, "vout": user.vout })
  }
  const handleAddOutput = () => {
    setOutput({ "address": "tb1phjsndy8vlksztlj9nrxw8cqt9w6yej5t9mn9jsl8clmgs48h3c4sn7yyr9", "amount": "6500000000" })
  }
  return (
    <div className="container info-card">
      <div className="name-face-container">
        <div>
          <h1>{user.name}</h1>
          <h3><i>({user.subtitle})</i></h3>
        </div>
        <img className="face-image" src={process.env.PUBLIC_URL + user.face} alt="face" />
      </div>
      {user.name !== 'Oracle' ? <button onClick={() => handleAddInput()}>Add Input</button> : <button onClick={() => handleAddOutput()}>Set Output</button>}
    </div>
  )
}

export default InfoCard