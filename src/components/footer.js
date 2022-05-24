import React from 'react'
import { Box, chakra, Flex, HStack, VStack, Link, Text } from '@chakra-ui/react'
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "gatsby-plugin-react-i18next"

const goToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth",
  })
}

function Footer() {
  const {t} = useTranslation()
  return (
    <chakra.footer h={450}> 
      <Flex justify='center' h='inherit'>
        <HStack justify='center' spacing={{base: '4vw', md: 200}} ml='auto' mr='auto'>
          <Box  as='button' alignSelf='center' w={{base: '52vw', sm: 'inherit'}} onClick={goToTop}>
            <StaticImage src='../images/MH_full.png' width='251'></StaticImage>
          </Box>
          <HStack fontWeight='800' spacing={{base: 'none', sm: 50}} display={{base: 'block', sm: 'flex'}}>
            <VStack>
              <Link href='' isExternal>{t("LM")}</Link>
              <Link href='' isExternal>News</Link>
              <Link href='' isExternal>Github</Link>
              <Link href='' isExternal>FAQ</Link>
            </VStack>
            <VStack pt='8px'>
              <Link href='' isExternal>Twitter</Link>
              <Link href='' isExternal>Discord</Link>
              <Link href='' isExternal>Mirror</Link>
              <Link href='' isExternal>Contact Us</Link>
            </VStack>
          </HStack>
        </HStack>
      </Flex>
      <Box mt={{base: '-35vw', sm: '-108px'}} ml='47px'>
        <Text textAlign='initial'>©Manga House<br />All rights reserved.</Text>
      </Box>
    </chakra.footer> 
  )
}

export default Footer