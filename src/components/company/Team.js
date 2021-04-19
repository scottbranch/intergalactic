import React from "react"
import Link from "gatsby-link"
import headshot from "../../images/company/headshot.png"
import styled from "styled-components"

const Team = props => {
  const teamMembers = [
    {
      name: "Melzie & Ray Ganowsky",
      title: "Co-owners",
      headshot: headshot,
    },
    {
      name: "Nick Kaiser",
      title: "Vice President of Engineering",
      headshot: headshot,
    },
    {
      name: "Brian Mccann",
      title: "CEO",
      headshot: headshot,
    },
    {
      name: "Kevin Kerlin",
      title: "Vice President of Operations",
      headshot: headshot,
    },
    {
      name: "Doug Mccann",
      title: "CFO",
      headshot: headshot,
    },
    {
      name: "Brad Plothow",
      title: "Vice President of Strategy",
      headshot: headshot,
    },
    {
      name: "Taylor Fausett",
      title: "Vice President of Programs",
      headshot: headshot,
    },
    {
      name: "Phillip Norris",
      title: "Director of Quality of Compliance",
      headshot: headshot,
    },
  ]

  return (
    <StyledSection data-scroll-section>
      <Container>
        <h5>Team</h5>
        <HoverCover>
          {teamMembers.map((item, index) => {
            return (
              <TeamMember
                to="/team/brian-mccann"
                data-scroll
                data-scroll-offset="20%"
              >
                <h6>{item.name}</h6>
                <p className="eyebrow">{item.title}</p>
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.2597 0.613897L10.1918 1.70585L16.4863 8.11601L0.767343 8.11478L0.760445 9.677L16.4922 9.67822L10.2 16.1122L11.2671 17.1773L19.3626 8.89941L11.2597 0.613897Z"
                    fill="#6B6358"
                  />
                </svg>
                <Headshot className="headshot" src={item.headshot} />
              </TeamMember>
            )
          })}
        </HoverCover>
        <div style={{ clear: "both" }}></div>
      </Container>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 140px 0 160px;
  background: ${({ theme }) => theme.colors.cream};

  h5 {
    margin-bottom: 90px;
  }
`

const Container = styled.div`
  padding: 0 60px;
`

const TeamMember = styled(Link)`
  width: 40%;
  border-top: 1px solid ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.aluminum};
  height: 105px;
  text-decoration: none;
  position: relative;
  opacity: 0;
  transition: all 700ms ease;
  float: left;

  &.is-inview {
    opacity: 1;
  }

  &:after {
    content: "";
    width: 100%;
    height: 1px;
    background: transparent;
    transition: background 700ms ease;
    position: absolute;
    bottom: 0;
  }

  &:hover {
    border-top: 1px solid ${({ theme }) => theme.colors.black} !important;

    &:after {
      background: ${({ theme }) => theme.colors.black};
    }

    h6,
    .eyebrow,
    svg path {
      color: ${({ theme }) => theme.colors.black} !important;
      fill: ${({ theme }) => theme.colors.black} !important;
    }
  }

  h6,
  p,
  svg path {
    transition: all 1s ease;
  }

  :nth-child(odd) {
    margin-right: 100px;
  }

  h6 {
    max-width: 300px;
  }

  .eyebrow {
    max-width: 250px;
    font-size: 16px;
  }

  h6,
  .eyebrow {
    margin: 0;
  }

  &:hover {
    .headshot {
      opacity: 1;
      visibility: visible;
    }
  }
`

const Headshot = styled.img`
  position: absolute;
  right: -250px;
  max-width: 325px;
  opacity: 0;
  visibility: hidden;
  z-index: 100;
  transition: all 650ms ease;
`

const HoverCover = styled.span`
  width: 100%;
  display: inline-block;
  position: relative;
  &:hover {
    a {
      border-top: 1px solid ${({ theme }) => theme.colors.gold};
      h6,
      p,
      svg path {
        color: ${({ theme }) => theme.colors.gold};
        fill: ${({ theme }) => theme.colors.gold};
      }
    }
  }
`

export default Team
