import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import styled, { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: box;
  }

  body {
    font-family: "Exo 2", Sans-Serif;
    background-color: #000000;
    color: #ffffff;
  }
`

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Container = styled.div`
  flex-grow: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Footer = styled.span`
  margin-bottom: 10px;
  opacity: .1;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Es kommt.' },
            { name: 'keywords', content: 'um, uralte, macht, forscherliga, wow, classic' },
          ]}
        >
          <html lang="de" />
        </Helmet>
        <Wrapper>

        <Container>
          {children}
        </Container>
          <Footer>Forscherliga {'<'}Uralte Macht{'>'} 2005-{(new Date()).getFullYear()}</Footer>
        </Wrapper>
        <Global />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
