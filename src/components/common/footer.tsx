import { Box, Button, Flex, HStack, Icon, IconButton, Image, Text } from "@chakra-ui/react"
import { FaInstagram, FaTiktok } from 'react-icons/fa'
import { LuArrowRight } from "react-icons/lu"
import { TbMail } from "react-icons/tb";
import bgPatterns from '../../assets/bg-patterns.png'

export const Footer = () => {
    return (
        <footer className="no-print" style={{ background: 'white' }} >
            <Flex justify={'center'} alignContent={'center'} bgImage={`url(${bgPatterns})`} bgRepeat={'no-repeat'} py={{ base: '120px', lg: '224px' }} bgSize={'cover'} gap={15} flexDirection={{ base: 'column', lg: 'row' }} px={{ base: 2, lg: 0 }}>
                <Image mr={15} w={{ base: 'full', lg: '442px' }} objectFit={'contain'} src='/logo.svg' alt="Logo" />
                <Box ml={15} w={{ base: 'full', lg: '374px' }}>
                    <Text fontSize={'24px'} mb={6} fontWeight={'bold'}>From everyday dinners to special celebrations, Our Zuri Flavors makes all the difference.</Text>
                    <Text fontSize={'18px'} mb={6}>Get in Touch</Text>
                    <HStack>
                        <IconButton p={3} rounded={'full'} color={'white'} bg={'#FF0101'} onClick={() => window.open('https://www.instagram.com/zuri_nigeria/', '_blank')}>
                            <Icon boxSize={5} as={FaInstagram} />
                        </IconButton>
                        <IconButton p={3} rounded={'full'} color={'white'} bg={'#FF0101'} onClick={() => window.open('https://www.tiktok.com/@zuri_nigeria', '_blank')}>
                            <Icon boxSize={5} as={FaTiktok} />
                        </IconButton>
                        <Button asChild rounded={'full'} py={3} px={6} color={'white'} bg={'#FF0101'}>
                            <a href="mailto:Info@zuri.com">
                                <Icon boxSize={5} as={TbMail} />
                                <Text className="font-semibold">Info@zuri.com</Text>
                                <Icon boxSize={5} as={LuArrowRight} />
                            </a>
                        </Button>
                    </HStack>
                </Box>
            </Flex>
        </footer >
    )
}