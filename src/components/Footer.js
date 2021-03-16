import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const Footer = () => {
  return (
    <StyledFooter data-scroll-section>
      <FooterInner>
        <TopLinks>
          <LinkContainer>
            <p>Commslink</p>
            <StyledUl>
              <StyledLi>
                <FooterLink to="/test">News Room</FooterLink>
              </StyledLi>
              <StyledLi>
                <FooterLink to="/test">Press</FooterLink>
              </StyledLi>
            </StyledUl>
          </LinkContainer>
          <LinkContainer>
            <p>More Links</p>
            <StyledUl>
              <StyledLi>
                <FooterLink to="/test">Press</FooterLink>
              </StyledLi>
              <StyledLi>
                <FooterLink to="/test">Press</FooterLink>
              </StyledLi>
              <StyledLi>
                <FooterLink to="/test">Press</FooterLink>
              </StyledLi>
            </StyledUl>
          </LinkContainer>
          <LinkContainer>
            <p>More Links</p>
            <StyledUl>
              <StyledLi>
                <FooterLink to="/test">Press</FooterLink>
              </StyledLi>
              <StyledLi>
                <FooterLink to="/test">Press</FooterLink>
              </StyledLi>
              <StyledLi>
                <FooterLink to="/test">Press</FooterLink>
              </StyledLi>
            </StyledUl>
          </LinkContainer>
        </TopLinks>
        <BottomLinks>
          <div>
            <BottomLink to="/test">Terms & Conditions</BottomLink>
            <BottomLink to="/test">Privacy</BottomLink>
          </div>
          <div>
            <p>© 2021 Intergalactic</p>
          </div>
        </BottomLinks>
      </FooterInner>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.black};
`

const LinkContainer = styled.div`
  margin-right: 240px;
  p {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.cream};
    margin: 0 0 15px 0;
  }
`

const FooterInner = styled.div`
  padding: 95px 138px 65px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const TopLinks = styled.div`
  display: flex;
  margin-bottom: 140px;
`

const Links = styled.div`
  display: flex;
`

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.cream};
`

const BottomLinks = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.cream};
  }
`

const BottomLink = styled(Link)`
  margin-right: 150px;
  color: ${({ theme }) => theme.colors.cream};
  text-decoration: none;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.cartographMedium};
`

const StyledUl = styled.ul`
  margin: 0;
  height: auto;
`

const StyledLi = styled.li`
  margin: 0 0 10px;
  list-style: none;
  text-decoration: none;
`

export default Footer
