import React from 'react'

const oracle = {
  "name": "Oracle",
  "subtitle": "Incentivized to not Equivocate",
  "backend_url": "http://127.0.0.1:18450",
  "face": "/oracle.webp"
}

const OracleInfo = ({ psbt, inputs }) => {
  return (
    <div className="container info-card oracle-info-card">
      <div className="name-face-container">
        <div>
          <h1>{oracle.name}</h1>
          <h3><i>({oracle.subtitle})</i></h3>
        </div>
        <img className="face-image" src={process.env.PUBLIC_URL + oracle.face} alt="face" />
      </div>
      <p>Inputs: {inputs.length}</p>
      <button>Create PSBT</button>

    </div>
  )
}

export default OracleInfo