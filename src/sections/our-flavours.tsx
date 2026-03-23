import { Box, Flex, Text } from "@chakra-ui/react"
import { ZuriStack } from "./stack"


export const OurFlavours = () => {
    return (
        <Flex direction={'column'} pt={20} alignItems={'center'}>
            <Text color={'#FF0101'} fontWeight={'bold'} fontSize={'18px'} letterSpacing={'2px'} textTransform={'uppercase'}>Our Flavours</Text>
            <Text fontSize={'55px'} w={'676px'} textAlign={'center'} fontWeight={'black'}>Unmatched Flavours that Elevates Every Dish</Text>
            <Text fontSize={'18px'} color={'#6B6B7A'}>Each Zuri seasoning blend is perfected for a specific taste profile</Text>
            <Box my={20}>
                <ZuriStack />
            </Box>
        </Flex>
    )
}


