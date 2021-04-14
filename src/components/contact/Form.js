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
            <span>CONTACT US :: 02</span>
          </StyledSubHeading>
        </div>
        <FlexContainer>
          <FlexArea>
            <div>
              <h5>Contact Information</h5>
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
            <ContactForm>
              <div>
                <label for="name">Name</label>
                <input type="text" id="name" />
              </div>
              <div>
                <label for="company">Company</label>
                <input type="text" id="company" />
              </div>
              <div>
                <label for="email">Email</label>
                <input type="text" id="email" />
              </div>
              <div>
                <label for="phone">Phone</label>
                <input type="text" id="phone" />
              </div>
              <div>
                <label for="reason">Reason for inquiry</label>
                <select type="text" id="reason">
                  <option disabled selected>
                    Select
                  </option>
                </select>
              </div>
              <div>
                <label for="message">Message</label>
                <textarea id="message" />
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
`

const FlexContainer = styled.div`
  display: flex;
`

const FlexArea = styled.div`
  flex: 50%;
`

const ContactForm = styled.form`
  label {
    display: block;
  }

  input,
  select,
  textarea {
    appearance: none;
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    width: 100%;
    max-width: 675px;
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
