import { Link } from "react-router";
import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react"
import z from "../assets/z-square.png";
import { FaAngleRight } from "react-icons/fa";

export const SeasoningUsed = ({ seasoning }: { seasoning: string }) => {
    return (
        <Box className="p-5 my-14 rounded-[12px] border-transparent border-l-4 border-l-[#FF0101] bg-[#F2EDE8]">
            <HStack align={'start'} gap={6}>
                <Image src={z} alt="Z" />
                <Stack gap={0}>
                    <Text className="text-[#1A1A2E] text-[28px] lg:text-[32px] font-semibold">
                        This recipe uses: {seasoning} Seasoning
                    </Text>
                    <Text className="text-[#6B6B7A] text-sm">
                        Perfectly balanced blend of herbs and spices designed for poultry and rice dishes.
                    </Text>
                    <Link to='/recipes' className="no-print flex items-center gap-1 text-[#FF0101] font-medium text-sm mt-5">
                        Shop {seasoning}
                        <FaAngleRight />
                    </Link>
                </Stack>
            </HStack>
        </Box>
    )
}