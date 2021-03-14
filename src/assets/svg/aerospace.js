import * as React from "react"

function SvgAero(props) {
  return (
    <svg width={9} height={180} {...props}>
      <text
        transform="rotate(90 718.5 -590.5)"
        fill="#1E170A"
        fillRule="evenodd"
        fontFamily="Helvetica"
        fontSize={10}
        letterSpacing={2.143}
      >
        <tspan x={1310} y={127}>
          {"AN AEROSPACE COMPANY"}
        </tspan>
      </text>
    </svg>
  )
}

export default SvgAero
