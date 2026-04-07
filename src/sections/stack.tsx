import { useNavigate } from 'react-router'
import { motion } from 'motion/react'
import { Flex, Image, useBreakpointValue } from "@chakra-ui/react"
import { FaArrowRight } from 'react-icons/fa'

interface Flavour {
    title: string
    subtext: string
    seasoningImage: string
    bgText: string
    color: string
}

export const Flavours: Flavour[] = [
    {
        title: 'Zuri Chicken',
        subtext: 'Chicken flavour is perfect for enhancing chicken-based dishes such as jollof rice, chicken stew, chicken pepper soup, and marinades. Adds depth and savoury richness to poultry meals.',
        seasoningImage: '/assets/seasoning-imgs/zuri-chicken.png',
        bgText: '/assets/seasoning-imgs/zuri-chicken-bg.png',
        color: '#685400'
    },
    {
        title: 'Zuri Jollof',
        subtext: 'Jollof flavour is specially crafted to deliver the authentic Nigerian party jollof taste and aroma. Contains tomato powder, reducing the need for additional tomatoes while ensuring rich colour and flavour.',
        seasoningImage: '/assets/seasoning-imgs/zuri-jollof.png',
        bgText: '/assets/seasoning-imgs/zuri-jollof-bg.png',
        color: '#490101'
    },
    {
        title: 'Zuri Beef',
        subtext: 'Beef flavour is designed to complement beef dishes, including soups and stews. Provides a full-bodied, savoury taste that enhances meat-based recipes.',
        seasoningImage: '/assets/seasoning-imgs/zuri-beef.png',
        bgText: '/assets/seasoning-imgs/zuri-beef-bg.png',
        color: '#573000'
    },
    {
        title: 'Zuri Classic',
        subtext: 'Classic flavour is a versatile seasoning suitable for a wide variety of meals, including soups, stews, beans, porridge, fried rice, and pepper soup. Ideal for everyday cooking.',
        seasoningImage: '/assets/seasoning-imgs/zuri-classic.png',
        bgText: '/assets/seasoning-imgs/zuri-classic-bg.png',
        color: '#053201'
    }
];

const tilts = [1.5, -2, 2.5, -1]

export const ZuriStack = () => {
    const navigate = useNavigate();
    const isMobile = useBreakpointValue({ base: true, lg: false })
    const containerWidth = isMobile ? "95%" : "1130px"
    const containerHeight = isMobile ? `${Flavours.length * 100}vh` : `${Flavours.length * 70}vh`

    return (
        <div style={{ height: containerHeight, width: containerWidth, position: "relative", margin: "0 auto" }}>
            {Flavours.map((spice, index) => (
                <motion.div
                    key={spice.title}
                    style={{
                        position: "sticky",
                        top: isMobile ? "100px" : "150px",
                        zIndex: index + 1,
                        height: isMobile ? "auto" : "630px",
                        width: "100%",
                        maxWidth: "1120px",
                        margin: "0 auto",
                        borderRadius: "20px",
                        background: spice.color,
                        rotate: tilts[index],
                        overflow: "hidden",
                        display: "flex",
                        alignItems: isMobile ? 'center' : 'end',
                        padding: isMobile ? "40px 20px" : "80px",
                        gap: isMobile ? "20px" : "32px",
                        flexDirection: isMobile ? 'column' : 'row'
                    }}
                    initial={{ y: "40vh" }}
                    whileInView={{ y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "easeOut"
                    }}
                    viewport={{ once: true, amount: 0.1 }}
                >

                    {/* background text */}
                    <Image
                        src={spice.bgText}
                        flexShrink={0}
                        scale={isMobile ? 1.2 : 0.9}
                        insetInline={0}
                        overflow='hidden'
                        className={isMobile ? 'absolute top-0 left-0 w-full opacity-20' : 'absolute w-[100%] top-[-10px]'}
                    />

                    <Flex
                        className='z-10 text-white'
                        direction={isMobile ? 'column-reverse' : 'row'}
                        alignItems={isMobile ? 'center' : 'end'}
                        justifyContent={isMobile ? 'center' : 'end'}
                        flex={1}
                        w="full"
                        textAlign={isMobile ? 'center' : 'left'}
                    >
                        <div>
                            <h2 style={{ fontSize: isMobile ? "40px" : "64px", fontWeight: 800, margin: "0 0 " }} className='anja'>{spice.title}</h2>
                            <p style={{ fontSize: isMobile ? "16px" : "18px", color: '#F2EDE8', lineHeight: isMobile ? '24px' : '28px', maxWidth: isMobile ? "100%" : "457px" }}>{spice.subtext}</p>
                            <button className={`h-[44px] mt-[20px] px-[20px] py-[8px] rounded-[100px] border border-[rgba(255,255,255,0.4)] bg-white text-[#5D3002] font-bold flex items-center gap-2 ${isMobile ? 'mx-auto' : ''}`}
                                onClick={() => navigate(`/recipes?seasoning=${encodeURIComponent(spice.title)}`)}
                            >
                                Explore Recipes
                                <FaArrowRight />
                            </button>
                        </div>

                        <img
                            src={spice.seasoningImage}
                            className="flex-shrink-0 w-[235.94px] lg:w-[385px] h-[241.52px] lg:h-[390px] object-contain mb-[20px] lg:mb-0 ml-0 lg:ml-auto"
                        />
                    </Flex>
                </motion.div>
            ))}
        </div>
    )
}