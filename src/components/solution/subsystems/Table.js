import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Table = props => {
  const { description, title, tableData } = props

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <StyledSection data-scroll-section>
      <Container>
        <SectionTitle className="fadein" data-scroll data-scroll-offset="20%">
          <span>{title}</span>
        </SectionTitle>
        <SectionDesc>
          <p data-scroll data-scroll-offset="20%">
            {description}
          </p>
          <TableDiv className="desktop-table">
            <div>
              <span className="attribute">&nbsp;</span>
              <span className="value">Basic</span>
              <span className="value">Plus</span>
              <span className="value">Pro</span>
            </div>
            {tableData.map((item, index) => {
              return (
                <div>
                  <span className="attribute">{item.attribute?.text}</span>
                  <span className="value">{item.basic?.text}</span>
                  <span className="value">{item.plus?.text}</span>
                  <span className="value">{item.pro?.text}</span>
                </div>
              )
            })}
          </TableDiv>

          <TableDiv className="mobile-table">
            {tableData.map((item, index) => {
              return (
                <div className="mobile-table-inner">
                  <span className="attribute">{item.attribute?.text}</span>
                  <span className="value first top">Basic</span>
                  <span className="value top">Plus</span>
                  <span className="value last top">Pro</span>
                  <br/>
                  <span className="value first bottom">{item.basic?.text}</span>
                  <span className="value bottom">{item.plus?.text}</span>
                  <span className="value last bottom">{item.pro?.text}</span>
                </div>
              )
            })}
          </TableDiv>
        </SectionDesc>
      </Container>
    </StyledSection>
  )

}

const StyledSection = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.cream};

  .desktop-table {
    display: none;

    @media screen and (min-width: 990px) {
      display: block;
    }

    > div {
      border-bottom: 1px solid #D2CABE;
      display: flex;
      align-items: stretch;
      justify-content: center;
    }

    .value {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      &:last-child {
        border: none;
      }
    }
  }

  .mobile-table {
    display: block;

    @media screen and (min-width: 990px) {
      display: none;
    }

    .attribute {
      display: block;
      width: 100%;
      border: none;
      font-size: 20px;
      color: #2D261E;
      padding: 25px 0 0;
    }

    .value {
      width: 33%;

      &.first {
        text-align: left;
      }

      &.last {
        border-right: none;
      }
    }

    .top {
       border-bottom: 1px solid #D2CABE;
    }

    .bottom {
      border-bottom: none;
    }
  }
`

const Container = styled.div`
  padding: 100px 25px 50px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 160px 60px 250px;
    flex-direction: row;
  }

  @media screen and (min-width: 990px) {
    display: flex;
  }

  &:after {
    content: "";
    width: 95%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.black};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }
`

const SectionTitle = styled.div`
  flex: 50%;
  margin-bottom: 40px;
  opacity: 0;
  transition: opacity 1s ease;
  text-transform: uppercase;

  &.is-inview {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  span {
    font-size: 25px;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.black};
  }
`

const SectionDesc = styled.div`
  flex: 50%;

  p {
    opacity: 0;
    transition: opacity 1s ease;
    color: ${({ theme }) => theme.colors.aluminum};
    font-size: 20px;
    line-height: 28px;

    &.is-inview {
      opacity: 1;
    }
  }

  span {
    color: ${({ theme }) => theme.colors.aluminum};
    font-size: 20px;
    line-height: 28px;

    @media screen and (min-width: 768px) {
      font-size: 25px;
      line-height: 36px;
    }
  }
`

const TableDiv = styled.div`
  width: 100%;

  .attribute {
    width: 40%;
    display: inline-block;
    border-right: 1px solid #D2CABE;
    padding: 24px 0;
    font-size: 25px;
    line-height: 36px;
  }

  .value {
    width: 20%;
    text-align: center;
    display: inline-block;
    border-right: 1px solid #D2CABE;
    padding: 24px 0;
    text-transform: uppercase;
    font-size: 20px;
    line-height: 24px;
  }
`

export default Table
