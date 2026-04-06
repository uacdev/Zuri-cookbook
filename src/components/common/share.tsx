import { useRef, useState } from "react";
import { useLocation } from "react-router";
import { Button, Popover, HStack, Portal } from "@chakra-ui/react";
import { LuShare2 } from "react-icons/lu";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaLink, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { PopoverRoot, PopoverTrigger, PopoverContent } from "../ui/popover";

export const ShareButton = ({ recipeName }: { recipeName?: string }) => {
    const location = useLocation();
    const [copied, setCopied] = useState(false);

    const generateUrl = () => {
        const url = new URL(window.location.href);
        url.searchParams.set("medium", location.state?.medium || "share");
        return url.toString();
    };

    const handleCopy = () => {
        const url = generateUrl();
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2500);
    };

    const ref = useRef<HTMLButtonElement | null>(null);
    const sharedUrl = generateUrl();
    const shareMessage = `Check out this recipe for ${recipeName} I found on Zuri Cookbook! ${sharedUrl}`

    return (
        <PopoverRoot positioning={{ placement: 'bottom-end' }}>
            <PopoverTrigger asChild>
                <Button className="bg-transparent border border-[#FFFFFF80] rounded-[12px] font-medium text-white no-print w-[97px] mt-5">
                    <LuShare2 />
                    Share
                </Button>
            </PopoverTrigger>
            <Portal>
                <Popover.Positioner>
                    <PopoverContent
                        w='auto'
                        boxShadow="sm"
                        p={1} bg='white'
                    >
                        <HStack gap={0}>
                            <Button
                                variant="ghost"
                                onClick={handleCopy}
                            >
                                {copied ? "copied!" : <FaLink />}
                            </Button>

                            <Button
                                asChild
                                ref={ref}
                                variant="ghost"
                            >
                                <a
                                    href={`https://wa.me/?text=${encodeURIComponent(shareMessage)}`}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <BsWhatsapp color="#128C7E" />
                                </a>
                            </Button>

                            <Button
                                asChild
                                ref={ref}
                                variant="ghost"
                            >
                                <a
                                    href={`https://t.me/share/url?url=${encodeURIComponent(shareMessage)}`}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <FaTelegramPlane color='#24A1DE' />
                                </a>
                            </Button>

                            <Button
                                asChild
                                ref={ref}
                                variant="ghost"
                            >
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareMessage)}`}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <FaFacebookF color="#3b5998" />
                                </a>
                            </Button>

                            <Button
                                asChild
                                ref={ref}
                                variant="ghost"
                                onClick={handleCopy}
                            >
                                <a href={`https://www.instagram.com/direct/new`}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <BsInstagram color='#E1306C' />
                                </a>
                            </Button>

                            <Button
                                asChild
                                ref={ref}
                                variant="ghost"
                            >
                                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}`}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <FaXTwitter color="black" />
                                </a>
                            </Button>
                        </HStack>
                    </PopoverContent>
                </Popover.Positioner>
            </Portal>
        </PopoverRoot>
    )
}