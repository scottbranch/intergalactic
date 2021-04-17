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

    const body = document.getElementsByTagName("body")[0]
    const html = document.getElementsByTagName("html")[0]

    locomotiveScroll.on("scroll", func => {
      // Update `data-direction` with scroll direction.
      document.documentElement.setAttribute("data-direction", func.direction)
    })

    locomotiveScroll.on("scroll", func => {
      if (body.classList.contains("home")) {
        const imageFloat = document.getElementById("image-float-container")
        const floatImg = document.getElementById("float-image")
        //image rotate stuff
        const { y } = getTranslateValues(imageFloat)
        //creating the rotate value for the homepage ImageFloat component
        let rotateValue = y / 30 + 120
        floatImg.style.transform = "rotate(" + rotateValue + "deg)"
      }
    })

    //This controls the whole orb animation stuff on the homepage
    locomotiveScroll.on("call", obj => {
      if (body.classList.contains("home")) {
        const orbSection = document.getElementById("orb-section")

        if (obj === "section1" || obj === "section2") {
          if (html.dataset.direction === "down") {
            if (orbSection.classList.contains("step-1")) {
              orbSection.classList.remove("step-1")
              orbSection.classList.add("step-2")
            } else if (orbSection.classList.contains("step-2")) {
              //let it ride
            } else {
              orbSection.classList.add("step-1")
            }
          }

          if (html.dataset.direction === "up") {
            if (orbSection.classList.contains("step-2") && obj === "section1") {
              orbSection.classList.remove("step-2")
              orbSection.classList.add("step-1")
            } else if (
              orbSection.classList.contains("step-1") &&
              obj === "section2"
            ) {
              orbSection.classList.remove("step-1")
            }
          }
        }
      }

      if (body.classList.contains("has-carousel")) {
        const carouselContainer = document.getElementById("carousel-container")

        if (obj === "1" || obj === "2" || obj === "3" || obj === "4") {
          if (html.dataset.direction === "down") {
            carouselContainer.classList = ""
            carouselContainer.classList.add("slide-" + obj)
          }

          if (html.dataset.direction === "up") {
            let integer = parseInt(obj, 10)
            let newInteger = integer - 1 //i have to do this for some weird reason
            let newString = newInteger.toString()
            carouselContainer.classList = ""
            carouselContainer.classList.add("slide-" + newString)
          }
        }
      }
    })

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
  }, [callbacks])

  return null
}

export default Scroll
