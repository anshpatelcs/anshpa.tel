import React from 'react';
import { Box, Button, HStack, Text, Image as ChakraImage } from "@chakra-ui/react";
import { motion } from "framer-motion";

const typingEffect = {
    hidden: { opacity: 1 },
    visible: i => ({
        opacity: 1,
        transition: {
            delay: i * 0.1,
            staggerChildren: 0.02,
        }
    })
};

const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0
    }
};

const imageHover = {
    hover: {
        scale: 1.05, // Scales the image up by 5%
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
};

const MainLanding = ({ textColor, subTextColor }) => {
    const introText = "Hi, I'm Ansh";
    const roleText = "Software Engineer";
    const bioText = "Currently a computer science student at the University of Minnesota.";

    return (
        <HStack
            justifyContent={"space-between"}
            overflowWrap={"normal"}
            wrap={{ base: "wrap", md: "nowrap" }}
            mt={{ base: 16, md: 20 }} // Adjust the margin-top to create spacing
            pt={16} // Add padding-top to create more spacing if needed
        >
            <Box display={"flex"} flexDirection={"column"} minHeight={"100vh"} w={{ base: "100%", md: "50%" }} marginTop={100} marginBottom={{ base: "-200", md: "0" }}>
                <motion.div
                    variants={typingEffect}
                    custom={0}
                    initial="hidden"
                    animate="visible"
                >
                    {introText.split("").map((char, index) => (
                        <motion.span key={index} variants={letterAnimation} style={{ fontSize: "80px", fontWeight: "bold", color: "#33A2F1" }}>
                            {char}
                        </motion.span>
                    ))}
                </motion.div>
                <motion.div
                    variants={typingEffect}
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    style={{ marginTop: "-20px" }}
                >
                    {roleText.split("").map((char, index) => (
                        <motion.span key={index} variants={letterAnimation} style={{ fontSize: "50px", fontWeight: "bold" }}>
                            {char}
                        </motion.span>
                    ))}
                </motion.div>
                <motion.div
                    variants={typingEffect}
                    custom={2}
                    initial="hidden"
                    animate="visible"
                >
                    {bioText.split("").map((char, index) => (
                        <motion.span key={index} variants={letterAnimation} style={{ fontSize: "25px", color: subTextColor }}>
                            {char}
                        </motion.span>
                    ))}
                </motion.div>
                <Button
                    color={"white"}
                    onClick={() => {
                        try {
                            const link = document.createElement('a');
                            link.href = '/resume.pdf';  // Make sure this is the correct path to your file
                            link.download = 'Ansh_Patel_Resume.pdf';  // This is the filename that will be suggested to download
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        } catch (error) {
                            console.error('Error downloading the file: ', error);
                            alert('Failed to download the file.');
                        }
                    }}
                    borderRadius={"4px"}
                    backgroundColor={"#33A2F1"}
                    _hover={{
                        backgroundColor: "#0F78A2",
                        transition: "0.3s",
                    }}
                    width={"100px"}
                    marginTop={"20px"}
                    borderWidth={5}
                >
                    Resume
                </Button>
            </Box>
            <Box
                display="flex"
                w={{ base: "0%", md: "50%" }}
                position="relative"
                height={{ base: "60vh", md: "110vh" }}
                overflow="hidden"
                marginTop={{ base: 0, md: -100 }}
            >
                <motion.div whileHover="hover" variants={imageHover}>
                    <ChakraImage
                        src="/oriwave.png"
                        alt="Origami Wave"
                        width="100%"
                        height="auto"
                        minHeight="300px"
                        maxWidth="100%"
                        objectFit="contain"
                    />
                </motion.div>
            </Box>
        </HStack>
    );
};

export default MainLanding;
