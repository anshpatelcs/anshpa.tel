import Head from 'next/head';
import {
    Box,
    Button,
    Heading,
    HStack,
    Text,
    useColorMode,
    useColorModeValue,
    Image as ChakraImage,
    VStack
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import wave from "../public/oriwave.png";
import WorkExperience from "./components/ui/workexperience";

const buttonHover = {
    hover: {
        borderBottom: "2px solid #0F78A2",
    },
};

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

export default function Home() {
    const { colorMode, toggleColorMode } = useColorMode();
    const textColor = useColorModeValue("black", "white");
    const bgColor = useColorModeValue("white", "gray.800");
    const subTextColor = useColorModeValue("gray.500", "gray.400");

    const introText = "Hi, I'm Ansh";
    const roleText = "Software Engineer";
    const bioText = "Currently a computer science student at the University of Minnesota.";

    return (
        <Box bg={bgColor} color={textColor} minHeight="100vh" py={4} px={{base: "7", md: "60"}}>
            <Box top={0} left={0} width={"100%"} zIndex={1}>
                <HStack justifyContent={"space-between"}>
                    <Heading fontSize={"30px"}>
                        <Button backgroundColor={"transparent"} onClick={toggleColorMode} _hover={{ bg: "transparent" }} fontSize={"30px"}>
                            AP
                        </Button>
                    </Heading>
                    <HStack>
                        <Button color={textColor} backgroundColor={"transparent"} _hover={{ bg: "transparent" }} borderRadius={"100px"} onClick={() => window.open("https://umn.lol")}>
                            <Text as={motion.div} variants={buttonHover} whileHover="hover">
                                About Me
                            </Text>
                        </Button>
                        <Button color={textColor} backgroundColor={"transparent"} _hover={{ bg: "transparent" }} borderRadius={"100px"} onClick={() => window.open("https://umn.lol")}>
                            <Text as={motion.div} variants={buttonHover} whileHover="hover">
                                Projects
                            </Text>
                        </Button>
                        <Button color={textColor} backgroundColor={"transparent"} _hover={{ bg: "transparent" }} borderRadius={"100px"}>
                            <Text as={motion.div} variants={buttonHover} whileHover="hover">
                                <a href="https://www.linkedin.com/in/anshmpatel/" target="_blank" rel="noreferrer">LinkedIn</a>
                            </Text>
                        </Button>
                        <Button color={textColor} backgroundColor={"transparent"} _hover={{ bg: "transparent" }} borderRadius={"100px"}>
                            <Text as={motion.div} variants={buttonHover} whileHover="hover">
                                <a href="https://github.com/anshpatelcs" target="_blank" rel="noreferrer">GitHub</a>
                            </Text>
                        </Button>
                        <Button
                            color={"white"}
                            onClick={() => {
                                try {
                                    const link = document.createElement('a');
                                    link.href = '../public/resume_ansh.pdf';  // Make sure this is the correct path to your file
                                    link.download = 'Ansh_Patel_Resume.pdf';  // This is the filename that will be suggested to download
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                } catch (error) {
                                    console.error('Error downloading the file: ', error);
                                    alert('Failed to download the file.');
                                }
                            }}
                            borderRadius={"100px"}
                            backgroundColor={"#33A2F1"}
                            _hover={{
                                borderBottom: "2px solid #FFF",
                                transition: "0.3s",
                            }}
                        >
                            Resume
                        </Button>
                    </HStack>
                </HStack>
            </Box>

            <Box paddingTop={{base: "10", md: "20"}}>
                <HStack justifyContent={"space-between"} overflowWrap={"normal"} wrap={{ base: "wrap", md: "nowrap" }}>
                    <Box display={"flex"} flexDirection={"column"} minHeight={"100vh"} w={{ base: "100%", md: "50%" }} marginTop={100} marginBottom={{base:"-450", md: "0"}}>
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
                    </Box>
                    <Box
                        display="flex"
                        w={{ base: "100%", md: "50%" }}
                        position="relative"
                        height="110vh" // This ensures the box takes the full height of the viewport
                        overflow="hidden"
                        marginTop={{ base: 0, md: -100 }}
                    >                        <motion.div whileHover="hover" variants={imageHover}>
                            <ChakraImage
                                src={wave.src}
                                alt="Origami Wave"
                                width="100%"
                                height="auto" // Maintains aspect ratio
                                minHeight="300px" // Minimum size to prevent it from becoming too small
                                maxWidth="100%" // Ensures it does not stretch beyond its container
                                objectFit="contain"
                            />
                        </motion.div>
                    </Box>

                </HStack>
                <Box>
                    <WorkExperience/>
                </Box>
            </Box>
        </Box>
    );
}
