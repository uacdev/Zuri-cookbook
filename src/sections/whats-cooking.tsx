import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react"
import { LuClock, LuUsers } from "react-icons/lu"
import { SimpleSlider } from "./slider"


export const WhatsCooking = () => {


    return (
        <Box>
            <Flex w={'full'} direction={"column"} pt={10} alignItems={"center"}>
                <Text
                    color={"#FF0101"}
                    fontWeight={"bold"}
                    fontSize={"18px"}
                    letterSpacing={"2px"}
                    textTransform={"uppercase"}
                >
                    Nigeria's Favourite Seasoning
                </Text>
                <Text fontSize={"55px"} fontWeight={"black"}>
                    What's Cooking Today
                </Text>
                <Text fontSize={"18px"} color={"#6B6B7A"}>
                    Handpicked recipes for every occasion, every taste.
                </Text>
            </Flex>
            <Flex
                my={8}
                px={2}
                gap={4}
                w={'100%'}
                overflowX={'scroll'}
                flexWrap={'nowrap'} >
                {Recipes.map((recipe, index) => (
                    <Flex
                        key={index}
                        w={"400px"}
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
                            zIndex={"modal"}
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
                            >
                                Explore Recipes
                            </Button>
                        </Flex>
                    </Flex>
                ))}
            </Flex>
            <SimpleSlider />
        </Box>
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
        bgImage: "/assets/recipe-imgs/fried-rice-bg.png",
        title: "Akara & Pap",
        category: "Breakfast",
        time: "30 mins",
        serving: "8-10 servings",
        mealImage: "/assets/recipe-imgs/pap-img.png",
        id: "akara-and-pap",
    },
    {
        bgImage: "/assets/recipe-imgs/egusi-soup-bg.png",
        title: "Egusi Soup",
        category: "Soup",
        time: "30 mins",
        serving: "6 servings",
        mealImage: "/assets/recipe-imgs/egusi-soup-img.png",
        id: "egusi-soup",
    },
    {
        bgImage: "/assets/recipe-imgs/jollof-rice-bg.png",
        title: "Jollof Rice",
        category: "Main Dish",
        time: "45 mins",
        serving: "6 servings",
        mealImage: "/assets/recipe-imgs/jollof-rice-img.png",
        id: "jollof-rice",
    },
    {
        bgImage: "/assets/recipe-imgs/fried-rice-bg.png",
        title: "Fried Rice",
        category: "Main Dish",
        time: "45 mins",
        serving: "6 servings",
        mealImage: "/assets/recipe-imgs/fried-rice-img.png",
        id: "fried-rice",
    },
    {
        bgImage: "/assets/recipe-imgs/fried-rice-bg.png",
        title: "Akara & Pap",
        category: "Breakfast",
        time: "30 mins",
        serving: "8-10 servings",
        mealImage: "/assets/recipe-imgs/pap-img.png",
        id: "akara-and-pap",
    },
    {
        bgImage: "/assets/recipe-imgs/jollof-rice-bg.png",
        title: "Jollof Rice",
        category: "Main Dish",
        time: "45 mins",
        serving: "6 servings",
        mealImage: "/assets/recipe-imgs/jollof-rice-img.png",
        id: "jollof-rice",
    },
]
