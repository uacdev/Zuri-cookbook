import { Box, Breadcrumb, Button, Center, Flex, Grid, Heading, HStack, Input, InputGroup, Link, Text } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import classNames from "classnames";
import useDataFilter from "../service/useDataFilter";
import { LuBookmark, LuChevronRight, LuClock, LuUsers } from "react-icons/lu";
import Pagination from "../components/ui/pagination";

export default function Recipe() {

    const {
        activeTag,
        currentPage,
        pageSize,
        paginated,
        uniqueTags,
        itemCount,
        onPageChange,
        onTagChange,
    } = useDataFilter(recipes);

    return (
        <>
            <Box px={'68px'} py={'45px'} bg={'#1A1A2E'}>
                <Breadcrumb.Root mb={4}>
                    <Breadcrumb.List>
                        <Breadcrumb.Item color={'#99A1AF'}>
                            <Breadcrumb.Link href="/">
                                Home
                            </Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Separator color={'#99A1AF'} />
                        <Breadcrumb.Item color={'white'}>
                            <Breadcrumb.Link color={'white'} href="/recipes">
                                Recipes
                            </Breadcrumb.Link>
                        </Breadcrumb.Item>
                    </Breadcrumb.List>
                </Breadcrumb.Root>
                <Heading color={'white'} fontSize={'52px'} mb={'16px'} fontWeight={'bold'}>Find Your Next Favourite Recipe</Heading>
                <Text color={'#B0A898'}>500+ recipes using Zuri seasoning — search by name, meal type, or ingredient.</Text>
                <InputGroup rounded={'12px'} w={'680px'} my={4} px={4} bg={'#FFFFFF'} startElement={<FaSearch />}>
                    <Input border={'none'} outline={'none'} placeholder='Search recipes, ingredients...' />
                </InputGroup>
            </Box>
            <Flex bg={'#FFFFFF'} gap={4} px={'68px'} py={'13px'} borderBottom={'1px solid #E0D8D0'}>
                <Button onClick={() => onTagChange("")}
                    className={classNames({
                        "text-sm whitespace-nowrap px-[1rem] font-medium capitalize lg:min-w-[4.3rem] py-[0.5rem] rounded-full":
                            true,
                        "text-[#2D2D44] bg-[#FFFFFF]": activeTag !== "",
                        "text-white font-medium bg-[#CC0000]": activeTag === "",
                    })} rounded={'full'} border={'1px solid #E0D8D0'}>
                    All Recipes
                </Button>
                {uniqueTags.map((tag) => (
                    <Button
                        key={tag}
                        border={'1px solid #E0D8D0'}
                        rounded={'full'}
                        onClick={() => onTagChange(tag)}
                        className={classNames({
                            "text-sm whitespace-nowrap px-[1rem] font-medium capitalize lg:min-w-[4.3rem] py-[0.5rem] rounded-full":
                                true,
                            "text-ash bg-[#FFFFFF]": tag !== activeTag,
                            "text-white font-medium bg-[#CC0000]": tag === activeTag,
                        })}
                    >
                        {tag}
                    </Button>
                ))}
            </Flex>
            <Flex bg={'#FFFFFF'} gap={4} px={'68px'} py={'13px'} borderBottom={'1px solid #E0D8D0'}>
                <Text>Showing 9 of 500+ recipes</Text>
            </Flex>
            <Grid templateColumns={'repeat(3,1fr)'} gap={8} bg={'#FAF6F1'} px={'68px'} py={'45px'}>
                {paginated.map((vacancy, index) => (
                    <Box w={'389px'} rounded={'12px'} border={'1px solid #E0D8D0'} key={index}>
                        <Box p={3} roundedTop={'12px'} h={'192px'} bg={`url(${vacancy.img})`} bgSize={'cover'} backgroundPosition={'center'} bgRepeat={'no-repeat'} >
                            <HStack justify={'space-between'}>
                                <Text bg={'#F2EDE8'} fontSize={'14px'} fontWeight={'medium'} w={'fit'} rounded={'full'} px={3}> {vacancy.tag}</Text>
                                <Center bg={'#F2EDE8'} fontWeight={'medium'} w={'fit'} rounded={'full'} p={2}><LuBookmark size={16} /></Center>
                            </HStack>
                        </Box>
                        <Box bg={'white'} roundedBottom={'12px'} p={3} color={'#9090A0'}>
                            <Text fontSize={'18px'} mb={'12px'} color={'#1A1A2E'} fontWeight={'semibold'}> {vacancy.name}</Text>
                            <Text w={'347px'} fontSize={'14px'}> {vacancy.description}</Text>
                            <Box h={'1px'} my={3} w={'full'} bg={'#E0D8D0'} />
                            <HStack justify={'space-between'}>
                                <Flex justify={'center'} align={'center'}>
                                    <LuClock /> <Text fontSize={"12px"} ml={1} mr={4}>{vacancy.time}</Text>
                                    <LuUsers /> <Text fontSize={"12px"} ml={1}> {vacancy.serving}</Text>
                                </Flex>
                                <Text fontSize={"12px"}> ⚡ {vacancy.difficulty}</Text>
                            </HStack>
                            <HStack justify={'space-between'} mt={4} align={'center'}>
                                <Text w={'fit'} rounded={'4px'} px={2} bg={'#CC00001A'} fontWeight={'medium'} fontSize={'12px'} color={'#CC0000'}> {vacancy.seasoning}</Text>
                                <Link href={`/recipe/${vacancy.id}`} fontSize={'14px'} fontWeight={'medium'} color={'#CC0000'}>View Recipe <LuChevronRight /></Link>
                            </HStack>


                        </Box>

                    </Box>
                ))}
            </Grid>
            <Box mb={12}>
                <Pagination
                    onPageChange={onPageChange}
                    currentPage={currentPage}
                    itemCount={itemCount}
                    pageSize={pageSize}
                />
            </Box>
        </>
    )

}
interface Recipe {
    name: string
    img: string
    description: string
    time: string
    serving: string
    seasoning: string
    tag: string
    difficulty: string
    id: string
}

const recipes: Recipe[] = [
    {
        name: 'Classic Nigerian Jollof Rice',
        description: 'The crown jewel of West African cuisine, perfectly spiced and aromatic with every grain.',
        img: '/assets/recipe-imgs/img/jollof-rice.png',
        time: '45 mins',
        serving: '6 servings',
        seasoning: 'Zuri Chicken',
        difficulty: 'Medium',
        tag: 'Dinner',
        id: 'classic-nigerian-jollof-rice'
    },
    {
        name: 'Spicy Pepper Soup',
        description: 'Warming, aromatic broth with bold spices perfect for cool evenings or when you need comfort.',
        img: '/assets/recipe-imgs/img/pepper-soup.png',
        time: '30 mins',
        serving: '4 servings',
        seasoning: 'Zuri Pepper Soup',
        difficulty: 'Easy',
        tag: 'Soup',
        id: 'spicy-pepper-soup'
    },
    {
        name: 'Grilled Chicken Suya Style',
        description: 'Street food favorite with smoky, spicy peanut coating that makes every bite unforgettable.',
        img: '/assets/recipe-imgs/img/griilled-chicken.png',
        time: '25 mins',
        serving: '4 servings',
        seasoning: 'Zuri Chicken',
        difficulty: 'Easy',
        tag: 'Dinner',
        id: 'grilled-chicken-suya-style'
    },
    {
        name: 'Nigerian Fried Rice',
        description: 'Colorful, vibrant rice dish loaded with vegetables and perfectly seasoned protein.',
        img: '/assets/recipe-imgs/img/fried-rice.png',
        time: '40 mins',
        serving: '6 servings',
        seasoning: 'Zuri Chicken',
        difficulty: 'Medium',
        tag: 'Dinner',
        id: 'nigerian-fried-rice'
    },
    {
        name: 'Akara (Bean Cakes)',
        description: 'Crispy on the outside, fluffy inside - these protein-packed fritters are breakfast gold.',
        img: '/assets/recipe-imgs/img/akara-beans.png',
        time: '20 mins',
        serving: '4 servings',
        seasoning: 'Zuri Pepper Soup',
        difficulty: 'Easy',
        tag: 'Breakfast',
        id: 'akara-bean-cakes'
    },
    {
        name: 'Fried Plantain with Stew',
        description: 'Sweet caramelized plantains paired with rich, spicy tomato stew for the ultimate comfort meal.',
        img: '/assets/recipe-imgs/img/fried-plantain.png',
        time: '35 mins',
        serving: '4 servings',
        seasoning: 'Zuri Beef',
        difficulty: 'Easy',
        tag: 'Snacks',
        id: 'fried-plantain-with-stew'
    },
    {
        name: 'Egusi Soup',
        description: 'Hearty melon seed soup with leafy greens and tender meat in rich, savory broth.',
        img: '/assets/recipe-imgs/img/egusi-soup.png',
        time: '50 mins',
        serving: '6 servings',
        seasoning: 'Zuri Beef',
        difficulty: 'Medium',
        tag: 'Soup',
        id: 'egusi-soup'
    },
    {
        name: 'Fish Stew',
        description: 'Delicate fish pieces in aromatic tomato sauce with herbs and spices.',
        img: '/assets/recipe-imgs/img/fish-stew.png',
        time: '30 mins',
        serving: '4 servings',
        seasoning: 'Zuri Fish',
        difficulty: 'Easy',
        tag: 'Lunch',
        id: 'fish-stew'
    },
    {
        name: 'Beef Stew',
        description: 'Rich, slow-cooked beef in vibrant red sauce - a Nigerian staple that never disappoints.',
        img: '/assets/recipe-imgs/img/beef-stew.png',
        time: '55 mins',
        serving: '6 servings',
        seasoning: 'Zuri Beef',
        difficulty: 'Medium',
        tag: 'Dinner',
        id: 'beef-stew'
    }
]