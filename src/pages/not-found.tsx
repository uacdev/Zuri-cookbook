import { Box, Button, Center, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { PiCookingPot } from "react-icons/pi";
import { LuArrowLeft, LuSearch } from "react-icons/lu";

export default function NotFound() {
    const navigate = useNavigate()
    return (
        <Box bg="#FAF6F1" minH="70vh" py={20}>
            <Center h="full">
                <VStack gap={8} textAlign="center" maxW="600px" px={6}>
                    <PiCookingPot size={120} color="#FF0101" />

                    <VStack gap={4} px={{ base: 4, lg: 0 }}>
                        <Heading
                            fontSize={{ base: "32px", md: "48px" }}
                            color="#1A1A2E"
                            lineHeight="1.2"
                            className="anja-accent"
                        >
                            Oops! This recipe is missing.
                        </Heading>
                        <Text color="#4A4A6A" fontSize="18px">
                            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                        </Text>
                    </VStack>

                    <HStack gap={4} mt={{ base: 0, lg: 4 }} flexDirection={{ base: 'column', lg: 'row' }}>
                        <Button
                            variant="outline"
                            border="2px solid #1A1A2E"
                            color="#1A1A2E"
                            rounded="12px"
                            px={8}
                            h="50px"
                            fontWeight="bold"
                            _hover={{ bg: "#1A1A2E", color: "white" }}
                            onClick={() => navigate('/')}
                        >
                            <LuArrowLeft /> Back to Home
                        </Button>
                        <Button
                            bg="#FF0101"
                            color="white"
                            rounded="12px"
                            px={8}
                            h="50px"
                            fontWeight="bold"
                            onClick={() => navigate('/recipes')}
                        >
                            <LuSearch /> Explore Recipes
                        </Button>
                    </HStack>
                </VStack>
            </Center>
        </Box>
    );
}