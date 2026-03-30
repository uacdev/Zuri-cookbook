import { useState } from "react"
import { NavLink, useNavigate } from "react-router"
import { Box, Button, HStack, Image, IconButton, Collapsible, Stack } from "@chakra-ui/react"
import { FiMenu } from "react-icons/fi"
import { IoClose } from "react-icons/io5"

export const NavBar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box className="no-print" bg={'white'} position={'sticky'} top={0} zIndex={'9999'} borderBottom={'1px solid #E0D8D0'}>
            <nav>
                <HStack px={{ base: 4, lg: 11 }} justify={'space-between'} py={5} maxW='1440px' mx='auto'>
                    <Image
                        src='/logo.svg'
                        alt="Logo"
                        onClick={() => navigate('/')}
                        cursor={'pointer'}
                        h={{ base: '32px', lg: 'auto' }}
                    />

                    {/* Desktop Navigation */}
                    <HStack gapX={8} display={{ base: 'none', lg: 'flex' }}>
                        <NavLink to={'/'} className={'nav-link'}>Home</NavLink>
                        <NavLink to={'/recipes'} className={'nav-link'}>Recipes</NavLink >
                        <NavLink to={'/products'} className={'nav-link'}>Products</NavLink>
                        <NavLink to={'/about'} className={'nav-link'}>About</NavLink>
                        <NavLink to={'/contact'} className={'nav-link'}>Contact</NavLink>
                    </HStack>

                    <Button
                        display={{ base: 'none', lg: 'flex' }}
                        bg={'#FF0101'}
                        rounded={'12px'}
                        fontWeight={'bold'}
                        px={4}
                        color={'white'}
                        onClick={() => navigate('/recipes')}
                    >
                        Explore Recipes
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <IconButton
                        display={{ base: 'flex', lg: 'none' }}
                        variant="ghost"
                        color="#FF0101"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <IoClose size="24px" /> : <FiMenu size="24px" />}
                    </IconButton>
                </HStack>

                {/* Mobile Navigation (Collapsible) */}
                <Collapsible.Root open={isOpen} unmountOnExit>
                    <Collapsible.Content
                        bg="white"
                        position="absolute"
                        top="100%"
                        left={0}
                        w="full"
                        borderBottom="1px solid #E0D8D0"
                        zIndex={'100'}
                        h={'100vh'}
                    >
                        <Stack p={6} gap={6}>
                            <NavLink to={'/'} className={'nav-link'} onClick={() => setIsOpen(false)}>Home</NavLink>
                            <NavLink to={'/recipes'} className={'nav-link'} onClick={() => setIsOpen(false)}>Recipes</NavLink >
                            <NavLink to={'/products'} className={'nav-link'} onClick={() => setIsOpen(false)}>Products</NavLink>
                            <NavLink to={'/about'} className={'nav-link'} onClick={() => setIsOpen(false)}>About</NavLink>
                            <NavLink to={'/contact'} className={'nav-link'} onClick={() => setIsOpen(false)}>Contact</NavLink>
                            <Button
                                mt={10}
                                bg={'#FF0101'}
                                rounded={'12px'}
                                fontWeight={'bold'}
                                w="full"
                                color={'white'}
                                onClick={() => { navigate('/recipes'); setIsOpen(false) }}
                            >
                                Explore Recipes
                            </Button>
                        </Stack>
                    </Collapsible.Content>
                </Collapsible.Root>
            </nav>
        </Box>
    )
}