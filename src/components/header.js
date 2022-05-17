import React from 'react'
import { Box, Button, chakra, Flex, HStack, Spacer, Link, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'
import { StaticImage } from 'gatsby-plugin-image'

const goToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth",
  })
}

function Header() {
  return (
    <chakra.header h={86} pos='sticky' top={0} zIndex={20} 
      bg='rgba(53,55,61,0.9)' backdropFilter='auto' backdropBlur='14px'>
      <Flex ml={3} mr={3} h='inherit' align='center'>
        <Box as='Button' onClick={goToTop}>
          <StaticImage src='../images/MH_full.png' width='127'></StaticImage>
        </Box>
        <Spacer />
        <chakra.nav display={{base: 'none', md: 'flex'}}>
          <HStack fontWeight={700} spacing={10}>
            <Link href='' isExternal>Docs</Link>
            <Link href='' isExternal>News</Link>
            <Link href='' isExternal>Github</Link>
            <Menu>
              <MenuButton fontWeight={700}>Community <TriangleDownIcon /></MenuButton>
              <MenuList bg='none' boxShadow='none' border='none' p={0} minW='auto'>
                <MenuItem _focus={{bg: 'none'}} fontWeight={700} p={0} w='fit-content'>
                  <Link href='' isExternal>Twitter</Link>
                </MenuItem>
                <MenuItem _focus={{bg: 'none'}} fontWeight={700} p={0} w='fit-content'>
                  <Link href='' isExternal>Discord</Link>
                </MenuItem>
                <MenuItem _focus={{bg: 'none'}} fontWeight={700} p={0} w='fit-content'>
                  <Link href='' isExternal>Medium</Link>
                </MenuItem>
                <MenuItem _focus={{bg: 'none'}} fontWeight={700} p={0} w='fit-content'>
                  <Link href='' isExternal>Mirror</Link>
                </MenuItem>
                <MenuItem _focus={{bg: 'none'}} fontWeight={700} p={0} w='fit-content'>
                  <Link href='' isExternal>Contact Us</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </chakra.nav>
        <Box ml='50'>
          <Button>dApp Coming Soon</Button>
        </Box>
      </Flex>
      <chakra.nav display={{base: 'block', md: 'none'}} 
        bg='rgba(53,55,61,0.9)' backdropFilter='auto' backdropBlur='14px'>
        <HStack fontWeight={700} justify='space-around' w='100%'>
          <Link href='' isExternal>Docs</Link>
          <Link href='' isExternal>News</Link>
          <Link href='' isExternal>Github</Link>
          <Menu>
            <MenuButton fontWeight={700}>Community <TriangleDownIcon /></MenuButton>
            <MenuList bg='none' boxShadow='none' border='none' p={0} minW='auto'>
              <MenuItem _focus={{bg: 'none'}} fontWeight={700} p={0} w='fit-content'>
                <Link href='' isExternal>Twitter</Link>
              </MenuItem>
              <MenuItem _focus={{bg: 'none'}} fontWeight={700} p={0} w='fit-content'>
                <Link href='' isExternal>Discord</Link>
              </MenuItem>
              <MenuItem _focus={{bg: 'none'}} fontWeight={700} p={0} w='fit-content'>
                <Link href='' isExternal>Medium</Link>
              </MenuItem>
              <MenuItem _focus={{bg: 'none'}} fontWeight={700} p={0} w='fit-content'>
                <Link href='' isExternal>Mirror</Link>
              </MenuItem>
              <MenuItem _focus={{bg: 'none'}} fontWeight={700} p={0} w='fit-content'>
                <Link href='' isExternal>Contact Us</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </chakra.nav>
    </chakra.header>
  )
}

export default Header