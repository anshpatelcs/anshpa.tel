import { Box, Flex, Text, Image as ChakraImage, useColorModeValue, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const WorkExperience = () => {
    const experiences = [
        {
            id: 1,
            company: "Dow Jones",
            role: "Software Engineer Intern",
            duration: "June 2024 - Present",
            logo: "/djlogo.jpeg",
            description: "Machine Learning and AI for News Automation."
        },
        {
            id: 2,
            company: "Samsung",
            role: "Software Engineer Intern",
            duration: "June 2023 - August 2023",
            logo: "/samsunglogo.png",
            description: "Worked on SmartHome platform, SmartThings developing a network topology tool for IoT devices."
        },
    ];

    const timelineColor = useColorModeValue("#FFCC16", "#FFCC16");
    const boxBg = useColorModeValue("#FFCC16", "#FFCC16");
    const textColor = useColorModeValue("black", "black");

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
        hover: { scale: 1.05, transition: { type: 'spring', stiffness: 300 } }
    };

    return (
        <Box position="relative" width="full" py={5}>
            <Flex direction="column" align="flex-start" position="relative" ml={5}>
                <Box position="absolute" left="30px" width="2px" bg={timelineColor} height="full" zIndex={0} />

                {experiences.map((exp, index) => (
                    <Flex key={exp.id} width="full" alignItems="center" mb={10} position="relative">
                        <Box position="relative" width="60px" height="60px" flexShrink={0} mr={4} boxShadow="lg" borderRadius="full">
                            <ChakraImage
                                src={exp.logo}
                                boxSize="60px"
                                objectFit="cover"
                                borderRadius="full"
                                position="relative"
                                zIndex={2}
                                bg={timelineColor}
                            />
                        </Box>
                        <MotionBox
                            flex="1"
                            bg={boxBg}
                            p={4}
                            ml={10}
                            borderRadius="md"
                            color={textColor}
                            boxShadow="lg"
                            position="relative"
                            _before={{
                                content: '""',
                                position: "absolute",
                                top: "50%",
                                left: "-20px",
                                transform: "translateY(-50%)",
                                borderWidth: "10px",
                                borderStyle: "solid",
                                borderColor: `transparent ${boxBg} transparent transparent`,
                                zIndex: 1
                            }}
                            initial="hidden"
                            whileInView="visible"
                            whileHover={{ scale: 1.05, boxShadow: "xl" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            variants={variants}
                        >
                            <Text fontWeight="bold" fontSize="lg">{exp.role} at {exp.company}</Text>
                            <Text fontSize="sm">{exp.duration}</Text>
                            <Text fontSize="sm">{exp.description}</Text>
                        </MotionBox>
                    </Flex>
                ))}
            </Flex>
        </Box>
    );
};

export default WorkExperience;
