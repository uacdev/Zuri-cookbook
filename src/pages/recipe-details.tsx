import { useEffect, useState } from "react";
import { Box, Button, Center, Flex, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { IoIosFlash } from "react-icons/io";
import { LuClock, LuPrinter, LuUsers } from "react-icons/lu";
import { Link, useParams } from "react-router";
import { fetchRecipeBySlug, type Recipe } from "../service/contentService";
import { PiCookingPot } from "react-icons/pi";
import { AppBreadcrumbs } from "../components/common/breadcrumbs";
import { Loading } from "../components/common/loading";
import z from "../assets/z-round.png"
import { SeasoningUsed } from "../sections/seasoning-used";
import { ShareButton } from "../components/common/share";

export default function RecipeDetails() {
    const { id } = useParams<{ id: string }>()
    const [recipe, setRecipe] = useState<Recipe | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!id) return
        fetchRecipeBySlug(id).then(data => {
            setRecipe(data)
            setLoading(false)
        })
    }, [id])

    const handleDownload = () => {
        window.print()
    }

    if (loading) {
        return (
            <Center h={'60vh'} bg={'#FAF6F1'}>
                <Loading />
            </Center>
        )
    }

    if (!recipe) {
        return (
            <Center h={'60vh'} bg={'#FAF6F1'}>
                <VStack color={'#9090A0'}>
                    <PiCookingPot size={120} color="#FF0101" />
                    <Text fontSize={'xl'}>Recipe not found.</Text>
                    <Link to='/recipes'>← Back to recipes</Link>
                </VStack>
            </Center>
        )
    }

    const snapShot = [
        { label: 'Time', value: `${recipe.prepTime} mins` },
        { label: 'Servings', value: `${recipe.servings} servings` },
        { label: 'Difficulty', value: recipe.difficulty },
        { label: 'Cuisine', value: 'Nigerian' },
    ]

    return (
        <>
            <Flex
                position={'relative'}
                px={'68px'}
                align={'end'}
                bg={`url(${recipe.imageUrl})`}
                bgSize={'cover'}
                h={'500px'}
                pb={12}
                backgroundPosition={'center'}
                bgRepeat={'no-repeat'}
            >
                <Box zIndex={'99'}>
                    <AppBreadcrumbs
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Recipes", href: "/recipes" },
                            { label: recipe.category }
                        ]}
                        color="#FFFFFFB2"
                        activeColor="white"
                    />

                    <Heading mt={4} mb={6} lineHeight={{ base: '40px', lg: '70px' }} fontSize={{ base: '32px', lg: '56px' }} fontWeight={'bold'} color={'white'}>
                        {recipe.title}
                    </Heading>

                    <Flex color={'white'} align={{ base: 'start', lg: 'center' }} gap={3} flexWrap={'wrap'}>
                        <LuClock />
                        <Text fontSize={"14px"}>{recipe.prepTime} mins</Text>
                        <LuUsers />
                        <Text fontSize={"14px"}>{recipe.servings} servings</Text>
                        <HStack gap={1}>
                            <IoIosFlash color="#F09737" />
                            <Text fontSize={"14px"}>{recipe.difficulty}</Text>
                        </HStack>
                        <FaStar color="#FDC700" />
                        <Text fontSize={"14px"}>4.8 (280 reviews)</Text>
                    </Flex>
                    <ShareButton recipeName={recipe.title} />
                </Box>

                <Box
                    w={'full'} h={'full'} position={'absolute'} inset={0}
                    className="bg-[linear-gradient(0deg,rgba(26,26,46,0.8)_0%,rgba(26,26,46,0.4)_50%,rgba(0,0,0,0)_100%)]"
                />
            </Flex>

            <Flex bg={'white'} px={{ base: '16px', lg: '68px' }} py={{ base: '24px', lg: '48px' }} gap={12} align={'start'} flexDirection={{ base: 'column', lg: 'row' }}>
                <Box flex={1}>
                    <Text color={'#2D2D44'} fontSize={{ base: '14px', lg: '16px' }} lineHeight={'tall'} mb={10}>
                        {recipe.description}
                    </Text>

                    <Box mb={10}>
                        <HStack justify={'space-between'} mb={8}>
                            <Text className="playfair uppercase font-medium tracking-wider text-[14px] text-[#FF0101]">
                                Ingredients
                            </Text>
                            <Text className="text-[#2D2D44] bg-[#F2EDE8] px-4 py-2 rounded-[12px] text-sm tracking-wide">
                                Servings: <b className="text-[16px]">{recipe.servings}</b>
                            </Text>
                        </HStack>
                        <VStack align={'stretch'} gap={1}>
                            {recipe.ingredients.map((ingredient, index) => (
                                <HStack
                                    key={index}
                                    justify={'space-between'}
                                    py={3}
                                    px={4}
                                    bg={index % 2 === 0 ? '#F2EDE8' : 'transparent'}
                                    rounded={'12px'}
                                >
                                    <Text fontSize={'15px'} color={'#1A1A2E'} fontWeight={'medium'}>{ingredient.name}</Text>
                                    <Text fontSize={'14px'} color={'#1A1A2E'} fontWeight={'semibold'}>{ingredient.quantity} {ingredient.unit}</Text>
                                </HStack>
                            ))}
                        </VStack>
                    </Box>

                    <SeasoningUsed seasoning={recipe.seasoning} />

                    {recipe.instructions && recipe.instructions.length > 0 && (
                        <Box>
                            <Text className="playfair mb-6 uppercase font-medium tracking-wider text-[14px] text-[#FF0101]">
                                How to cook
                            </Text>
                            <Stack gap={8} py={8}>
                                {recipe.instructions.map((item, index) => (
                                    <Box key={index}>
                                        <HStack gap={4} alignItems='flex-start' className="relative">
                                            <Text className="text-[#F2EDE8] text-[48px] font-bold absolute top-[-20px] playfair">
                                                {item.step}
                                            </Text>
                                            <Stack gap={3} className="ml-[3rem]">
                                                <Text fontWeight="bold" fontSize="18px" color="#1A1A2E">
                                                    {item.title}
                                                </Text>
                                                <Text color="#4A4A6A" fontSize="16px" lineHeight="tall">
                                                    {item.content}
                                                </Text>
                                            </Stack>
                                        </HStack>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>
                    )}
                </Box>

                <Box w={{ base: 'full', lg: '380px' }} flexShrink={0}>
                    <Stack gap={6}>
                        <Box rounded={'12px'} overflow={'hidden'} className="bg-white shadow-lg p-6 border border-[#E0D8D0]">
                            <Stack gap={6}>
                                <Image src={recipe.imageUrl} alt={recipe.title} w={'full'} h={'219px'} objectFit={'cover'} rounded='12px' />
                                <Box>
                                    <VStack align={'stretch'} gap={3}>
                                        {snapShot.map((item, index) => (
                                            <HStack key={index} justify={'space-between'}>
                                                <Text fontSize={'14px'} color={'#9090A0'}>{item.label}</Text>
                                                <Text fontSize={'14px'} fontWeight={'semibold'} color={'#1A1A2E'}>{item.value}</Text>
                                            </HStack>
                                        ))}
                                    </VStack>
                                </Box>

                                <Button
                                    className="bg-white border-2 border-[#1A1A2E] rounded-[12px] font-semibold no-print"
                                    onClick={handleDownload}
                                >
                                    <LuPrinter />
                                    Print Recipe
                                </Button>
                            </Stack>
                        </Box>

                        <Box className="no-print" bg={'#F2EDE8'} rounded={'12px'} p={5}>
                            <VStack>
                                <Image src={z} alt="z" />
                                <Text color={'#1A1A2E'} fontSize={'32px'} fontWeight={'bold'}>
                                    Powering this recipe
                                </Text>
                                <Text color={'#6B6B7A'} fontSize={'sm'} mb={2}>
                                    {recipe.seasoning} Seasoning
                                </Text>
                                <Button bg={'#FF0101'} color={'white'} w={'full'} rounded={'12px'} fontSize={'14px'} fontWeight={'semibold'}>
                                    Buy Now
                                </Button>
                            </VStack>
                        </Box>
                    </Stack>
                </Box>
            </Flex>
        </>
    )
}