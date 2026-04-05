import { Box, Flex, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react"
import { Counter } from "../components/common/counter"
import zuriMascot from '../assets/zuri-mascot.png'
import heroImage from '../assets/hero-image.png'
import fridge from '../assets/about.png'
import quality from '../assets/icons/quality.png'
import fast from '../assets/icons/fast.png'
import star from '../assets/icons/star.png'
import { Team } from "../sections/team"

const About = () => {
    const metrics = [
        {
            stats: '500+',
            label: 'Recipes'
        },
        {
            stats: '4',
            label: 'Flavours'
        },
        {
            stats: '1M+',
            label: 'Cooks'
        },
        {
            stats: '15+',
            label: 'Years'
        },
    ];

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
        <div>
            <Box bgSize='cover' bgImage={`url(${heroImage})`} className="relative w-full h-[684px] flex items-end justify-center">
                <Box
                    className="absolute inset-0"
                    background="#0000004D"
                    backdropFilter="blur(4.5px)"
                />
                <Image src={zuriMascot} className='w-[490px] mb-28 lg:mb-[-150px]' alt="zuri mascot" zIndex={2} />
                <Box
                    className="urbanist h-auto lg:h-[252px] bg-white rounded-[18px] p-12 w-full max-w-[1306px] mx-auto absolute bottom-[-150px]"
                    zIndex={3}>
                    <Stack gap={0} className="justify-center">
                        <Text className="text-[#FF0101] font-semibold text-sm mb-0">Nice to meet you</Text>
                        <Flex justify={'space-between'} align='start' w='100%' flexDirection={{ base: 'column', lg: 'row' }} gap={4}>
                            <Text className="text-[#101828] font-bold text-[48px]">
                                Our Story
                            </Text>
                            <Text className="text-[#1A1A2E] font-medium w-full lg:w-[480px]">
                                Zuri Seasoning is a product from UAC Foods, the makers of trusted household brands such as Gala, Supreme Ice Cream, Swan Natural Spring Water, and Kingsway Rolls. Built on a legacy of quality and trust, Zuri Seasoning is designed to enhance everyday cooking with rich taste and appealing aroma. Zuri Seasoning is available in Chicken, Beef, Classic and Jollof flavours.
                            </Text>
                        </Flex>
                    </Stack>
                </Box>
            </Box>

            <Box className="bg-[#FAF6F1] w-full max-w-[1216px] mx-auto mt-[150px] py-10 px-4">
                <Text className="text-[#1A1A2E] text-[32px] font-bold">
                    Zuri Seasoning delivers consistent quality, rich taste, and trusted flavour, helping consumers create delicious meals with confidence every time.
                </Text>
                <Image src={fridge} alt="peppers" className="w-full h-full my-8" />
                <Box className="bg-[#CC0000] rounded-[16px] p-10">
                    <HStack justify={"space-around"} flexDirection={{ base: 'column', lg: 'row' }} gap={8}>
                        {metrics.map((metric) => (
                            <VStack key={metric.stats} gap={0}>
                                <Text className="inter text-[#FFFFFF] font-semibold text-[60px]">
                                    <Counter value={metric.stats} />
                                </Text>
                                <Text className="inter text-[#FFFFFF] font-medium text-sm">{metric.label}</Text>
                            </VStack>
                        ))}
                    </HStack>
                </Box>
                <HStack justify={'center'} gap={5} flexDirection={{ base: 'column', lg: 'row' }} py={6}>
                    <Text className="inter text-[#1A1A2E] text-[18px] font-light">
                        Founded in 2011, Zuri started with a simple mission: to help every Nigerian cook create restaurant-quality dishes at home without spending hours perfecting spice blends. Our founder, Chef Amara Okafor, grew up watching her grandmother measure out countless spices by hand for family gatherings.
                        <br /><br />
                        She knew there had to be a way to preserve that authentic taste while making it accessible to busy families, young professionals, and anyone who wanted to connect with Nigerian cuisine. After three years of testing and refinement — and feedback from hundreds of home cooks — Zuri Chicken Seasoning launched to immediate acclaim.
                        <br /><br />
                        Today, Zuri has expanded to four signature blends, each crafted with the same dedication to quality and authenticity.
                    </Text>
                    <Text className="inter text-[#1A1A2E] text-[18px] font-light">
                        We work directly with local farmers and spice merchants across West Africa to source the finest ingredients. Every batch is tested to ensure it meets our exacting standards.
                        <br /><br />
                        More than just a seasoning brand, Zuri has become a community. Through our recipe platform, cooking tutorials, and social media presence, we've connected over a million cooks who share tips, celebrate successes, and keep Nigerian culinary traditions alive for the next generation.
                        <br /><br />
                        We believe that food is culture, and every meal is an opportunity to honor where we come from while embracing where we're going. That's the Zuri promise: authentic flavor, modern convenience, and a taste that feels like home.
                    </Text>
                </HStack>
            </Box>

            <Box className="py-[6rem] px-4 bg-[#FFFFFF]">
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

            <Team />
        </div>
    )
}

export default About;