import * as React from "react"

function Close(props) {
  return (
    <svg width={32} height={32} fill="none" className={props.className}>
      <path
        stroke={props.fill}
        d="M20.646 21.354l-10-10M21.354 11.354l-10 10"
      />
      <rect
        x={0.5}
        y={0.5}
        width={31}
        height={31}
        rx={15.5}
        stroke={props.fill}
      />
    </svg>
  )
}

export default Close
