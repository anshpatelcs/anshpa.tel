import React from 'react';
import { Grid, Text, VStack, Icon, useColorModeValue, SimpleGrid, Tooltip, Box, keyframes } from '@chakra-ui/react';
import {
    FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaDocker,
    FaAws, FaFigma, FaJs, FaGithub, FaGoogle, FaJenkins
} from 'react-icons/fa';
import {
    SiCplusplus, SiC, SiTypescript, SiMysql, SiMongodb, SiFirebase, SiFastapi, SiMicrosoftazure,
    SiNextdotjs, SiServerless, SiTerraform
} from 'react-icons/si';

// Floating animation keyframes
const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const skills = {
    frontend: [
        { name: 'React', icon: FaReact },
        { name: 'React Native', icon: FaReact },
        { name: 'JavaScript', icon: FaJs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'HTML5', icon: FaHtml5 },
        { name: 'CSS3', icon: FaCss3Alt },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Figma', icon: FaFigma },
    ],
    backend: [
        { name: 'Python', icon: FaPython },
        { name: 'C++', icon: SiCplusplus },
        { name: 'C', icon: SiC },
        { name: 'Java', icon: FaJava },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'FastAPI', icon: SiFastapi },
        { name: 'Flask', icon: FaPython },
        { name: 'MySQL', icon: SiMysql },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Firebase/Firestore', icon: SiFirebase },
        { name: 'Docker', icon: FaDocker },
        { name: 'AWS', icon: FaAws },
        { name: 'Azure', icon: SiMicrosoftazure },
        { name: 'Google Cloud', icon: FaGoogle },
        { name: 'Serverless', icon: SiServerless },
        { name: 'Terraform', icon: SiTerraform },
        { name: 'Git / GitHub', icon: FaGithub },
        { name: 'Jenkins', icon: FaJenkins }
    ],
};

const SkillsGrid = () => {
    const boxShadow = useColorModeValue("0px 0px 8px rgba(0, 0, 0, 0.12)", "0px 0px 8px rgba(0, 0, 0, 0.75)");
    const hoverBoxShadow = useColorModeValue("0px 10px 15px rgba(0, 0, 0, 0.2)", "0px 10px 15px rgba(0, 0, 0, 0.9)");

    return (
        <Grid templateColumns={{ sm: "1fr", md: "1fr 1fr" }} gap={6} py={5}>
            <VStack
                borderWidth="1px"
                overflow="hidden"
                boxShadow={boxShadow}
                borderRadius={10}
                transition="all 0.3s ease"
                _hover={{ transform: "translateY(-10px)", boxShadow: hoverBoxShadow }}
                w="full"
                p={5}
                bgGradient="linear(to-r, teal.500, blue.500)"
                color="white"
            >
                <Text fontWeight="bold" fontSize="xl" mb={4}>Frontend</Text>
                <SimpleGrid columns={{sm:"4", md:"5"}} spacing={6}>
                    {skills.frontend.map((skill, index) => (
                        <Tooltip key={skill.name} label={skill.name} aria-label={skill.name}>
                            <VStack
                                _hover={{ animation: `${float} 1.5s ease-in-out infinite` }}
                                mb={index >= 5 ? 4 : 0}
                            >
                                <Icon as={skill.icon} w={12} h={12} />
                            </VStack>
                        </Tooltip>
                    ))}
                </SimpleGrid>
            </VStack>
            <VStack
                borderWidth="1px"
                overflow="hidden"
                borderRadius={10}
                boxShadow={boxShadow}
                transition="all 0.3s ease"
                _hover={{ transform: "translateY(-10px)", boxShadow: hoverBoxShadow }}
                w="full"
                p={5}
                bgGradient="linear(to-r, yellow.500, yellow.400)"
                color="white"
            >
                <Text fontWeight="bold" fontSize="xl" mb={4}>Backend</Text>
                <SimpleGrid columns={{sm:"4", md:"5"}} spacing={6}>
                    {skills.backend.map((skill, index) => (
                        <Tooltip key={skill.name} label={skill.name} aria-label={skill.name}>
                            <VStack
                                _hover={{ animation: `${float} 1.5s ease-in-out infinite` }}
                                mb={index >= 5 ? 4 : 0}
                            >
                                <Icon as={skill.icon} w={12} h={12} />
                            </VStack>
                        </Tooltip>
                    ))}
                </SimpleGrid>
            </VStack>
        </Grid>
    );
};

export default SkillsGrid;
