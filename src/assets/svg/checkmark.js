import * as React from "react"

function Checkmark(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M10.593 13.604l.07.069.07-.07 11.393-11.33L23.851 4 10.663 17.191l-5.856-5.859 1.725-1.725 4.061 3.997zm10.733 7.828h.1V10.766h2.466v10.567h0v.115l.003.301a409.038 409.038 0 01.005 1.826 23.382 23.382 0 01-.003.307l-2.57.017H2.665h0L.1 23.9V2.666v0V.1L2.666.099h13.229v2.467H2.565V21.432H21.327z"
        fill="#2D261E"
        stroke="#E6E1DA"
        strokeWidth={0.2}
      />
    </svg>
  )
}

export default Checkmark
