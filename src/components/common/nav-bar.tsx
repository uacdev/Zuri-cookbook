import { Box, Button, HStack, Image } from "@chakra-ui/react"
import ZuriLogo from '../../assets/logo.svg'
import { NavLink } from "react-router"

export const NavBar = () => {
    return (
        <Box bg={'white'}>
            <nav>
                <HStack px={11} justify={'space-between'} py={5} >
                    <Image src={ZuriLogo} alt="Logo" />
                    <HStack gapX={8}>
                        <NavLink to={'/'} className={'nav-link'}>Home</NavLink>
                        <NavLink to={'/recipes'} className={'nav-link'}>Recipes</NavLink >
                        <NavLink to={'/products'} className={'nav-link'}>Products</NavLink>
                        <NavLink to={'/about'} className={'nav-link'}>About</NavLink>
                        <NavLink to={'/contact'} className={'nav-link'}>Contact</NavLink>
                    </HStack>
                    <Button bg={'#FF0101'} rounded={'12px'} fontWeight={'bold'} px={2} color={'white'}>Explore Recipes</Button>
                </HStack>
            </nav>
        </Box>
    )

}