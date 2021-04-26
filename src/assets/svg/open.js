
import * as React from "react"

function Open(props) {
  return (
    <svg width={32} height={32} fill="none" className={props.className}>
      <rect x="13" y="13" width="6" height="6" rx="3" fill={props.fill}/>
      <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke={props.fill}/>
    </svg>
  )
}

export default Open