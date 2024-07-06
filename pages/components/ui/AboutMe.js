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
        <MotionFlex
            direction="column"
            align="center"
            py={5}
            bg={bgColor}
            color={textColor}
            borderRadius="lg"
            boxShadow="xl"
            initial="initial"
            animate="animate"
            whileHover="hover"
            layout
        >
            <Box mb={4} mt={-12}>
                <ChakraImage
                    borderRadius="full"
                    boxSize="150px"
                    src="/oriwave.png"
                    alt="Your Name"
                    boxShadow="2xl"
                />
            </Box>
            <Text fontSize="xl" fontWeight="bold">Ansh Patel</Text>
            <Text fontSize="md" textAlign="center" px={3}>
                Passionate Software Engineer | Tech Innovator | Student
            </Text>
            <Button mt={5} colorScheme="yellow" onClick={handleConnectClick}>Connect with Me</Button>
        </MotionFlex>
    );
};

export default AboutMe;
