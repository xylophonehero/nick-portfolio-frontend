
const React = require('react')
const { ColorModeScript } = require("@chakra-ui/react")

const { default: Layout } = require("./src/components/Layout")

exports.onRenderBody = ({ setPreBodyComponents }) =>
{
  setPreBodyComponents([
    <ColorModeScript
      initialColorMode="dark"
      key="chakra-ui-no-flash"
    />,
  ])
}

exports.wrapPageElement = ({ element, props }) =>
{

  return (
    <Layout {...props}>
      {element}
    </Layout >
  )
}