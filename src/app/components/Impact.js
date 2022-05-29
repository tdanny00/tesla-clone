import React from 'react'
import styled from 'styled-components'

function Impacts() {
  return (
    <Report>
      <ReportText>
        <a href="#">Read Tesla's 2021 Impact Report</a>
      </ReportText>

    </Report>
  )
}

export default Impacts

const Report = styled.div`
  z-index: 17;
  background-color:white;
  height: 50px;
  padding: 20px;
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  right:0;
  justify-content: center;
`

const ReportText = styled.div`
  border-bottom: 1px solid;
`