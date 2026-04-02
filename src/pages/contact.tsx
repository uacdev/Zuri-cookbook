import { Box, Image, Stack, Text, VStack, HStack, Input, Textarea, Button, Flex } from "@chakra-ui/react"
import { Checkbox } from "../components/ui/checkbox"
import { Link } from "react-router"
import contactImg from "../assets/contact.png"
import mail from "../assets/icons/email.png"
import location from "../assets/icons/location.png"
import phone from "../assets/icons/phone.png"


const Contact = () => {
    const contactdetails = [
        {
            icon: mail,
            title: "Email",
            description: "uacfcare@uacfoodsng.com"
        },
        {
            icon: location,
            title: "Office",
            description: "Km 16, Ikorodu Road, Ojota, P.O. Box 177, Lagos"
        },
        {
            icon: phone,
            title: "Phone",
            description: "+234 803 123 0015"
        }
    ]
    return (
        <>
            <Box className="bg-[#FFFFFF] flex items-center justify-center py-12 px-4 gap-8" flexDirection={{ base: 'column', lg: 'row' }}>
                <Stack>
                    <Text className="urbanist text-[#1A1A2E] text-[36px] font-bold">
                        Get in Touch
                    </Text>
                    <Text className="urbanist text-[#475467] text-[20px] font-medium">
                        Our friendly team would love to hear from you.
                    </Text>

                    <form style={{ marginTop: '32px' }}>
                        <VStack gap={6} align="stretch" w={{ base: 'full', lg: '480px' }}>
                            <HStack gap={6} flexDirection={{ base: 'column', md: 'row' }} align="stretch">
                                <Box flex={1}>
                                    <Text className="urbanist text-[#344054] text-sm font-medium mb-1.5">First name</Text>
                                    <Input
                                        placeholder="First name"
                                        className="urbanist"
                                        h="44px"
                                        borderRadius="8px"
                                        border="1px solid #D0D5DD"
                                        px={2}
                                        _placeholder={{ color: '#667085' }}
                                    />
                                </Box>
                                <Box flex={1}>
                                    <Text className="urbanist text-[#344054] text-sm font-medium mb-1.5">Last name</Text>
                                    <Input
                                        placeholder="Last name"
                                        className="urbanist"
                                        h="44px"
                                        borderRadius="8px"
                                        border="1px solid #D0D5DD"
                                        px={2}
                                        _placeholder={{ color: '#667085' }}
                                    />
                                </Box>
                            </HStack>

                            <Box>
                                <Text className="urbanist text-[#344054] text-sm font-medium mb-1.5">Email</Text>
                                <Input
                                    type="email"
                                    placeholder="you@company.com"
                                    className="urbanist"
                                    h="44px"
                                    borderRadius="8px"
                                    border="1px solid #D0D5DD"
                                    px={2}
                                    _placeholder={{ color: '#667085' }}
                                />
                            </Box>

                            <Box>
                                <Text className="urbanist text-[#344054] text-sm font-medium mb-1.5">Phone number</Text>
                                <HStack gap={0} border="1px solid #D0D5DD" borderRadius="8px" h="44px" overflow="hidden">
                                    <Box px={3} borderRight="1px solid #D0D5DD" h="full" display="flex" alignItems="center">
                                        <Text className="urbanist text-[#101828] text-base">US</Text>
                                        <Box as="span" ml={1} color="#667085">▼</Box>
                                    </Box>
                                    <Input
                                        placeholder="+1 (555) 000-0000"
                                        className="urbanist"
                                        variant="outline"
                                        h="full"
                                        px={3}
                                        _placeholder={{ color: '#667085' }}
                                    />
                                </HStack>
                            </Box>

                            <Box>
                                <Text className="urbanist text-[#344054] text-sm font-medium mb-1.5">Message</Text>
                                <Textarea
                                    placeholder="Leave us a message..."
                                    className="urbanist"
                                    borderRadius="8px"
                                    border="1px solid #D0D5DD"
                                    minH="128px"
                                    p={2}
                                    _placeholder={{ color: '#667085' }}
                                />
                            </Box>

                            <HStack align="start" gap={3}>
                                <Checkbox
                                    className="mt-1 !bg-transparent w-[20px] h-[22px] rounded-[6px] border-[1px] border-[#D0D5DD] cursor-pointer"
                                />
                                <Text className="urbanist text-[#475467] text-base">
                                    You agree to our friendly <Link to="/privacy" className="underline">privacy policy</Link>.
                                </Text>
                            </HStack>

                            <Button
                                bg="#FF0101"
                                color="white"
                                h="48px"
                                borderRadius="8px"
                                fontSize="16px"
                                fontWeight="600"
                                _hover={{ bg: '#CC0000' }}
                            >
                                Send message
                            </Button>
                        </VStack>
                    </form>
                </Stack>
                <Image src={contactImg} alt="contact image" />
            </Box>

            <Box className="py-8 lg:py-20 max-w-[1152px] mx-auto">
                <Flex justify={'space-around'} flexDirection={{ base: 'column', lg: 'row' }} gap={10}>
                    {contactdetails.map((item, index) => (
                        <VStack
                            key={index}
                            cursor={'pointer'}
                            onClick={() => {
                                if (item.title === "Email") {
                                    window.location.href = `mailto:${item.description}`;
                                } else if (item.title === "Office") {
                                    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.description)}`, '_blank');
                                } else if (item.title === "Phone") {
                                    window.location.href = `tel:${item.description.replace(/\s+/g, '')}`;
                                }
                            }}
                            _hover={{ opacity: 0.8 }}
                            transition="opacity 0.2s"
                        >
                            <Image src={item.icon} alt={item.title} />
                            <Text className="text-sm text-[#101828] font-bold">{item.title}</Text>
                            <Text className="text-xs text-[#CC0000] font-bold">{item.description}</Text>
                        </VStack>
                    ))}
                </Flex>
            </Box>
        </>
    )
}
export default Contact