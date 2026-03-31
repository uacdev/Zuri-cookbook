import { Box, Button, Flex, HStack, Icon, Image, Text } from "@chakra-ui/react"
import { FaInstagram } from "react-icons/fa"
import { LuArrowRight, LuAtSign } from "react-icons/lu"

export const Photos = () => {
    return (
        <Flex p={{ base: 4, lg: 16 }} bg={'#F2EDE8'} direction={'column'} pb={20} justify={'center'} alignItems={'center'}>
            <Flex
                color={'white'}
                position={'relative'}
                bgImage={`url(/assets/gallery/image-1.png)`}
                overflow={'hidden'}
                bgSize={'cover'}
                backgroundPosition={'center'}
                rounded={'18px'}
                bgRepeat={'no-repeat'}
                maxW={'1360px'}
                w='full'
                h={{ base: '300px', lg: '508px' }}
            >
                <Flex w={'full'} direction={'column'} zIndex={'modal'} alignItems={'center'} justifyContent={'center'}>
                    <Text fontSize={{ base: '30px', lg: '75px' }} className="anja-accent flex items-center gap-2">Tag <LuAtSign />Zuri_nigeria</Text>
                    <Text fontSize={{ base: '14px', lg: '18px' }} textAlign={'center'} px={{ base: 4, lg: 0 }}>Each Zuri seasoning blend is perfected for a specific taste profile</Text>
                    <Button 
                        asChild
                        rounded={'full'} 
                        mt={5} 
                        fontWeight={'bold'} 
                        py={3} 
                        px={6} 
                        color={'#5D3002'} 
                        bg={'white'}
                        _hover={{ opacity: 0.9, textDecoration: 'none' }}
                    >
                        <a 
                            href="https://www.instagram.com/zuri_nigeria/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                        >
                            <Icon boxSize={5} as={FaInstagram} />
                            <Text>Follow on Instagram</Text>
                            <Icon boxSize={5} as={LuArrowRight} />
                        </a>
                    </Button>
                </Flex>
                <Box bg={'#1A1A1A99'} position={'absolute'} inset={0} boxSize={'full'} />
            </Flex>
            <HStack w={{ base: 'full', lg: '1360px' }} mt={{ base: 8, lg: 5 }} >
                {Images.map((image, index) => (
                    <Image key={index} src={image} w={{ base: '18.3%', lg: '19.6%' }} rounded={'18px'} alt="gallery image" />
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