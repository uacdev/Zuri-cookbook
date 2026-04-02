import { Box } from "@chakra-ui/react"
import type { BoxProps } from "@chakra-ui/react"

interface BgIllustrationProps extends BoxProps {
    illustration?: string
}

export const BgIllustration = ({
    illustration = "/assets/seasoning-imgs/seasoning-bg-illustration.png",
    ...props
}: BgIllustrationProps) => {
    return (
        <Box
            bgImage={`url(${illustration})`}
            bgRepeat="no-repeat"
            bgSize="cover"
            inset={0}
            position="absolute"
            pointerEvents="none"
            {...props}
        />
    )
}
