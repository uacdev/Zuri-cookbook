import { Box, VStack, Text, Image, HStack, Stack, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router";
import { SimpleSlider } from "../sections/slider";
import { Flavours } from "../sections/stack";
import { FaArrowRight } from "react-icons/fa";
import { BgIllustration } from "../components/common/bg-illustration";

export default function Products() {
    return (
        <>
            <Box className="relative h-screen lg:h-[400px] flex items-center justify-center bg-[#1A1A2E] px-[16px] lg:px-[68px] py-[2apx] lg:py-[45px]">
                <BgIllustration className="absolute w-full h-full lg:h-[400px]" />
                <VStack p={{ base: 4, lg: 0 }} gap={0} textAlign={'center'} zIndex={2}>
                    <Text className='urbanist text-[#FAF6F1] text-center uppercase text-[18px] font-bold tracking-wide'>
                        Our Products
                    </Text>
                    <Text className='anja text-[#FAF6F1] text-[70px]'>
                        Four Flavours, Infinite Recipes
                    </Text>
                    <Text className='urbanist text-sm text-[#FAF6F1]'>
                        Each Zuri seasoning is crafted to bring out the best in your cooking.
                    </Text>
                </VStack>
                <Box className="absolute bottom-0 w-full">
                    <SimpleSlider />
                </Box>
            </Box>

            <Flex justify={'center'} gap={10} flexDirection={{ base: 'column', lg: 'row' }} px={{ base: 6, lg: 0 }} py={10}>
                <Box className="urbanist w-full lg:w-[512px]">
                    <Stack gap={8}>
                        <Box>
                            <Text className="font-bold text-[38px]">
                                Product Overview
                            </Text>
                            <Text className="text-[18px]">
                                Zuri Seasoning is made from carefully selected natural ingredients, including tomato powder, turmeric, garlic, and other high-quality spices. Each variant is formulated to deliver consistent flavor, excellent aroma, and superior taste, helping consumers prepare delicious and satisfying meals with ease.
                                <br /><br />Zuri Seasoning is available in convenient pack sizes of 10g and 100g, making it suitable for both single-use and family cooking needs.
                            </Text>
                        </Box>
                        <Box>
                            <Text className="font-bold text-[28px]">
                                Key Benefits
                            </Text>
                            <Box as="ul" listStyleType="circle">
                                <li>Made with natural, high-quality ingredients.</li>
                                <li>Rich taste and appealing aroma.</li>
                                <li>Enhances the flavour and overall appeal of meals.</li>
                                <li>Trusted brand backed by UAC Foods’ quality standards.</li>
                                <li>Versatile and easy to use across a wide range of dishes.</li>
                            </Box>
                        </Box>
                    </Stack>
                </Box>
                <Stack>

                    {Flavours.map((spice) => (
                        <Box key={spice.title} bg={spice.color}
                            className="text-white p-10 rounded-[17.65px] relative w-full lg:w-[658.84px] h-full lg:h-[370.6px]"
                        >
                            <BgIllustration className="absolute w-full lg:w-[658.84px] h-full lg:h-[370.6px]" />
                            <Image src={spice.bgText} className='absolute top-0 w-[80%] lg:w-[604px]' />
                            <HStack align='end' justify={'space-between'} className="mt-[4rem]" flexDirection={{ base: 'column-reverse', lg: 'row' }}>
                                <Stack align='start' gap={0} className="w-full lg:w-[313.54px]">
                                    <Text className="anja text-[38px] text-white">{spice.title}</Text>
                                    <Text className="font-medium text-sm">{spice.subtext}</Text>
                                    <Link to={`/recipes?seasoning=${spice.title}`}>
                                        <Button className='h-[44px] mt-2 px-[20px] py-[8px] rounded-[100px] border border-[rgba(255,255,255,0.4)] bg-white text-[#5D3002] font-bold flex items-center gap-2'>
                                            Explore Recipes <FaArrowRight />
                                        </Button>
                                    </Link>
                                </Stack>
                                <Image src={spice.seasoningImage} className="w-[224.12px] h-[229.42px]" />
                            </HStack>
                        </Box>
                    ))}
                </Stack>
            </Flex>
        </>
    )
}