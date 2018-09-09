import App, { Container } from 'next/app'
import * as React from 'react'

import 'antd/dist/antd.css'

export default class CustomApp extends App {
  static async getInitialProps({ Component, router, context }) {
    let pageProps = Component.getInitialProps
      ? await Component.getInitialProps(context)
      : {}

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
