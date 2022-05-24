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
      <Text mt={{md: '2vw', lg: 6}} color='#424242' fontWeight={600} whiteSpace={{lg: 'pre'}} fontSize={{base: '2.5vw', sm: '2vw', md: 'inherit'}}>{desc}</Text>
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
        <chakra.section mt={30}>
          <Flex w='100%' justify={{base: 'inherit', md: 'center'}}>
            <VStack w={{base: '100%', md: '55%'}} justify='center'>
              <Box w='100%' textAlign='left'>
                <Heading fontSize={{base: '5vw', md: 32}}>
                  <Text>お気に入りのマンガを<br />
                    NFTで<chakra.span color='MH'>出版&コレクション</chakra.span>
                  </Text>
                </Heading>
                <Box fontStyle='italic' fontSize={{base: '2.5vw', md: 16}}>
                  <Text>マンガハウスは、ブロックチェーン技術をマンガの世界に導入し、<br />
                    私たちが「<chakra.span as='i'>Manga 3.0</chakra.span>」と呼ぶ革命的で完全に透明なシステムを構築します。
                  </Text>
                </Box>
              </Box>
              <Box pt={{base: '3.5vw', sm: 16}} w='100%'>
                <HStack>
                  <Button flex={2} fontSize={{base: '2.5vw', sm: 15, lg: 'inherit'}}>2022年秋 マンガマーケット 公開</Button>
                  <Button flex={1} variant='outline' borderRadius={20} fontSize={{base: '2.5vw', sm: 15, lg: 'inherit'}}
                    _hover={{bg: 'whiteAlpha.200'}} _active={{bg: 'none', transform: 'scale(0.92)'}}>
                    詳細はこちら
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
                title='マンガNFTマーケットプレイス'
                desc={`すべての取引において、完全に透明な収益分配を\nアーティストとパブリッシャーに永久的に分配されます。`}
              />
              <Card flex={1}
                title='マンガNFT'
                desc={`従来の紙マンガと同様に二次販売が可能なため、\nMangaNFTの付加価値が高まります。`}
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
                    ワンストップなマンガ体験
                  </chakra.h2>
                  <Text wordBreak={{base: 'inherit',lg: 'keep-all'}} fontSize={{base: '2.5vw', md: 'inherit'}}>
                    作家はマンガを出版することができ、購入ごとに即座に収益を得ることができます。<br />
                    さらに、ファンはマンガNFTを購入し、読み、収集し、再販することができます。<br />
                    作家は再販時に追加で収益を受け取ることができ、ファンはお気に入りの作家をさらにサポートすることができます。
                  </Text>
                </VStack>
                <Box flex={1} ml={{base: 0, sm: 42}} mt={{base: 10, sm: 'inherit'}}>
                  <StaticImage src='../images/mangaExperience.png'/>
                </Box>
              </Flex>
              <Flex mt={{base: '90px',sm: 20}} display={{base: 'block', sm: 'flex'}}>
                <Box flex={1} display={{base: 'none', sm: 'inherit'}}>
                  <StaticImage src='../images/newPublishing .png'/>
                </Box>
                <VStack flex={1} spacing={17} w='100%' justify='center'>
                  <chakra.h2 fontSize={{base: '4vw', sm:'3vw', md: '2xl'}} fontWeight='900' textAlign='inherit' w='100%'>
                    今までにない出版機会
                  </chakra.h2>
                  <Text fontSize={{base: '2.5vw', md: 'inherit'}}>
                    マンガハウスは、マンガを出版するためのハードルをなくします。
                    シンプルなプロセスで、誰でもマンガを出版し、その作品を管理することができます。
                    <Text pt='2ch'>出版にご興味のある方からの<chakra.span color='MH'>ご連絡お待ちしております。</chakra.span></Text>
                  </Text>
                </VStack>
                  <Box display={{base: 'inherit', sm: 'none'}} mt={{base: -65, sm: 0}}>
                    <StaticImage src='../images/newPublishing .png'/>
                  </Box>
              </Flex>
              <Flex mt={{base: 'none', sm: 20}} display={{base: 'block', sm: 'flex'}}>
                <VStack flex={1} spacing={17} w='100%' pt={{base: 0, sm: 10, md: '10vw'}}>
                  <chakra.h2 fontSize={{base: '4vw', sm:'3vw', md: '2xl'}} fontWeight='900' textAlign='inherit' w='100%'>
                    コミュニティ主導
                  </chakra.h2>
                  <Text fontSize={{base: '2.5vw', md: 'inherit'}}>
                    好きな作家のマンガを所有することで、そのマンガのファン同士がプラットフォーム上で交流することができるようになります。
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
            <Box textAlign='center' ml='auto' mr='auto' minW={{base: 'none', lg: 892}} display={{base: 'block', lg: 'flex'}}>
              <VStack flex={1} spacing={{base: 4, lg: 54}} mb={{base: '54px'}}>
                <Text fontWeight={800}>フェーズ 1</Text>
                <Flex w={290} h={290} borderRadius='50%' border='solid 1px' direction='column' justify='center'>
                  <Text>
                    アナウンスメント<br />
                    ウェブサイト開設<br />
                    SNSローンチ<br />
                    基礎マーケティング<br />
                    マンガ家スカウト<br />
                    コンテンツ制作
                  </Text>
                </Flex>
              </VStack>
              <VStack flex={1} spacing={{base: 4, lg: 54}} mb={{base: '54px'}}>
                <Text fontWeight={800}>フェーズ 2</Text>
                <Flex w={290} h={290} borderRadius='50%' border='solid 1px' direction='column' justify='center' pos='relative'
                  //_before={{ display: {base: 'none', lg: 'block'}, w: '49px', h: '1px', content: `""`, pos: 'absolute', left: '100%', bg: 'white'}}
                  //_after={{display: {base: 'none', lg: 'block'}, w: '49px', h: '1px', content: `""`, pos: 'absolute', right: '100%', bg: 'white'}}
                  >
                  <Text>
                    dAppローンチ<br />
                    マーケットプレイスローンチ<br />
                    マンガNFTローンチ<br />
                    ウェブリーダーローンチ<br />
                    マンガ家デビュー<br />
                    マーケティング展開<br />
                    クラウドファンディング<br />
                    パートナーシップ<br />
                  </Text>
                </Flex>
              </VStack>
              <VStack flex={1} spacing={{base: 4, lg: 54}}>
                <Text fontWeight={800}>フェーズ 3</Text>
                <Flex w={290} h={290} borderRadius='50%' border='solid 1px' direction='column' justify='center'>
                  <Text pt='2ch'>
                    出版社とのパートナーシップ<br />
                    デジタル本棚ローンチ<br />
                    コミュニティ機能ローンチ<br />
                    NFTマンガマガジン創刊<br />
                    メタバース<br />
                    コミコン参加<br />
                    (DAOローンチ)
                  </Text>
                </Flex>
              </VStack>
            </Box>
          </Box>
        </chakra.section>
      </Container>
      <Flex bg='white' mt={170} h={370} justify='center' maxH={{base: 200, sm: '40vw', md: 'inherit'}}>
        <VStack justify='center' width='100%'>
          <Heading fontSize={{base: '4vw', md: '2xl'}} color='#424242' mb={{base: '8vw', md: 16}}>マンガハウスのエコシステムに参加</Heading>
          <HStack w='60%' spacing={{base: 10, md: 20}}>
            <Button flex={1} h={20} fontSize={{base: '2.5vw', sm: 15, lg: 24}} borderRadius={40} 
              px={{base: '2vw', md: 4}} maxH={{base: 50, sm: '8vw', lg: 'inherit'}}>
              もっと知る
            </Button>
            <Button flex={1} h={20} fontSize={{base: '2.5vw', sm: 15, lg: 24}} borderRadius={40} 
              px={{base: '2vw', md: 4}} maxH={{base: 50, sm: '8vw', lg: 'inherit'}}>
              連絡はこちら
            </Button>
          </HStack>
        </VStack>
      </Flex>
    </>
  )
}

export default Main