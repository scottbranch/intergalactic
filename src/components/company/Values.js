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
  padding: 100px 0;

  @media screen and (min-width: 768px) {
    padding: 140px 0 180px;
  }
`

const Container = styled.div`
  margin-left: 0;
  padding: 0 25px;

  @media screen and (min-width: 768px) {
    margin-left: 60px;
  }
`

const HeadingTitle = styled.div`
  display: flex;
  margin-bottom: 40px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  h5 {
    margin-right: 150px;

    @media screen and (max-width: 768px) {
      font-size: 31px;
      line-height: 100%;
    }
  }

  p {
    font-size: 20px;
    line-height: 100%;
    color: ${({ theme }) => theme.colors.aluminum};
    max-width: 500px;

    @media screen and (min-width: 768px) {
      font-size: 25px;
      line-height: 36px;
    }
  }
`

const Grid = styled.div`
  padding-right: 0;

  @media screen and (min-width: 768px) {
    padding-right: 60px;
    grid-template-columns: 1fr 1fr 1fr;
    display: grid;
  }

  > div {
    display: inline-block;
    margin-right: 0;
    margin-bottom: 35px;
    width: 100%;

    @media screen and (min-width: 768px) {
      margin-bottom: 85px;
      max-width: 450px;
      margin-right: 10%;
      width: auto;
    }
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
