import { Box, Breadcrumb, Button, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { LuClock, LuShare2, LuUsers } from "react-icons/lu";

export default function RecipePage() {
    return (
        <>
            <Flex position={'relative'} px={'68px'} align={'end'} bg={'url(/assets/recipe-imgs/img/jollof-rice.png)'} bgSize={'cover'} h={'500px'} pb={12} backgroundPosition={'center'} bgRepeat={'no-repeat'}>
                <Box zIndex={'modal'}>
                    <Breadcrumb.Root >
                        <Breadcrumb.List>
                            <Breadcrumb.Item color={'#FFFFFFB2'}>
                                <Breadcrumb.Link color={'#FFFFFFB2'} href="/">
                                    Home
                                </Breadcrumb.Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Separator color={'#FFFFFFB2'} />
                            <Breadcrumb.Item color={'#FFFFFFB2'}>
                                <Breadcrumb.Link color={'#FFFFFFB2'} href="/recipes">
                                    Recipes
                                </Breadcrumb.Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Separator color={'#FFFFFFB2'} />
                            <Breadcrumb.Item><Breadcrumb.CurrentLink color={'white'}>Jollof Rice</Breadcrumb.CurrentLink></Breadcrumb.Item>
                        </Breadcrumb.List>
                    </Breadcrumb.Root>
                    <Heading mt={4} mb={6} lineHeight={'70px'} fontSize={'56px'} fontWeight={'bold'} color={'white'}>Classic Nigerian Jollof Rice</Heading>
                    <Flex color={'white'} align={'center'}>
                        <LuClock /> <Text fontSize={"14px"} ml={1} mr={4}>45 mins</Text>
                        <LuUsers /> <Text fontSize={"14px"} ml={1}> 6 servings</Text>
                        <Text ml={4} fontSize={"14px"}>⚡ Medium</Text>
                        <FaStar className="ml-4 mr-1" color="#FDC700" />
                        <Text fontSize={"14px"}>4.8 (280 reviews)</Text>
                    </Flex>
                    <Button mt={6} border={'1px solid #FFFFFF80'} fontSize={'14px'} color={'white'} rounded={'12px'} px={'17px'}><LuShare2 size={14} /> Share</Button>
                </Box>
                <Box w={'full'} h={'full'} position={'absolute'} inset={0} className="bg-[linear-gradient(0deg,rgba(26,26,46,0.8)_0%,rgba(26,26,46,0.4)_50%,rgba(0,0,0,0)_100%)]" />

            </Flex>
            <Flex bg={'white'}>
                <Box>
                    <Text maxW={'798px'} mb={12}>The crown jewel of West African cuisine, this Jollof Rice recipe delivers perfectly cooked grains infused with a rich tomato base and aromatic spices. Using Zuri Chicken Seasoning ensures authentic flavor in every bite, whether you're cooking for a special celebration or a comforting family dinner. This recipe has been perfected over generations and tested by thousands of home cooks.</Text>
                    <Box>
                        <HStack justify={'space-between'}>
                            <Text color={'#CC0000'} fontSize={'14px'} letterSpacing={'3px'} fontWeight={'medium'} textTransform={'uppercase'}>Ingredients</Text>
                            <HStack bg={'#F2EDE8'} p={4}></HStack>
                        </HStack>
                    </Box>
                </Box>

            </Flex>
        </>
    )
}