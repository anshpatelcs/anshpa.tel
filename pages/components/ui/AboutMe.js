import { Box, Flex, Text, Image as ChakraImage, useColorModeValue, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);

const AboutMe = () => {
    const bgColor = useColorModeValue("blue.500", "#2D3748");
    const textColor = useColorModeValue("white", "gray.200");

    const variants = {
        initial: { scale: 0 },
        animate: { scale: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } },
        hover: { scale: 1.1, transition: { type: 'spring', stiffness: 300 } }
    };

    // Function to handle click event
    const handleConnectClick = () => {
        window.open("https://www.linkedin.com/in/anshmpatel/", "_blank"); // Replace 'your-linkedin-id' with your actual LinkedIn ID
    };

    return (
        <Box
            direction="column"
            align="center"
            py={5}
            bg={bgColor}
            color={textColor}
            borderRadius="lg"
            boxShadow="xl"
            _hover={{ opacity: "1.0", transform: "scale(1.01)" }}
            transition="all 0.2s ease-in-out"
        >
            <Box mb={4} mt={-8}>
                <ChakraImage
                    borderRadius="full"
                    boxSize="150px"
                    src="/anshpatel.png"
                    alt="Ansh Patel"
                    boxShadow="2xl"
                />
            </Box>
            <Text fontSize="xl" fontWeight="bold">Ansh Patel</Text>
            <Text fontSize="md" textAlign="justify" justifyContent="space-between" px={8} py={2}>
                Hi there 👋 I&apos;m Ansh Patel, a Computer Science student at the University of Minnesota with a passion for software engineering.
                As an aspiring developer, I&apos;m always seeking out new challenges to build upon my skills, often through hackathons and personal projects.
                When I&apos;m not coding, I enjoy playing and watching sports, traveling to new places, and exploring different cultures.
            </Text>
            <Button mt={2} colorScheme="yellow" onClick={handleConnectClick}>Connect with Me</Button>
        </Box>
    );
};

export default AboutMe;
