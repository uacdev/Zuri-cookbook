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
                <Box>
                    <Text fontSize={'104.5px'} className='anja'>Making Everyday</Text>
                    <HStack mt={'-18px'}>
                        <Text color={'#FF0101'} fontSize={'110px'} className='smooch-regular'>Cooking</Text>
                        <Image w={'292.21px'} src={seasoningImages} alt="seasoning-images" />
                        <Text ml={8} className='anja' fontSize={'104.5px'}> Fun</Text>
                    </HStack>
                </Box>
                <Flex justify={'center'} rounded={'30px'} px={'95px'} mt={'152px'} position={'relative'}>
                    <Image src={zuriMascot} position={'absolute'} bottom={'24px'} insetInline={'auto'} w={'585px'} alt="zuri mascot" />
                    <Image src={heroImage} w={'100%'} objectFit={'cover'} rounded={'30px'} h={'648px'} alt="hero image" />
                </Flex>
            </Flex>
        </Box >
    )
}