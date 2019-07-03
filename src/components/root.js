import React from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'theme-ui'
import components from './mdx-components'

export default props =>
  <ThemeProvider components={components}>
    <Helmet>
      <title>Packem - A precompiled ES bundler &amp; linker</title>
      <meta name='description' content="A precompiled JavaScript moduler bundler" />
      <link rel='icon' type='image/png' href='/icon.png' />
      <link rel='apple-touch-icon' type='image/png' href='/icon.png' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@packem_bundler' />
      <meta name='twitter:image' content='https://raw.githubusercontent.com/packem/packem/master/resources/packem-logo.png' />
      <meta name='twitter:title' content='Packem JavaScript bundler' />
      <meta name='twitter:description' content="A precompiled JavaScript moduler bundler" />
    </Helmet>
    {props.children}
  </ThemeProvider>
