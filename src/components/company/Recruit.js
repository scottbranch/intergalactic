import React from "react"
import AnchorLink from "../AnchorLink"
import styled from "styled-components"

const Recruit = props => {
  return (
    <StyledSection data-scroll-section>
      <Container>
        <h5>Become an Intergalactic recruit</h5>
        <TextContainer>
          <p>
            We’re building a crew of the nation’s best, regardless of where you
            live. Come join us at Intergalactic HQ in Southern Utah, or stay
            where you are and work remotely. We’re always on the hunt for
            top-tier engineers, designers, technicians, business specialists,
            and more.
          </p>
          <p>
            Think you’d be a good fit? Take a look at our core values and drop
            us a line if this sounds like you.
          </p>
          <StyledLink to="/contact" color="light">
            Apply
          </StyledLink>
        </TextContainer>
      </Container>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  background: ${({ theme }) => theme.colors.black};
  padding: 100px 0;

  @media screen and (min-width: 768px) {
    padding: 135px 0;
  }

  h5 {
    max-width: 675px;

    @media screen and (min-width: 768px) {
      margin-right: 20px;
    }
  }

  h5,
  p {
    color: ${({ theme }) => theme.colors.gold};
  }
`

const Container = styled.div`
  display: flex;
  margin-left: 0;
  flex-direction: column;
  padding: 0 25px;

  @media screen and (min-width: 768px) {
    margin-left: 60px;
    flex-direction: row;
  }
`

const TextContainer = styled.div`
  max-width: 570px;
`

const StyledLink = styled(AnchorLink)`
  margin-top: 45px;
  display: inline-block;
`

export default Recruit
