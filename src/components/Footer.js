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
                <FooterLink to="/commslink">News Room</FooterLink>
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
            <p>© {new Date().getFullYear()} Intergalactic</p>
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
  margin-right: 0;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-right: 240px;
    margin-bottom: 0;
  }

  p {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.cream};
    margin: 0 0 15px 0;
  }
`

const FooterInner = styled.div`
  padding: 80px 25px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    padding: 95px 138px 65px;
  }
`

const TopLinks = styled.div`
  display: flex;
  margin-bottom: 80px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 140px;
  }
`

const Links = styled.div`
  display: flex;
`

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.aluminum};
  text-decoration: none;
  font-size: 16px;
`

const BottomLinks = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  p {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.aluminum};
  }
`

const BottomLink = styled(Link)`
  margin-right: 150px;
  display: block;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.aluminum};
  text-decoration: none;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.cartographMedium};

  @media screen and (min-width: 768px) {
    display: inline-block;
    margin-bottom: 0;
  }
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
