import { useState } from "react"
import { Box, Image, Stack, Text, VStack, HStack, Input, Textarea, Button, Flex } from "@chakra-ui/react"
import { Toaster, toaster } from "../components/ui/toaster"
import { Checkbox } from "../components/ui/checkbox"
import { submitContactForm } from "../service/contentService"
import contactImg from "../assets/contact.png"
import mail from "../assets/icons/email.png"
import location from "../assets/icons/location.png"
import phoneIcon from "../assets/icons/phone.png"


const Contact = () => {
    const [country, setCountry] = useState('NG')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [agreed, setAgreed] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !message || !agreed) {
            toaster.create({
                title: `Please fill all required fields.`,
                type: "warning",
            })
            return;
        }

        setLoading(true);

        const prefix = phonePlaceholders[country]?.split(' ')[0] || '';
        const fullPhone = phone ? `${prefix}${phone}` : '';

        const payload = {
            firstName,
            lastName,
            email,
            phoneNumber: fullPhone,
            message
        };

        const res = await submitContactForm(payload);

        if (res?.error) {
            const detailMsg = res.error.details?.message || res.error.message || "Unknown error";
            const invalidField = res.error.details?.key ? ` (Field: ${res.error.details.key})` : '';
            toaster.create({
                title: `Failed to submit form`,
                description: `${detailMsg}${invalidField}`,
                type: "error",
            })
        } else {
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhone('');
            setMessage('');
            setAgreed(false);
            toaster.create({
                title: `Thank you! Your message has been sent successfully.`,
                type: "success",
            })
        }
        setLoading(false);
    };
    const phonePlaceholders: Record<string, string> = {
        'NG': '+234 803 123 0015',
        'US': '+1 555 123 4567',
        'GB': '+44 7911 123456',
        'CA': '+1 604 123 4567',
    }

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
            icon: phoneIcon,
            title: "Phone",
            description: "+234 803 123 0015"
        }
    ]
    return (
        <>
            <Toaster />
            <Box className="bg-[#FFFFFF] flex items-center justify-center py-12 px-4 gap-8" flexDirection={{ base: 'column', lg: 'row' }}>
                <Stack>
                    <Text className="urbanist text-[#1A1A2E] text-[36px] font-bold">
                        Get in Touch
                    </Text>
                    <Text className="urbanist text-[#475467] text-[20px] font-medium">
                        Our friendly team would love to hear from you.
                    </Text>

                    <form style={{ marginTop: '32px' }} onSubmit={handleSubmit}>
                        <VStack gap={6} align="stretch" w={{ base: 'full', lg: '480px' }}>
                            <HStack gap={6} flexDirection={{ base: 'column', md: 'row' }} align="stretch">
                                <Box flex={1}>
                                    <Text className="urbanist text-[#344054] text-sm font-medium mb-1.5">First name</Text>
                                    <Input
                                        placeholder="First name"
                                        value={firstName}
                                        onChange={e => setFirstName(e.target.value)}
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
                                        value={lastName}
                                        onChange={e => setLastName(e.target.value)}
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
                                    placeholder="you@email.com"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
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
                                    <Box position="relative" h="full" display="flex" alignItems="center" borderRight="1px solid #D0D5DD">
                                        <select
                                            className="w-[80px] pl-3 pr-6 h-full urbanist text-[#101828] text-base font-medium bg-transparent outline-none appearance-none cursor-pointer border-none"
                                            value={country}
                                            onChange={(e: any) => setCountry(e.target.value)}
                                            style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                                        >
                                            <option value="NG">NG</option>
                                            <option value="US">US</option>
                                            <option value="GB">GB</option>
                                            <option value="CA">CA</option>
                                        </select>
                                        <Box as="span" position="absolute" right={3} color="#667085" fontSize="10px" pointerEvents="none">▼</Box>
                                    </Box>
                                    <Input
                                        type="tel"
                                        placeholder={phonePlaceholders[country] || phonePlaceholders['NG']}
                                        value={phone}
                                        onChange={e => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
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
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
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
                                    checked={agreed}
                                    onCheckedChange={() => setAgreed(!agreed)}
                                />
                                <Text className="urbanist text-[#475467] text-base">
                                    I hereby consent to the processing of my personal data in compliance with the Nigeria Data Protection Act, 2023, and declare my agreement with UAC Foods Limited's Data Privacy and Protection Policy.
                                </Text>
                            </HStack>

                            <Button
                                type="submit"
                                bg="#FF0101"
                                color="white"
                                h="48px"
                                borderRadius="8px"
                                fontSize="16px"
                                fontWeight="600"
                                _hover={{ bg: '#CC0000' }}
                                disabled={!agreed || loading}
                                loading={loading}
                                loadingText='Submitting...'
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