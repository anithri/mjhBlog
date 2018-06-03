import Typography from 'typography'
import theme from 'typography-theme-lincoln'

theme.includeNormalize = false
theme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
  'a, a:visited, a:hover, a:active': {
    textDecoration: 'none',
    backgroundImage: 'none',
    textShadow: 'none'
  },
})
const typography = new Typography(theme)

export default typography
