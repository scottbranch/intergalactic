import React from "react"
import values from "../../images/company/values.jpg"
import styled from "styled-components"

const Values = props => {
  return (
    <StyledSection data-scroll-section>
      <Container>
        <HeadingTitle>
          <h5>Core Values</h5>
          <p>The fuel that propels us onward, upward and beyond.</p>
        </HeadingTitle>
        <Grid>
          <div>
            <img src={values} />
          </div>
          <div>
            <p>item 2</p>
          </div>
          <div>
            <p>item 3</p>
          </div>
          <div>
            <p>item 4</p>
          </div>
          <div>
            <p>item 5</p>
          </div>
          <div>
            <p>item 6</p>
          </div>
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
    margin-right: 3%;
    margin-bottom: 85px;
  }
`

export default Values
