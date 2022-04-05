import React from 'react'

function PSBT({ inputs, output }) {
  return (
    <div className="psbt-card">
      <div className="inner-card">
        <h1>PSBT Inputs: </h1>
        {inputs.map(input => (
          <div>
            <p>{JSON.stringify(input)},</p>
          </div>
        ))}
        <h1>Output: </h1>
        {output === "" ? <p></p> : <p>{JSON.stringify(output)}</p>}
      </div>
    </div >
  )
}

export default PSBT