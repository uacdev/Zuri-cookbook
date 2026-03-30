import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react'
import bgPatterns from '../assets/bg-patterns.png'
import seasoningImages from '../assets/seasoning-images.png'
import zuriMascot from '../assets/zuri-mascot.png'
import heroImage from '../assets/hero-image.png'

export const Hero = () => {
    return (
        <Box h={'130vh'}>
            <Flex direction={'column'} pt={20} alignItems={'center'} bgImage={`url(${bgPatterns})`} h={'90vh'} bgRepeat={'no-repeat'} bgSize={'cover'}>
                <Text color={'#FF0101'} fontWeight={'bold'} fontSize={'18px'} letterSpacing={'2px'} textTransform={'uppercase'}>Nigeria's Favourite Seasoning</Text>
                <Box p={{ base: 4, lg: 0 }} textAlign={'center'}>
                    <Text fontSize={{ base: '60px', lg: '104.5px' }} className='anja'>Making Everyday</Text>
                    <HStack mt={'-18px'} flexDirection={{ base: 'column', lg: 'row' }} gap={4}>
                        <Text color={'#FF0101'} fontSize={{ base: '60px', lg: '110px' }} className='smooch-regular'>Cooking</Text>
                        <HStack flexDirection={{ base: 'column', lg: 'row' }}>
                            <Image w={{ base: '220px', lg: '292.21px' }} src={seasoningImages} alt="seasoning-images" />
                            <Text ml={8} className='anja' fontSize={{ base: '60px', lg: '104.5px' }}> Fun</Text>
                        </HStack>
                    </HStack>
                </Box>
                <Flex justify={'center'} rounded={'30px'} px={{ base: '10px', lg: '95px' }} mt={{ base: '50px', lg: '152px' }} position={'relative'}>
                    <Box position="relative" w="full">
                        <Image src={heroImage} w={'full'} objectFit={'cover'} rounded={'30px'} h='648px' alt="hero image" />
                        <Box
                            position="absolute"
                            inset={0}
                            rounded="30px"
                            background="#0000004D"
                            backdropFilter="blur(4.5px)"
                        />
                    </Box>
                    <Image src={zuriMascot} position={'absolute'} bottom={'24px'} insetInline={'auto'} w={'585px'} alt="zuri mascot" zIndex={2} />
                </Flex>
            </Flex>
        </Box>
    )
}