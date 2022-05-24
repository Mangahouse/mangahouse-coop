import React from 'react'
import {Link, useI18next, I18nextContext } from 'gatsby-plugin-react-i18next'
import { List, ListItem, chakra, Box, Flex } from '@chakra-ui/react'

function I18next() {
  const {languages, originalPath} = useI18next()
  const context = React.useContext(I18nextContext)
  const { language } = context
  return (
    <Flex w={90} h='40px' borderRadius='20px' 
      justify='center' align='center' pos={'fixed'} right={3} bg='rgba(53,55,61,0.9)'>
      <List display='flex' justifyContent='flex-end' fontSize={16} fontWeight='700'>
        {languages.map((lng) => (
          <ListItem key={lng}>
            <Link to={originalPath} language={lng}>
              { lng === language
                ? <chakra.span color='#F24422' pl={3}>{lng}/</chakra.span>
                : <chakra.span pl={3}>{lng}/</chakra.span>
              }
            </Link>
          </ListItem>
        ))}
      </List>
    </Flex>
  )
}

export default I18next