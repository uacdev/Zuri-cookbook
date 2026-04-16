import { Box, Center, Flex, Image, Text } from "@chakra-ui/react"
import friedRecipeImg from '../assets/fried-rice-img.png'
import starIcon from '../assets/icons/star-icon.svg'

export const WhyZuri = () => {
    return (
        <Flex direction={'column'} py={20} alignItems={'center'} bg={'#F2EDE8'} mt={{ base: '8rem', lg: '15rem' }}>
            <Text fontSize={{ base: '32px', lg: '55px' }} mb={11} textAlign={'center'} fontWeight={'black'} className="anja">Why Cook With Zuri?</Text>
            <Flex gap={4.5} flexDirection={{ base: 'column', lg: 'row' }}>
                <Box
                    bg={`url(${friedRecipeImg})`}
                    p={4}
                    bgSize={'cover'}
                    backgroundPosition={'center'}
                    border={'2px solid #FAF6F1'}
                    bgRepeat={'no-repeat'}
                    rounded={'24px'}
                    w={{ base: 'full', lg: '475px' }}
                    h={'436.97px'}>
                    <Center bg={'#FF0101'} color={'#FAF6F1'} fontSize={'12px'} w={'fit'} textTransform={'uppercase'} rounded={'full'} fontWeight={'semibold'} py={1} px={3}>
                        Fried rice recipe - 1HR 25Mins - 8-10 people
                    </Center>
                </Box>
                <Flex
                    direction={'column'}
                    justifyContent={'center'}
                    rounded={'24px'}
                    p={8}
                    bg={'#FFFBFA'}
                    border={'2px solid #FAF6F1'}>
                    <Text fontSize={'24px'} fontWeight={'extrabold'}>The Secret Behind Every Great Nigerian Dish</Text>
                    <Text w={{ base: 'full', lg: '800px' }} fontWeight={'14px'}>
                        At Zuri, we believe great cooking starts with great ingredients. That's why we source only the finest spices and herbs from trusted suppliers across West Africa. Each blend is carefully crafted to bring out authentic Nigerian flavors — tested by professional chefs and perfected by thousands of home cooks just like you. Whether you're a seasoned cook or just starting your culinary journey, Zuri makes it easy to create restaurant-quality dishes at home.
                    </Text>
                    <Box>
                        {Texts.map((text, index) => (
                            <Flex key={index} gap={5} mt={8}>
                                <Image boxSize={'40px'} src={starIcon} alt="star icon" />
                                <Box>
                                    <Text fontSize={'18px'} fontWeight={'bold'}>{text.text}</Text>
                                    <Text fontSize={'14px'} color={'#6B6B7A'}>{text.subText}</Text>
                                </Box>
                            </Flex>
                        ))}
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

const Texts = [
    {
        text: 'Authentic Taste',
        subText: 'Hand-crafted seasoning blends using traditional recipes'
    },
    {
        text: 'Everyday Convenience',
        subText: 'Pre-measured portions, no guessing required'
    },
    {
        text: 'Trusted by Millions',
        subText: "Nigeria's fastest-growing seasoning brand"
    }
]