import React from "react"
import values from "../../images/company/values.jpg"
import impact from "../../images/company/icons/impact.svg"
import humility from "../../images/company/icons/humility.svg"
import precision from "../../images/company/icons/precision.svg"
import fun from "../../images/company/icons/fun.svg"
import invention from "../../images/company/icons/invention.svg"
import styled from "styled-components"

const Values = props => {
  const valuesItems = [
    {
      icon: impact,
      title: "Impact",
      description: "An insatiable appetite to go big.",
    },
    {
      icon: humility,
      title: "Humility",
      description: "It’s about getting it right, not being right.",
    },
    {
      icon: precision,
      title: "Precision",
      description:
        "Thorough and detail-obsessed because every-little-thing-matters.",
    },
    {
      icon: fun,
      title: "Fun",
      description: "Serious work can still be enjoyable.",
    },
    {
      icon: invention,
      title: "Invention",
      description:
        "We reverence and protect a culture of discovery and innovation.",
    },
  ]

  return (
    <StyledSection data-scroll-section>
      <Container>
        <HeadingTitle>
          <h5 data-scroll data-scroll-offset="20%">
            <span>Core Values</span>
          </h5>
          <p className="fadein" data-scroll data-scroll-offset="20%">
            <span>The fuel that propels us onward, upward and beyond.</span>
          </p>
        </HeadingTitle>
        <Grid>
          <div>
            <img src={values} />
          </div>
          {valuesItems.map((item, index) => {
            return (
              <Value data-scroll data-scroll-offset="20%">
                <img src={item.icon} />
                <h6>{item.title}</h6>
                <p>{item.description}</p>
              </Value>
            )
          })}
        </Grid>
      </Container>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  background: ${({ theme }) => theme.colors.cream};
  padding: 140px 0 180px;
`

const Container = styled.div`
  margin-left: 60px;
`

const HeadingTitle = styled.div`
  display: flex;
  margin-bottom: 40px;
  h5 {
    margin-right: 150px;
  }

  p {
    font-size: 25px;
    line-height: 36px;
    color: ${({ theme }) => theme.colors.aluminum};
    max-width: 500px;
  }
`

const Grid = styled.div`
  grid-template-columns: 1fr 1fr 1fr;
  display: grid;
  padding-right: 60px;
  > div {
    max-width: 450px;
    display: inline-block;
    margin-right: 10%;
    margin-bottom: 85px;
  }
`

const Value = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.black};
  opacity: 0;
  transition: opacity 700ms ease;

  &.is-inview {
    opacity: 1;
  }

  img {
    margin-top: 40px;
    margin-bottom: 0;
  }

  h6 {
    margin-top: 30px;
  }

  p {
    color: ${({ theme }) => theme.colors.aluminum};
    max-width: 305px;
  }
`

export default Values
