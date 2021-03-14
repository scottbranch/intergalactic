import { useEffect } from "react"

// We are excluding this from loading at build time in gatsby-node.js
import LocomotiveScroll from "locomotive-scroll"

import { scroll } from "../theme"

/**
 * Gets computed translate values
 * @param {HTMLElement} element
 * @returns {Object}
 */
const getTranslateValues = element => {
  const style = window.getComputedStyle(element)
  const matrix =
    style["transform"] || style.webkitTransform || style.mozTransform

  // No transform property. Simply return 0 values.
  if (matrix === "none" || typeof matrix === "undefined") {
    return {
      x: 0,
      y: 0,
      z: 0,
    }
  }

  // Can either be 2d or 3d transform
  const matrixType = matrix.includes("3d") ? "3d" : "2d"
  const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(", ")

  // 2d matrices have 6 values
  // Last 2 values are X and Y.
  // 2d matrices does not have Z value.
  if (matrixType === "2d") {
    return {
      x: matrixValues[4],
      y: matrixValues[5],
      z: 0,
    }
  }

  // 3d matrices have 16 values
  // The 13th, 14th, and 15th values are X, Y, and Z
  if (matrixType === "3d") {
    return {
      x: matrixValues[12],
      y: matrixValues[13],
      z: matrixValues[14],
    }
  }
}

const Scroll = callbacks => {
  useEffect(() => {
    let locomotiveScroll
    locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(scroll.container),
      ...scroll.options,
    })
    locomotiveScroll.update()

    // Exposing to the global scope for ease of use.
    window.scroll = locomotiveScroll

    const imageFloat = document.getElementById("image-float-container")
    const floatImg = document.getElementById("float-image")

    locomotiveScroll.on("scroll", func => {
      // Update `data-direction` with scroll direction.
      document.documentElement.setAttribute("data-direction", func.direction)
      const { y } = getTranslateValues(imageFloat)

      //creating the rotate value for the homepage ImageFloat component
      let rotateValue = y / 30 + 60
      floatImg.style.transform = "rotate(" + rotateValue + "deg)"
    })

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
  }, [callbacks])

  return null
}

export default Scroll
