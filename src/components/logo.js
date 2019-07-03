import React from 'react'
import theme from '../gatsby-theme-ui'

export default ({
  size = 512,
  color = theme.colors.primary,
  ...props
}) => <img src={require("../images/packem-logo.png")} />
