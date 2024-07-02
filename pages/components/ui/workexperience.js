import { Box, VStack, Flex, Text, Image as ChakraImage, useColorModeValue } from "@chakra-ui/react";
import samsungLogo from "../../../public/samsunglogo.png";
import djlogo from "../../../public/djlogo.jpeg";
const WorkExperience = () => {
    const experiences = [
        {
            id: 1,
            company: "Dow Jones",
            role: "Software Engineer Intern",
            duration: "June 2024 - Present",
            logo: djlogo,
            description: "Machine Learning and AI for News Automation."
        },
        {
            id: 2,
            company: "Samsung",
            role: "Software Engineer Intern",
            duration: "June 2023 - August 2023",
            logo: "../../../public/samsunglogo.png",
            description: "Worked on SmartHome platform, SmartThings developing a network topology tool for IoT devices."
        },
        // Additional experiences can be added here
    ];

    const timelineColor = useColorModeValue("yellow.500", "yellow.300");
    const boxBg = useColorModeValue("yellow.500", "yellow.300");
    const textColor = useColorModeValue("black", "black");

    return (
        <Box position="relative" width="full" py={5} px={2}>
            <Flex direction="column" align="flex-start" position="relative">
                {/* Vertical Line */}
                <Box position="absolute" left="30px" width="2px" bg={timelineColor} height="full" zIndex={0} />

                {experiences.map(exp => (
                    <Flex key={exp.id} width="full" direction="row" py={4} align="center">
                        <Box position="relative" width="60px" height="60px" flexShrink={0}>
                            <ChakraImage
                                src={exp.logo}
                                boxSize="50px"
                                objectFit="cover"
                                borderRadius="full"
                                position="relative"
                                zIndex={2} // Ensure the logo is above the line
                            />
                        </Box>
                        <Box flex="1" bg={boxBg} p={4} marginLeft="20px" borderRadius="md" color={textColor} boxShadow="md">
                            <Text fontWeight="bold" fontSize="lg">{exp.role} at {exp.company}</Text>
                            <Text fontSize="sm">{exp.duration}</Text>
                            <Text fontSize="sm">{exp.description}</Text>
                        </Box>
                    </Flex>
                ))}
            </Flex>
        </Box>
    );
};

export default WorkExperience;
