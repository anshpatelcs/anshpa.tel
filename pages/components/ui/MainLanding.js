import React from 'react';
import { Box, Button, HStack, Image as ChakraImage, Text, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { css, keyframes } from "@emotion/react";

const fadeInEffect = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
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

const buttonHover = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const MainLanding = ({ textColor, subTextColor }) => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    const introText = "Hi, I'm Ansh";
    const roleText = "Software Engineer";
    const bioText = "Currently a computer science student at the University of Minnesota.";

    return (
        <HStack
            justifyContent={"space-between"}
            overflowWrap={"normal"}
            wrap={{ base: "wrap", md: "nowrap" }}
            mt={{ base: 16, md: 20 }} // Adjust the margin-top to create spacing
        >
            <Box display={"flex"} flexDirection={"column"} minHeight={"100vh"} w={{ base: "100%", md: "50%" }} marginTop={100} marginBottom={{ base: "-200", md: "0" }}>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInEffect}
                >
                    <Text fontSize={{ base: "65px", md: "80px" }} fontWeight="bold" color="#33A2F1" marginBottom="-4">
                        {introText}
                    </Text>
                    <Text fontSize={{ base: "40px", md: "50px" }} fontWeight="bold">
                        {roleText}
                    </Text>
                    <Text fontSize="23px" color={subTextColor}>
                        {bioText}
                    </Text>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInEffect}
                >
                    <Button
                        color="white"
                        onClick={() => {
                            try {
                                const link = document.createElement('a');
                                link.href = '/resume.pdf';
                                link.download = 'Ansh_Patel_Resume.pdf';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            } catch (error) {
                                console.error('Error downloading the file: ', error);
                                alert('Failed to download the file.');
                            }
                        }}
                        borderRadius="4px"
                        backgroundColor={isDark ? "#2D3748" : "#F6E05E"}
                        css={css`
                            background: ${isDark ? 'linear-gradient(270deg, #0F78A2, #63B3ED)' : 'linear-gradient(270deg, #F6E05E, #ECC94B)'};
                            background-size: 200% 200%;
                            transition: background-position 0.5s ease-in-out;
                        `}
                        _hover={{
                            animation: `${buttonHover} 1s forwards`,
                        }}
                        borderWidth={5}
                        borderColor={isDark ? "#0F78A2" : "#ECC94B"}
                        width="100px"
                        marginTop="20px"
                    >
                        Resume
                    </Button>
                </motion.div>
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
