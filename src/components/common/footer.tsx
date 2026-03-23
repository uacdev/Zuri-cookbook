import { Box, Button, Center, Flex, HStack, Icon, Image, Text } from "@chakra-ui/react"
import logoDark from '../../assets/logo-dark.svg'
import { FaInstagram } from 'react-icons/fa'
import { LuArrowRight } from "react-icons/lu"
import bgPatterns from '../../assets/bg-patterns.png'

export const Footer = () => {
    return (
        <footer style={{ background: 'white' }} >
            <Flex justify={'center'} alignContent={'center'} bgImage={`url(${bgPatterns})`} bgRepeat={'no-repeat'} py={'224px'} bgSize={'cover'} gap={15}>
                <Image mr={15} w={'442px'} objectFit={'contain'} src={logoDark} alt="Logo" />
                <Box ml={15} w={'374px'}>
                    <Text fontSize={'24px'} mb={6} fontWeight={'bold'}>From everyday dinners to special celebrations, Our Zuri Flavors makes all the difference.</Text>
                    <Text fontSize={'18px'} mb={6}>Get in Touch</Text>
                    <HStack>
                        <Center p={3} rounded={'full'} color={'white'} bg={'#FF0101'}>
                            <Icon boxSize={5} as={FaInstagram} />
                        </Center>
                        <Center p={3} rounded={'full'} color={'white'} bg={'#FF0101'}>
                            <Icon boxSize={5} as={FaInstagram} />
                        </Center>
                        <Button rounded={'full'} py={3} px={6} color={'white'} bg={'#FF0101'}>
                            <Icon boxSize={5} as={FaInstagram} />
                            <Text>Info@zuri.com</Text>
                            <Icon boxSize={5} as={LuArrowRight} />
                        </Button>
                    </HStack>
                </Box>
            </Flex>
        </footer >
    )
}