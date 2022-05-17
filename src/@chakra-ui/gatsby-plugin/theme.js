import { extendTheme } from '@chakra-ui/react'
import '@fontsource/nunito'

const theme = {
  styles: {
    global: {
      body: {
        backgroundColor: '#35373D',
        color: 'white',
      }
    }
  },
  colors: {
    MH: '#F24422'
  },
  components: {
    Button: {
      baseStyle: {},
      sizes: {},
      variants: {
        'solid': {
          bg: 'MH',
          borderRadius: 20,
          _hover: { bg: 'rgba(242,68,34,0.8)' },
          _active: {
            transform: 'scale(0.92)',
            bg: 'none',
            outline: 'none'
          },
          _focus: {
          }
        }
      }
    }
  },
  fonts: {
    heading: 'Nunito',
    body: 'Nunito',
  }
}

export default extendTheme(theme)