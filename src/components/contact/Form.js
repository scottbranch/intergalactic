import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"

const Hero = props => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [formState, setFormState] = useState({})
  const [successState, setSuccessState] = useState(false)

  const handleChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": e.target.getAttribute("name"),
        ...formState,
      }),
    })
      .then(() => setSuccessState(true))
      .catch(error => alert(error))
  }

  return (
    <StyledSection data-scroll-section>
      <ContactFormContainer>
        <div>
          <h4 data-scroll data-scroll-offset="20%">
            How can we help?
          </h4>
          <StyledSubHeading
            className="fadein"
            data-scroll
            data-scroll-offset="20%"
          ></StyledSubHeading>
        </div>
        <FlexContainer>
          <FlexArea>
            <div>
              <address data-scroll data-scroll-offset="20%">
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
          <FlexArea id="contactForm">
            <ContactForm
              disabled={successState}
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <div hidden aria-hidden="true">
                <label>
                  Don't fill this out if you're human:
                  <input name="bot-field" />
                </label>
              </div>
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label for="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <label for="company">Company</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <label for="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <label for="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <label for="reason">Reason for inquiry</label>
                <select
                  type="text"
                  name="reason"
                  id="reason"
                  onChange={handleChange}
                >
                  <option disabled selected>
                    Select
                  </option>
                  <option>Product information</option>
                  <option>Supplier information</option>
                  <option>Careers</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  onChange={handleChange}
                />
              </div>
              {successState !== true ? (
                <div>
                  <button type="submit">Submit Form</button>
                </div>
              ) : (
                <div>
                  <p>
                    Thank you for your message, someone will be in contact with
                    you soon.
                  </p>
                </div>
              )}
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

  h4 {
    opacity: 0;
    transition: opacity 1s ease;

    &.is-inview {
      opacity: 1;
    }
  }

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
    opacity: 0;
    transition: opacity 1s ease;

    &.is-inview {
      opacity: 1;
    }

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

  &[disabled] {
    label,
    input,
    select,
    textarea {
      opacity: 0.5;
      pointer-events: none;
    }
  }

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
      content: "*";
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

  p {
    font-size: 25px;
    color: ${({ theme }) => theme.colors.aluminum};
    line-height: 32px;
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
