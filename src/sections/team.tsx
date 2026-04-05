import { Box, VStack, HStack, Text, Image, Flex, Stack, Center } from "@chakra-ui/react"
import { DialogRoot, DialogTrigger, DialogContent, DialogCloseTrigger, DialogBody } from "../components/ui/dialog"
import { useEffect, useState } from "react"
import { fetchManagementTeam, type ManagementTeamMember } from "../service/contentService"
import { ImSpinner } from "react-icons/im"

export const Team = () => {
    const [team, setTeam] = useState<ManagementTeamMember[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadTeam = async () => {
            try {
                const data = await fetchManagementTeam()
                setTeam(data)
            } catch (error) {
                console.error("Failed to fetch team members:", error)
            } finally {
                setLoading(false)
            }
        }
        loadTeam()
    }, [])

    return (
        <Box className="py-10 px-4 max-w-[1280px] mx-auto">
            <VStack>
                <Text className="text-[36px] text-[#1A1A2E] font-bold text-center">
                    The People Behind the Flavour
                </Text>
                <Text className="inter text-[20px] text-[#475467] text-center">
                    A passionate team dedicated to bringing authentic Nigerian flavors to every kitchen.
                </Text>
            </VStack>

            {loading ?
                (
                    <Center py={10} className="flex-col gap-2">
                        <ImSpinner size={40} className="animate-spin text-[#CC0000]" />
                        <Text className="text-light text-[#1A1A2E] text-xs">Loading Management Team...</Text>
                    </Center>
                ) : (
                    <HStack justify={'center'} gap={4} py={10} flexDirection={{ base: 'column', lg: 'row' }} flexWrap={'wrap'}>
                        {team.map((member) => (
                            <DialogRoot key={member.id} size={{ base: "cover", lg: "xl" }} scrollBehavior="inside" placement="center">
                                <DialogTrigger asChild>
                                    <Box className="bg-white p-4 rounded-[12px] w-full lg:w-[287.4px] h-auto lg:h-[250px] flex items-center justify-center cursor-pointer hover:shadow-sm transition-all" >
                                        <VStack gap={0}>
                                            <Image src={member.image} alt={member.fullName} className="w-[150px] h-[150px] rounded-full" />
                                            <Text className="uppercase urbanist text-[#101828] font-bold mt-4 text-center">{member.fullName}</Text>
                                            <Text className="uppercase inter text-[#CC0000] text-center">{member.role}</Text>
                                        </VStack>
                                    </Box>
                                </DialogTrigger>
                                <DialogContent bg='white' w='full' maxW='1100px' p={0} mt='5rem' h='auto'>
                                    <DialogBody p={{ base: 6, lg: 10 }} overflowY="auto">
                                        <Flex direction={{ base: 'column', lg: 'row' }} gap={10} align={{ base: 'center', lg: 'start' }}>
                                            <Image src={member.image} alt={member.fullName} className="w-full lg:w-[30%] h-auto" />
                                            <Box w={{ base: 'full', lg: '70%' }}>
                                                <Stack>
                                                    <Text className="urbanist text-[#101828] font-bold text-[24px] uppercase">{member.fullName}</Text>
                                                    <Text className="inter text-[#CC0000] font-semibold uppercase">{member.role}</Text>
                                                    <Text
                                                        className="inter text-[#1A1A2E] text-[18px] font-light leading-relaxed"
                                                        dangerouslySetInnerHTML={{ __html: member.bio }}
                                                    />
                                                </Stack>
                                            </Box>
                                        </Flex>
                                    </DialogBody>
                                    <DialogCloseTrigger />
                                </DialogContent>
                            </DialogRoot>
                        ))}
                    </HStack>
                )
            }
        </Box>
    )
}