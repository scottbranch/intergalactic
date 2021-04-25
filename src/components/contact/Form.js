import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"

const Hero = props => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <StyledSection data-scroll-section>
      <ContactFormContainer>
        <div>
          <h4>How can we help?</h4>
          <StyledSubHeading
            className="fadein"
            data-scroll
            data-scroll-offset="20%"
          >
          </StyledSubHeading>
        </div>
        <FlexContainer>
          <FlexArea>
            <div> 
              <address>
                Intergalactic HQ
                <br />
                3172 E. Deseret Drive South
                <br />
                St. George, UT 84790
              </address>
              <a href="tel:495-673-4603">495-673-4603</a>
              <a href="mailto:phonehome(at)ig.space">phonehome(at)ig.space</a>
            </div>
          </FlexArea>
          <FlexArea>
            <ContactForm name="contact" method="POST" data-netlify="true">
              <div>
                <label for="name">Name</label>
                <input type="text" id="name" required />
              </div>
              <div>
                <label for="company">Company</label>
                <input type="text" id="company" required />
              </div>
              <div>
                <label for="email">Email</label>
                <input type="text" id="email" required />
              </div>
              <div>
                <label for="phone">Phone</label>
                <input type="text" id="phone" required />
              </div>
              <div>
                <label for="reason">Reason for inquiry</label>
                <select type="text" id="reason">
                  <option disabled selected>
                    Select
                  </option>
                  <option>Another Reason</option>
                  <option>Another Reason</option>
                  <option>Another Reason</option>
                  <option>Another Reason</option>
                </select>
              </div>
              <div>
                <label for="message">Message</label>
                <textarea id="message" required />
              </div>
              <div>
                <button type="submit">Submit Form</button>
              </div>
            </ContactForm>
          </FlexArea>
        </FlexContainer>
      </ContactFormContainer>
    </StyledSection>
  )
}

const ContactFormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.cream};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding: 120px 60px;

  @media screen and (max-width: 768px) {
    padding-top: 60px;
    padding-left: 25px;
    padding-right: 25px;
  }
`

const FlexContainer = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    display: block;
  }

  address {
    color: ${({ theme }) => theme.colors.aluminum};
    font-style: normal;
    font-size: 16px;
    line-height: 28px;
    margin: 80px 0 40px;

    @media screen and (max-width: 768px) {
      margin: 40px 0;
    }
  }

  a {
    display: block;
    color: ${({ theme }) => theme.colors.aluminum};
    font-style: normal;
    font-size: 16px;
    line-height: 28px;
    text-decoration: none;
  }
`

const FlexArea = styled.div`
  flex: 50%;
`

const ContactForm = styled.form`
  margin-top: 80px;

  label {
    display: block;
    font-family: ${({ theme }) => theme.fonts.cartographMedium};
    color: ${({ theme }) => theme.colors.aluminum};
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    position: relative;
    max-width: 675px;

    &:not([for="reason"]):after {
      content: '*';
      position: absolute;
      right: 0;
    }
  }

  input,
  select,
  textarea {
    appearance: none;
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.aluminum};
    width: 100%;
    max-width: 675px;
    font-size: 25px;
    line-height: 60px;
    color: ${({ theme }) => theme.colors.aluminum};
    margin-bottom: 60px;

    &:focus {
      outline: none;
    }

    @media screen and (max-width: 768px) {
      line-height: 30px;
    }
  }

  select {
    &:focus {
      outline: none;
    }
    @media screen and (max-width: 768px) {
      line-height: 40px;
    }
  }

  textarea {
    line-height: 28px;
  }

  button {
    font-family: ${({ theme }) => theme.fonts.cartographMedium};
    color: ${({ theme }) => theme.colors.aluminum};
    border: 1px solid ${({ theme }) => theme.colors.aluminum};
    background-color: transparent;
    text-transform: uppercase;
    font-size: 16px;
    padding: 20px 40px;
  }
`

const StyledSection = styled.section`
  width: 100%;
  position: relative;
`

const StyledSubHeading = styled.p`
  color: #91897d;
  font-size: 14px;
  letter-spacing: 3px;
  font-family: ${({ theme }) => theme.fonts.cartographMedium};
`

export default Hero
