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
                <a
                  href="https://prismic-io.s3.amazonaws.com/igspace/157b6a11-1f74-48d1-bfa3-d69868eb269f_SQRM-001_+Supplier+Quality+Requirements++2.9.2022.pdf"
                  target="_blank"
                >
                  Supplier QA Reqs
                </a>
              </StyledLi>
              <StyledLi>
                <a
                  href="https://prismic-io.s3.amazonaws.com/igspace/2934dc8a-f110-42a8-a6ad-b11381146fe5_14122+Airborne+ECS+dba+INTERGALACTIC+07-Jun-2021.pdf"
                  target="_blank"
                >
                  AS9100 certification
                </a>
              </StyledLi>
              <StyledLi>
                <a
                  href="https://www.applicantpro.com/openings/igspace/jobs"
                  target="_blank"
                >
                  Careers
                </a>
              </StyledLi>
            </StyledUl>
          </LinkContainer>
          <LinkContainer>
            <p>Social Media</p>
            <StyledUl>
              <StyledLi>
                <a
                  href="https://www.instagram.com/intergalactichq/"
                  target="_blank"
                >
                  Instagram
                </a>
              </StyledLi>
              <StyledLi>
                <a
                  href="https://www.linkedin.com/company/airborneecs/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </StyledLi>
              <StyledLi>
                <a href="https://twitter.com/airborneecs?s=21" target="_blank">
                  Twitter
                </a>
              </StyledLi>
            </StyledUl>
          </LinkContainer>
        </TopLinks>
        <BottomLinks>
          <div>
            <BottomLink
              href="https://prismic-io.s3.amazonaws.com/igspace/ec39f497-9ddd-4484-9641-67e8b2b30b9e_PUR-PO-001+Intergalactic+Terms+and+Conditions+Rev+E.pdf"
              target="_blank"
            >
              Terms & Conditions
            </BottomLink>
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

const BottomLink = styled.a`
  margin-right: 150px;
  display: block;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.aluminum};
  text-decoration: none;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.cartographMedium};
  font-size: 15px;
  letter-spacing: 1px;

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

  a {
    color: ${({ theme }) => theme.colors.aluminum};
    text-decoration: none;
  }
`

export default Footer
