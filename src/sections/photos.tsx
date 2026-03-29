import { Box, Button, Flex, HStack, Icon, Image, Text } from "@chakra-ui/react"
import { FaInstagram } from "react-icons/fa"
import { LuArrowRight } from "react-icons/lu"

export const Photos = () => {
    return (
        <Flex p={16} bg={'#F2EDE8'} direction={'column'} pb={20} justify={'center'} alignItems={'center'}>
            <Flex color={'white'} position={'relative'} bgImage={`url(/assets/gallery/image-1.png)`} overflow={'hidden'} bgSize={'cover'} backgroundPosition={'center'} rounded={'18px'} bgRepeat={'no-repeat'} w={'1360px'} h={'508px'} >
                <Flex w={'full'} direction={'column'} zIndex={'modal'} alignItems={'center'} justifyContent={'center'}>
                    <Text fontSize={'75px'} className="anja-accent">Tag @Zuri_nigeria</Text>
                    <Text fontSize={'18px'}>Each Zuri seasoning blend is perfected for a specific taste profile</Text>
                    <Button rounded={'full'} mt={5} fontWeight={'bold'} py={3} px={6} color={'#5D3002'} bg={'white'}>
                        <Icon boxSize={5} as={FaInstagram} />
                        <Text>Follow on Instagram</Text>
                        <Icon boxSize={5} as={LuArrowRight} />
                    </Button>
                </Flex>
                <Box bg={'#1A1A1A99'} position={'absolute'} inset={0} boxSize={'full'} />
            </Flex>
            <HStack w={'1360px'} mt={5} >
                {Images.map((image, index) => (
                    <Image key={index} src={image} w={'19.6%'} rounded={'18px'} alt="gallery image" />
                ))}
            </HStack>

        </Flex>
    )
}

const Images = [

    '/assets/gallery/image-2.png',
    '/assets/gallery/image-3.png',
    '/assets/gallery/image-4.png',
    '/assets/gallery/image-5.png',
    '/assets/gallery/image-6.png',
]