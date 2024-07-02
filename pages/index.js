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
        <Box bg={bgColor} color={textColor} minHeight="100vh">
            <Box top={0} left={0} width={"100%"} zIndex={1} py={4} px={20}>
                <HStack justifyContent={"space-between"}>
                    <Heading fontSize={"30px"}>
                        <Button backgroundColor={"transparent"} onClick={toggleColorMode} _hover={{ bg: "transparent" }} fontSize={"30px"}>
                            AP
                        </Button>
                    </Heading>
                    <HStack paddingLeft={"100px"}>
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
                        <Button color={"white"} onClick={() => window.open("https://umn.lol")} borderRadius={"100px"} backgroundColor={"black"} _hover={{
                            backgroundColor: "gray.800",
                            transition: "0.3s",
                        }}>
                            Resume
                        </Button>
                    </HStack>
                </HStack>
            </Box>

            <Box py={100} px={20}>
                <HStack>
                    <Box display={"flex"} flexDirection={"column"} minHeight={"100vh"} maxWidth={"50%"} marginTop={100}>
                        <motion.div
                            variants={typingEffect}
                            custom={0}
                            initial="hidden"
                            animate="visible"
                        >
                            {introText.split("").map((char, index) => (
                                <motion.span key={index} variants={letterAnimation} style={{ fontSize: "120px", fontWeight: "bold", color: "#ADD8E6" }}>
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
                                <motion.span key={index} variants={letterAnimation} style={{ fontSize: "30px", color: subTextColor }}>
                                    {char}
                                </motion.span>
                            ))}
                        </motion.div>
                    </Box>
                    <Box display="flex" width="50%" height="100%" marginTop={-100}>
                        <motion.div whileHover="hover" variants={imageHover}>
                            <ChakraImage src={wave.src} alt="Origami Wave" width="600px" height="600px" marginTop="-400px" />
                        </motion.div>
                    </Box>
                </HStack>
                {/*<Box>*/}
                {/*    <Box>*/}
                {/*        <Heading fontSize={"70px"} color={"#ADD8E6"} paddingBottom={5}>About Me</Heading>*/}
                {/*        <Box width={"50%"} backgroundColor={"#ADD8E6"} borderRadius={"5px"}>*/}
                {/*            <Text fontSize={"20px"} color={"black"} px={5} py={5}>I am a computer science student at the University of Minnesota. I am passionate about software development and enjoy working on projects that challenge me. I am always looking to learn new things and improve my skills. I am currently seeking internship opportunities for the summer of 2024.</Text>*/}
                {/*        </Box>*/}
                {/*    <Box>*/}
                {/*        <Box>*/}
                {/*            <Heading fontSize={"70px"} color={"#ADD8E6"}>Work Experience</Heading>*/}
                {/*            </Box>*/}
                {/*        </Box>*/}
                {/*        <HStack>*/}
                {/*            <Box display="flex" marginTop={-100}>*/}
                {/*            </Box>*/}
                {/*        </HStack>*/}
                {/*        <WorkExperience/>*/}
                {/*    </Box>*/}
                {/*</Box>*/}
            </Box>
        </Box>
    );
}
