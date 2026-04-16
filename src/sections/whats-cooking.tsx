import { useNavigate } from "react-router"
import { Box, Button, Center, Flex, HStack, IconButton, Image, Input, InputGroup, Text } from "@chakra-ui/react"
import { LuClock, LuUsers } from "react-icons/lu"
import { SimpleSlider } from "./slider"
import { FaAngleLeft, FaAngleRight, FaSearch } from "react-icons/fa"
import { useRef, useState, useEffect } from "react"
import { fetchRecipes, type Recipe } from "../service/contentService"
import { ImSpinner } from "react-icons/im"
import akaraBg from "../assets/recipe-imgs/akara-bg.jpg"
import papImg from "../assets/recipe-imgs/pap-img.png"
import egusiBg from "../assets/recipe-imgs/egusi-soup-bg.png"
import egusiImg from "../assets/recipe-imgs/egusi-soup.png"
import jollofBg from "../assets/recipe-imgs/jollof-rice-bg.jpg"
import jollofImg from "../assets/recipe-imgs/jollof-rice-img.png"
import friedBg from "../assets/recipe-imgs/fried-rice-bg.png"
import friedImg from "../assets/recipe-imgs/fried-rice.png"

export const WhatsCooking = () => {
    const navigate = useNavigate();
    const scrollRef = useRef<HTMLDivElement>(null)
    const searchRef = useRef<HTMLDivElement>(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [results, setResults] = useState<Recipe[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchQuery.trim()) {
                setIsLoading(true)
                setShowDropdown(true)
                fetchRecipes(1, 10, undefined, searchQuery)
                    .then(data => {
                        setResults(data.recipes)
                    })
                    .catch(error => {
                        console.error("Search failed:", error)
                    })
                    .finally(() => {
                        setIsLoading(false)
                    })
            } else {
                setResults([])
                setShowDropdown(false)
            }
        }, 500)

        return () => clearTimeout(timer)
    }, [searchQuery])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowDropdown(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth + 16
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <Box mt={{ base: '20rem', lg: '0' }}>
            <Flex w={'full'} direction={"column"} pt={10} mt={20} alignItems={"center"}>
                <Text fontSize={{ base: '32px', lg: '55px' }} className='anja-accent text-center'>
                    What Are You Cooking Today?
                </Text>
                <Text fontSize={"18px"} textAlign='center' color={"#6B6B7A"}>
                    Handpicked recipes for every occasion, every taste.
                </Text>
                <Box ref={searchRef} position="relative" w={{ base: 'full', lg: '450px' }} px={4}>
                    <InputGroup
                        border={'1px solid #E0D8D0'}
                        rounded={'8px'}
                        w="full"
                        my={4}
                        px={4}
                        bg={'#FFFFFF'}
                        startElement={<FaSearch />}
                    >
                        <Input
                            border={'none'}
                            outline={'none'}
                            placeholder='Search meals, recipes, ingredients, etc'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => searchQuery.trim() && setShowDropdown(true)}
                        />
                    </InputGroup>

                    {showDropdown && (
                        <Box
                            position="absolute"
                            top="100%"
                            left={0}
                            right={0}
                            bg="white"
                            boxShadow="xl"
                            borderRadius="12px"
                            mt={-2}
                            zIndex={100}
                            maxH="400px"
                            overflowY="auto"
                            border="1px solid"
                            borderColor="gray.100"
                            className="glass-dropdown"
                        >
                            {isLoading ? (
                                <Center py={8}>
                                    <ImSpinner color="#FF0101" className="animate-spin" />
                                </Center>
                            ) : results.length > 0 ? (
                                <Box py={2}>
                                    {results.map((recipe) => (
                                        <Flex
                                            key={recipe.id}
                                            px={4}
                                            py={3}
                                            cursor="pointer"
                                            _hover={{ bg: "#FAF6F1" }}
                                            alignItems="center"
                                            gap={4}
                                            onClick={() => {
                                                navigate(`/recipe/${recipe.slug}`)
                                                setShowDropdown(false)
                                            }}
                                        >
                                            <Image
                                                src={recipe.imageUrl}
                                                alt={recipe.title}
                                                boxSize="48px"
                                                objectFit="cover"
                                                borderRadius="8px"
                                            />
                                            <Box>
                                                <Text fontWeight="semibold" fontSize="16px" color="#1A1A2E">
                                                    {recipe.title}
                                                </Text>
                                                <Text fontSize="12px" color="#6B6B7A" className="capitalize">
                                                    {recipe.category} • {recipe.prepTime} mins
                                                </Text>
                                            </Box>
                                        </Flex>
                                    ))}
                                </Box>
                            ) : (
                                <Box py={8} textAlign="center">
                                    <Text color="#6B6B7A">No recipes found for "{searchQuery}"</Text>
                                </Box>
                            )}
                        </Box>
                    )}
                </Box>
            </Flex>
            <Flex
                ref={scrollRef}
                my={8}
                px={2}
                gap={4}
                w={'100%'}
                overflowX={'scroll'}
                flexWrap={'nowrap'}
                css={{
                    '&::-webkit-scrollbar': { display: 'none' },
                    'msOverflowStyle': 'none',
                    'scrollbarWidth': 'none',
                }}
            >
                {Recipes.map((recipe, index) => (
                    <Flex
                        key={index}
                        w={{ base: 'full', lg: "400px" }}
                        h={"600px"}
                        position={"relative"}
                        flexShrink={0}
                        py={10}
                        px={5}
                        rounded={"30px"}
                        bgImage={`url(${recipe.bgImage})`}
                        bgRepeat={"no-repeat"}
                        bgSize={"cover"}
                    >
                        <Box
                            boxSize={"100%"}
                            position={"absolute"}
                            rounded={"30px"}
                            inset={0}
                            bg={"#00000088"}
                        />
                        <Flex
                            zIndex={"99"}
                            color={"white"}
                            alignItems={"center"}
                            direction={"column"}
                        >
                            <Text
                                bg={"#FAF6F14D"}
                                fontWeight={"semibold"}
                                px={"10px"}
                                py={1}
                                rounded={"full"}
                            >
                                {recipe.category}
                            </Text>
                            <Text fontSize={"45px"} fontWeight={"bold"}>
                                {recipe.title}
                            </Text>
                            <HStack>
                                <LuClock /> <Text fontSize={"18px"}>{recipe.time}</Text> |{" "}
                                <LuUsers /> <Text> {recipe.serving}</Text>
                            </HStack>
                            <Flex justify={"center"} mt={"auto"}>
                                <Image src={recipe.mealImage} alt="meal image" />
                            </Flex>
                            <Button
                                px={'29px'}
                                color={"#FF0101"}
                                rounded={"full"}
                                fontWeight={"bold"}
                                bg={"white"}
                                mt={'10px'}
                                onClick={() => navigate(`/recipes?category=${recipe.category}`)}
                            >
                                Explore Recipes
                            </Button>
                        </Flex>
                    </Flex>
                ))}
            </Flex>
            <Center mb={8} className="flex lg:hidden">
                <HStack gap={4}>
                    <IconButton
                        aria-label="Previous slide"
                        color={'#FF0101'}
                        rounded={'full'}
                        border={'1px solid #FF0101'}
                        variant="outline"
                        onClick={() => scroll('left')}
                    >
                        <FaAngleLeft />
                    </IconButton>
                    <IconButton
                        aria-label="Next slide"
                        color={'#FF0101'}
                        rounded={'full'}
                        border={'1px solid #FF0101'}
                        variant="outline"
                        onClick={() => scroll('right')}
                    >
                        <FaAngleRight />
                    </IconButton>
                </HStack>
            </Center>
            <SimpleSlider />
        </Box >
    )
}

interface RecipeProps {
    bgImage: string
    title: string
    category: string
    time: string
    serving: string
    mealImage: string
    id: string
}

const Recipes: RecipeProps[] = [
    {
        bgImage: akaraBg,
        title: "Akara & Pap",
        category: "Breakfast",
        time: "30 mins",
        serving: "8-10 servings",
        mealImage: papImg,
        id: "akara-and-pap",
    },
    {
        bgImage: egusiBg,
        title: "Egusi Soup",
        category: "Lunch",
        time: "30 mins",
        serving: "6 servings",
        mealImage: egusiImg,
        id: "egusi-soup",
    },
    {
        bgImage: jollofBg,
        title: "Jollof Rice",
        category: "Dinner",
        time: "45 mins",
        serving: "6 servings",
        mealImage: jollofImg,
        id: "jollof-rice",
    },
    {
        bgImage: friedBg,
        title: "Fried Rice",
        category: "Breakfast",
        time: "45 mins",
        serving: "6 servings",
        mealImage: friedImg,
        id: "fried-rice",
    },
    {
        bgImage: akaraBg,
        title: "Akara & Pap",
        category: "Breakfast",
        time: "30 mins",
        serving: "8-10 servings",
        mealImage: papImg,
        id: "akara-and-pap",
    },
    {
        bgImage: jollofBg,
        title: "Jollof Rice",
        category: "Lunch",
        time: "45 mins",
        serving: "6 servings",
        mealImage: jollofImg,
        id: "jollof-rice",
    },
]