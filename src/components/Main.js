import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Box, Flex, VStack, Heading, Text, chakra, HStack, Button } from "@chakra-ui/react"
import "@fontsource/nunito-sans"
import { useTranslation } from "gatsby-plugin-react-i18next"

function Card({ title, desc, ...rest }) {
  return (
    <Flex h='20vw' bg='white' borderRadius={10} mb={{base: 8, sm: 0}}
      flexDirection='column' justify='center' textAlign='center' {...rest}>
      <Heading fontSize={{base: '4vw', sm: '3vw', md: '2xl'}} color='MH'>{title}</Heading>
      <Text mt={{md: '2vw', lg: 6}} color='#424242' fontWeight={600} whiteSpace={{lg: 'pre-wrap'}} fontSize={{base: '2.5vw', sm: '2vw', md: 'inherit'}}>{desc}</Text>
    </Flex>
  )
}
//32-5vw 24-4vw 16-2.5vw
//sm: 480px md: 768px lg: 992px
function Main() {
  const {t} = useTranslation()
  return (
    <>
      <Container maxW='90%' p={0} py={{base: '3vw', lg: 5}}>
        <chakra.section mt={70}>
          <Flex w='100%' justify={{base: 'inherit', md: 'center'}}>
            <VStack w={{base: '100%', md: '55%'}} justify='center'>
              <Box w='100%' textAlign='left'>
                <Heading fontSize={{base: '5vw', md: 32}}>
                  <Text>{t('top.heading1')}<br />
                    {t('top.heading2')}<chakra.span color='MH'> {t('top.heading3')}</chakra.span>
                  </Text>
                </Heading>
                <Box fontStyle='italic' fontSize={{base: '2.5vw', md: 16}}>
                  <Text>{t('top.desc1')}<br />
                  {t('top.desc2')}<chakra.span as='i'>{t('top.desc3')}</chakra.span>{t('top.desc4')}
                  </Text>
                </Box>
              </Box>
              <Box pt={{base: '7vw', sm: 16}} w={'100%'} minW={{base: 'inherit', md: '430px', lg: 'inherit'}}>
                <HStack>
                  <Button flex={2} fontSize={{base: '2.5vw', sm: 15, lg: 'inherit'}}>{t('top.btn1')}</Button>
                  <Button flex={1} variant='outline' borderRadius={20} fontSize={{base: '2.5vw', sm: 15, lg: 'inherit'}}
                    _hover={{bg: 'whiteAlpha.200'}} _active={{bg: 'none', transform: 'scale(0.92)'}}>
                    {t('top.btn2')}
                  </Button>
                </HStack>
              </Box>
            </VStack>
            <Box w='45%' alignSelf='center' display={{base: 'none' , md: 'block'}}> 
              <StaticImage src='../images/publishCollect.png'/>
            </Box>
          </Flex>
        </chakra.section>
        <chakra.section mt={90}>
          <Box>
            <HStack spacing={{base: 0, sm: 6}} display={{base: 'block', sm: 'flex'}}>
              <Card flex={1}
                title={t('sect2.title1')}
                desc={t('sect2.desc1')}
              />
              <Card flex={1}
                title={t('sect2.title2')}
                desc={t('sect2.desc2')}
              />
            </HStack>
          </Box>
        </chakra.section>
        <chakra.section mt={120}> 
          <Box>
            <Heading fontSize={{base: '4vw', md: '2xl'}} textAlign='center' pb={{base: '20vw', md: 130}}>
              MANGA HOUSE VALUE
            </Heading>
            <Box fontFamily='nunito-sans'>
              <Flex display={{base: 'block', sm: 'flex'}}>
                <VStack flex={1} spacing={17} w='100%'>
                  <chakra.h2 fontSize={{base: '4vw', sm:'3vw', md: '2xl'}} fontWeight='900' textAlign='inherit' w='100%'>
                    {t('sect3.heading1')}
                  </chakra.h2>
                  <Text wordBreak={{base: 'inherit',lg: 'keep-all'}} fontSize={{base: '2vw', md: 'inherit'}}>
                    {t('sect3.desc1-1')}<br />
                    {t('sect3.desc1-2')}<br />
                    {t('sect3.desc1-3')}
                  </Text>
                </VStack>
                <Box flex={1} ml={{base: 0, sm: '1vw'}}>
                  <StaticImage src='../images/mangaExperience.png'/>
                </Box>
              </Flex>
              <Flex mt={{base: '90px',sm: 20}} display={{base: 'block', sm: 'flex'}}>
                <Box flex={1} display={{base: 'none', sm: 'inherit'}}>
                  <StaticImage src='../images/newPublishing .png'/>
                </Box>
                <VStack flex={1} spacing={17} w='100%' pt={{base: 0, sm: '10vw'}}>
                  <chakra.h2 fontSize={{base: '4vw', sm:'3vw', md: '2xl'}} fontWeight='900' textAlign='inherit' w='100%'>
                  {t('sect3.heading2')}
                  </chakra.h2>
                  <Text fontSize={{base: '2vw', md: 'inherit'}}>
                    {t('sect3.desc2-1')}
                    <Text pt='2ch'>{t('sect3.desc2-2')}<chakra.span color='MH'>{t('sect3.desc2-3')}</chakra.span></Text>
                  </Text>
                </VStack>
                  <Box display={{base: 'inherit', sm: 'none'}} mt={{base: -65, sm: 0}}>
                    <StaticImage src='../images/newPublishing .png'/>
                  </Box>
              </Flex>
              <Flex mt={{base: 'none', sm: 20}} display={{base: 'block', sm: 'flex'}}>
                <VStack flex={1} spacing={17} w='100%' pt={{base: 0, sm: '4vw'}}>
                  <chakra.h2 fontSize={{base: '4vw', sm:'3vw', md: '2xl'}} fontWeight='900' textAlign='inherit' w='100%'>
                  {t('sect3.heading3')}
                  </chakra.h2>
                  <Text fontSize={{base: '2vw', md: 'inherit'}}>
                  {t('sect3.desc3')}
                  </Text>
                </VStack>
                <Box flex={1}>
                  <StaticImage src='../images/communityDriven.png'/>
                </Box>
              </Flex>
            </Box>
          </Box>
        </chakra.section>
        <chakra.section mt={150}>
          <Box>
            <Heading fontSize={24} fontWeight='800' textAlign='center' mb={66}>ROAD MAP</Heading>
            <Box textAlign='center' ml='auto' mr='auto' display={{base: 'block', lg: 'flex'}}>
              <VStack flex={1} spacing={{base: 4, lg: 54}} mb={{base: '54px'}}>
                <Text fontWeight={800}>{t('sect4.phase1')}</Text>
                <Flex w={290} h={290} borderRadius='50%' border='solid 3px' direction='column' justify='center' bg='#35373D'>
                  <Text>
                    {t('sect4.phase1-1')}<br />
                    {t('sect4.phase1-2')}<br />
                    {t('sect4.phase1-3')}<br />
                    {t('sect4.phase1-4')}<br />
                    {t('sect4.phase1-5')}<br />
                    {t('sect4.phase1-6')}
                  </Text>
                </Flex>
              </VStack>
              <VStack flex={1} spacing={{base: 4, lg: 54}} mb={{base: '54px'}}>
                <Text fontWeight={800}>{t('sect4.phase2')}</Text>
                <Flex w={290} h={290} borderRadius='50%' border='solid 3px' direction='column' justify='center' pos='relative'
                  _before={{ display: {base: 'none', lg: 'block'}, w: '30vw', h: '3px', content: `""`, pos: 'absolute', left: '100%', bg: 'white', zIndex: -1 }}
                  _after={{display: {base: 'none', lg: 'block'}, w: '30vw', h: '3px', content: `""`, pos: 'absolute', right: '100%', bg: 'white', zIndex: -1 }}
                  >
                  <Text>
                    {t('sect4.phase2-1')}<br />
                    {t('sect4.phase2-2')}<br />
                    {t('sect4.phase2-3')}<br />
                    {t('sect4.phase2-4')}<br />
                    {t('sect4.phase2-5')}<br />
                    {t('sect4.phase2-6')}<br />
                    {t('sect4.phase2-7')}<br />
                    {t('sect4.phase2-8')}<br />
                  </Text>
                </Flex>
              </VStack>
              <VStack flex={1} spacing={{base: 4, lg: 54}}>
                <Text fontWeight={800}>{t('sect4.phase3')}</Text>
                <Flex w={290} h={290} borderRadius='50%' border='solid 3px' direction='column' justify='center' bg='#35373D'>
                  <Text pt='2ch'>
                    {t('sect4.phase3-1')}<br />
                    {t('sect4.phase3-2')}<br />
                    {t('sect4.phase3-3')}<br />
                    {t('sect4.phase3-4')}<br />
                    {t('sect4.phase3-5')}<br />
                    {t('sect4.phase3-6')}<br />
                    {t('sect4.phase3-7')}
                  </Text>
                </Flex>
              </VStack>
            </Box>
          </Box>
        </chakra.section>
      </Container>
      <Flex bg='white' mt={170} h={370} justify='center' maxH={{base: 200, sm: '40vw', md: 'inherit'}}>
        <VStack justify='center' width='100%'>
          <Heading fontSize={{base: '4vw', md: '2xl'}} color='#424242' mb={{base: '8vw', md: 16}}>{t('btnSect.heading')}</Heading>
          <HStack w='60%' spacing={{base: 10, md: 20}}>
            <Button flex={1} h={20} fontSize={{base: '2.5vw', sm: 15, lg: 24}} borderRadius={40} 
              px={{base: '2vw', md: 4}} maxH={{base: 50, sm: '8vw', lg: 'inherit'}}>
              {t('btnSect.btnL')}
            </Button>
            <Button flex={1} h={20} fontSize={{base: '2.5vw', sm: 15, lg: 24}} borderRadius={40} 
              px={{base: '2vw', md: 4}} maxH={{base: 50, sm: '8vw', lg: 'inherit'}}>
              {t('btnSect.btnR')}
            </Button>
          </HStack>
        </VStack>
      </Flex>
    </>
  )
}

export default Main