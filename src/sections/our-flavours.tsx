import { Box, Flex, Text } from "@chakra-ui/react"
import { ZuriStack } from "./stack"


export const OurFlavours = () => {
    return (
        <Flex direction={'column'} pt={20} alignItems={'center'}>
            <Text color={'#FF0101'} fontWeight={'bold'} fontSize={'18px'} letterSpacing={'2px'} textTransform={'uppercase'}>Our Flavours</Text>
            <Text fontSize={{ base: '33px', lg: '55px' }} w={{ base: 'full', lg: '676px' }} textAlign={'center'} fontWeight={'black'} lineHeight={1.2} px={{ base: 2, lg: 0 }}>
                Unmatched Flavours that Elevates Every Dish
            </Text>
            <Text fontSize={{ base: '14px', lg: '18px' }} color={'#6B6B7A'} textAlign={'center'}>Each Zuri seasoning blend is perfected for a specific taste profile</Text>
            <Box my={20}>
                <ZuriStack />
            </Box>
        </Flex>
    )
}


