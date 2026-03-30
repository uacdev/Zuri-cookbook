import { motion } from 'motion/react'
import { Flex, Image } from "@chakra-ui/react"

interface Flavour {
    title: string
    subtext: string
    seasoningImage: string
    bgText: string
    color: string
}


const Flavours: Flavour[] = [
    {
        title: 'Zuri Chicken',
        subtext: 'Zuri Beef Flavour offers a deep, savory taste that enhances your dishes. It brings the satisfying essence of slow-cooked beef in a convenient seasoning, perfect for soups, stews, sauces, and hearty meals.',
        seasoningImage: '/assets/seasoning-imgs/zuri-chicken.png',
        bgText: '/assets/seasoning-imgs/zuri-chicken-bg.png',
        color: '#685400'
    },
    {
        title: 'Zuri Jollof',
        subtext: 'Experience the taste of West Africa with Zuri Jollof Flavour. This blend of rich tomato, warm spices, and smoky notes recreates the comforting essence of classic jollof rice, ideal for rice dishes, stews, and grilled chicken.',
        seasoningImage: '/assets/seasoning-imgs/zuri-jollof.png',
        bgText: '/assets/seasoning-imgs/zuri-jollof-bg.png',
        color: '#490101'
    },
    {
        title: 'Zuri Beef',
        subtext: 'Explore our curated recipes that highlight the rich flavor of Zuri Chicken. From quick meals to family favorites and special occasion dishes, we make it easy to create meals everyone will enjoy.',
        seasoningImage: '/assets/seasoning-imgs/zuri-beef.png',
        bgText: '/assets/seasoning-imgs/zuri-beef-bg.png',
        color: '#573000'
    },
    {
        title: 'Zuri Classic',
        subtext: 'A balanced blend of herbs and spices enhances every ingredient. Zuri Classic Seasoning adds a warm touch to chicken, vegetables, and rice without overpowering their natural flavors.',
        seasoningImage: '/assets/seasoning-imgs/zuri-classic.png',
        bgText: '/assets/seasoning-imgs/zuri-classic-bg.png',
        color: '#053201'
    }
]
const tilts = [1.5, -2, 2.5, -1]
const rotation = ['-3deg', '3deg', '-3deg', '3deg']


export const ZuriStack = () => {
    return (
        <div style={{ height: `${Flavours.length * 70}vh`, width: '1130px', position: "relative" }}>
            {Flavours.map((spice, index) => (
                <motion.div
                    key={spice.title}
                    style={{
                        position: "sticky",
                        top: "60px",
                        zIndex: index + 1,
                        height: "630px",
                        width: "100%",
                        maxWidth: "1120px",
                        margin: "0 auto",
                        borderRadius: "20px",
                        background: spice.color,
                        rotate: tilts[index],
                        overflow: "hidden",
                        display: "flex",
                        alignItems: 'end',
                        padding: "80px",
                        gap: "32px",
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

                    <Image src={spice.bgText} style={{
                        position: "absolute",
                        top: -30,
                        insetInline: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        rotate: rotation[index]
                    }} />

                    <Flex className='z-10 justify-end items-end flex-1 text-white'>
                        <div>
                            <h2 style={{ fontSize: "64px", fontWeight: 800, margin: "0 0 " }}>{spice.title}</h2>
                            <p style={{ fontSize: "18px", color: '#F2EDE8', lineHeight: '28px', maxWidth: "457px" }}>{spice.subtext}</p>
                            <button style={{
                                marginTop: "20px",
                                padding: "8px 20px",
                                borderRadius: "999px",
                                border: "1px solid rgba(255,255,255,0.4)",
                                background: "white",
                                color: '#5D3002',
                                fontSize: "16px",
                                cursor: "pointer",
                            }}>
                                See Recipes →
                            </button>
                        </div>
                        <img
                            src={spice.seasoningImage}
                            className="w-[385px] h-full lg:h-[390px] object-contain flex-shrink-0 ml-auto"
                        />
                    </Flex>
                </motion.div>
            ))}
        </div>
    )
}