import { useEffect, useState } from "react";
import { Box, Button, Center, Flex, Grid, Heading, HStack, Input, InputGroup, Link, Text, VStack } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import classNames from "classnames";
import { LuBookmark, LuChevronRight, LuClock, LuUsers } from "react-icons/lu";
import Pagination from "../components/ui/pagination";
import { fetchRecipes, type Recipe } from '../service/recipeService'
import { IoIosFlash } from "react-icons/io";
import { PiCookingPot } from "react-icons/pi";
import { truncateWords } from "../service/utils";

import { AppBreadcrumbs } from "../components/common/breadcrumbs";
import { Loading } from "../components/common/loading";

export default function Recipes() {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [loading, setLoading] = useState(true)
    const [activeCategory, setActiveCategory] = useState('All Recipes')
    const [currentPage, setCurrentPage] = useState(1)
    const [totalCount, setTotalCount] = useState(0)
    const [searchQuery, setSearchQuery] = useState('')
    const [debouncedSearch, setDebouncedSearch] = useState('')
    const pageSize = 10;

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchQuery)
            setCurrentPage(1)
        }, 500)

        return () => clearTimeout(timer)
    }, [searchQuery])

    useEffect(() => {
        setLoading(true)
        fetchRecipes(currentPage, pageSize, activeCategory, debouncedSearch).then(data => {
            setRecipes(data.recipes)
            setTotalCount(data.total)
            setLoading(false)
        })
    }, [currentPage, activeCategory, debouncedSearch])

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category)
        setCurrentPage(1)
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <>
            <Box px={{ base: '16px', lg: '68px' }} py={{ base: '24px', lg: '45px' }} bg={'#1A1A2E'}>
                <AppBreadcrumbs
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Recipes" }
                    ]}
                    mb={4}
                />
                <Heading color={'white'} fontSize={{ base: '32px', lg: '52px' }} mb={'16px'} fontWeight={'bold'}>Find Your Next Favourite Recipe</Heading>
                <Text color={'#B0A898'}>500+ recipes using Zuri seasoning — search by name, meal type, or ingredient.</Text>
                <InputGroup rounded={'12px'} w={{ base: 'full', lg: '680px' }} my={4} px={4} bg={'#FFFFFF'} startElement={<FaSearch />}>
                    <Input
                        border={'none'}
                        outline={'none'}
                        placeholder='Search recipes, ingredients...'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </InputGroup>
            </Box>

            <Flex bg={'#FFFFFF'} gap={4} px={{ base: 4, lg: '68px' }} py={'13px'} borderBottom={'1px solid #E0D8D0'} flexWrap={'wrap'}>
                <Button
                    onClick={() => handleCategoryChange('All Recipes')}
                    className={classNames({
                        "text-sm whitespace-nowrap px-[1rem] font-medium capitalize lg:min-w-[4.3rem] py-[0.5rem] rounded-full":
                            true,
                        "text-[#2D2D44] bg-[#FFFFFF]": activeCategory !== 'All Recipes',
                        "text-white font-medium bg-[#FF0101]": activeCategory === 'All Recipes',
                    })} rounded={'full'} border={'1px solid #E0D8D0'}>
                    All Recipes
                </Button>
                {categories.map((category) => (
                    <Button
                        key={category}
                        border={'1px solid #E0D8D0'}
                        rounded={'full'}
                        onClick={() => handleCategoryChange(category)}
                        className={classNames({
                            "text-sm whitespace-nowrap px-[1rem] font-medium capitalize lg:min-w-[4.3rem] py-[0.5rem] rounded-full":
                                true,
                            "text-ash bg-[#FFFFFF]": category !== activeCategory,
                            "text-white font-medium bg-[#FF0101]": category === activeCategory,
                        })}
                    >
                        {category}
                    </Button>
                ))}
            </Flex>
            <Flex bg={'#FFFFFF'} gap={4} px={{ base: 4, lg: '68px' }} py={'13px'} borderBottom={'1px solid #E0D8D0'}>
                <Text color='#9090A0'>Showing {recipes.length} of {totalCount} recipes</Text>
            </Flex>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }} gap={6} bg={'#FAF6F1'} py={'45px'} maxW='1232px' mx='auto'>
                {loading ? (
                    <Center gridColumn={'span 3'} py={20}>
                        <Loading />
                    </Center>
                ) : recipes.length === 0 ? (
                    <VStack gridColumn={'span 3'} py={10} color={'#9090A0'}>
                        <PiCookingPot size={40} />
                        <Text>No recipes in this category yet. Check back soon!</Text>
                    </VStack>
                ) : (
                    recipes.map((recipe, index) => (
                        <Box w={'389px'} rounded={'12px'} border={'1px solid #E0D8D0'} key={index}>
                            <Box p={3} roundedTop={'12px'} h={'192px'} bg={`url(${recipe.imageUrl})`} bgSize={'cover'} backgroundPosition={'center'} bgRepeat={'no-repeat'} >
                                <HStack justify={'space-between'}>
                                    <Text bg={'#F2EDE8'} fontSize={'14px'} fontWeight={'medium'} w={'fit'} rounded={'full'} px={3} textTransform={'capitalize'}> {recipe.category}</Text>
                                    <Center bg={'#F2EDE8'} fontWeight={'medium'} w={'fit'} rounded={'full'} p={2}><LuBookmark size={16} /></Center>
                                </HStack>
                            </Box>
                            <Box bg={'white'} roundedBottom={'12px'} p={3} color={'#9090A0'}>
                                <Text fontSize={'18px'} mb={'12px'} color={'#1A1A2E'} fontWeight={'semibold'}> {recipe.title}</Text>
                                <Text w={'347px'} fontSize={'14px'}>{truncateWords(recipe.description)}</Text>
                                <Box h={'1px'} my={3} w={'full'} bg={'#E0D8D0'} />
                                <HStack justify={'space-between'}>
                                    <Flex justify={'center'} align={'center'}>
                                        <LuClock /> <Text fontSize={"12px"} ml={1} mr={4}>{recipe.prepTime} mins</Text>
                                        <LuUsers /> <Text fontSize={"12px"} ml={1}> {recipe.servings} servings</Text>
                                    </Flex>
                                    <HStack gap={0}>
                                        <IoIosFlash color="#F09737" />
                                        <Text fontSize={"12px"}>{recipe.difficulty}</Text>
                                    </HStack>
                                </HStack>
                                <HStack justify={'space-between'} mt={4} align={'center'}>
                                    <Text w={'fit'} rounded={'4px'} px={2} py={0.5} bg={'#FF01011A'} fontWeight={'semibold'} fontSize={'12px'} color={'#FF0101'}>{recipe.seasoning}</Text>
                                    <Link href={`/recipe/${recipe.slug}`} fontSize={'14px'} fontWeight={'medium'} color={'#FF0101'}>View Recipe <LuChevronRight /></Link>
                                </HStack>
                            </Box>
                        </Box>
                    ))
                )}
            </Grid>

            <Box>
                <Pagination
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                    itemCount={totalCount}
                    pageSize={pageSize}
                />
            </Box>
        </>
    )
}

const categories = ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Soup']