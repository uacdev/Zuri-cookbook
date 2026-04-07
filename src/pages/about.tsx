import { Box, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react"
import zuriMascot from '../assets/zuri-mascot.png'
import heroImage from '../assets/hero-image.png'
import quality from '../assets/icons/quality.png'
import fast from '../assets/icons/fast.png'
import star from '../assets/icons/star.png'

const About = () => {
    const values = [
        {
            icon: quality,
            title: 'Quality',
            description: 'We source only the finest ingredients and maintain rigorous quality standards at every step of production.',
            bg: '#327F32'
        },
        {
            icon: fast,
            title: 'Convenience',
            description: 'Perfectly measured blends that save time while delivering authentic, restaurant-quality flavor at home.',
            bg: '#CC0000'
        },
        {
            icon: star,
            title: 'Flavour Innovation',
            description: 'Continuously perfecting our recipes based on feedback from thousands of Nigerian home cooks.',
            bg: '#1A1A2E'
        },
    ];

    return (
        <div className="bg-white">
            <Box bgSize='cover' bgImage={`url(${heroImage})`} className="relative w-full h-[684px] flex items-end justify-center">
                <Box
                    className="absolute inset-0"
                    background="#0000004D"
                    backdropFilter="blur(4.5px)"
                />

                <Image src={zuriMascot} className='w-[490px] mb-28 lg:mb-[-150px]' alt="zuri mascot" zIndex={2} />

                <Box
                    className="urbanist h-auto bg-white rounded-[18px] p-12 w-full max-w-[1306px] mx-auto absolute bottom-[-250px]"
                    zIndex={3}>
                    <VStack gap={0} className="justify-center">
                        <Text className="text-[#FF0101] font-semibold text-sm mb-0">Nice to meet you</Text>
                        <Text className="text-[#101828] font-bold text-[48px]">
                            Our Story
                        </Text>
                        <Text className="text-[#1A1A2E] text-[18px] font-medium w-full lg:w-[650px] text-center">
                            Zuri Seasoning is a product from UAC Foods, the makers of trusted household brands such as Gala, Supreme Ice Cream, Swan Natural Spring Water, and Kingsway Rolls. Built on a legacy of quality and trust, Zuri Seasoning is designed to enhance everyday cooking with rich taste and appealing aroma. Zuri Seasoning is available in Chicken, Beef, Classic and Jollof flavours.
                        </Text>
                    </VStack>
                </Box>
            </Box>

            <Box className="py-[6rem] px-4 bg-[#FFFFFF] mt-[10rem]">
                <Box className="w-full max-w-[1216px] mx-auto">
                    <Stack className="max-w-[768px] mx-auto">
                        <Text className="urbanist text-[#1A1A2E] text-[32px] font-bold text-center">
                            Making authentic Nigerian cooking accessible to everyone, everywhere.
                        </Text>
                        <Text className="text-[#1A1A2E] text-[18px] text-center">
                            Our mission is to preserve and celebrate West African culinary heritage while empowering home cooks with the tools they need to create extraordinary meals without extraordinary effort. We believe everyone deserves to experience the rich, bold flavors that define Nigerian cuisine.
                        </Text>
                    </Stack>
                    <HStack mt={10} flexDirection={{ base: 'column', lg: 'row' }} gap={4}>
                        {values.map((value, index) => (
                            <Box className="rounded-[12px] p-4 h-[392px] flex flex-col justify-between" bg={value.bg} key={index}>
                                <Image src={value.icon} alt="peppers" className="w-[58px] h-[58px]" />
                                <Stack>
                                    <Text className="text-white text-[30px] font-bold">
                                        {value.title}
                                    </Text>
                                    <Text className="text-white text-[18px] font-medium">
                                        {value.description}
                                    </Text>
                                </Stack>

                            </Box>
                        ))}
                    </HStack>
                </Box>
            </Box>
        </div>
    )
}

export default About;