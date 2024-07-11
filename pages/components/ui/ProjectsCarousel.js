import React from 'react';
import { Grid, Box, Image, Text, VStack, Link, Button, useColorModeValue, Icon, Badge } from '@chakra-ui/react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, boxShadow, hoverBoxShadow }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
        >
            <VStack
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow={boxShadow}
                transition="all 0.3s ease"
                _hover={{ transform: "translateY(-10px)", boxShadow: hoverBoxShadow }}
                w="full"
                position="relative"
            >
                <Box position="relative" w="full">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        boxSize="100%"
                        objectFit="contain"
                    />
                </Box>
                <Box w="full" p={2}>
                    {project.skills.map((skill, index) => (
                        <Badge
                            key={index}
                            colorScheme="blue"
                            mr="2"
                            mb="2"
                            borderRadius="full"
                            opacity="0.8"
                            _hover={{ opacity: "1.0", transform: "scale(1.01)" }}
                            transition="all 0.2s ease-in-out"
                        >
                            {skill}
                        </Badge>
                    ))}
                </Box>
                <Box p={5} w="full">
                    <Text fontWeight="bold" fontSize="xl">{project.title}</Text>
                    <Text fontSize="md" mb={4}>{project.description}</Text>
                    <Link href={project.githubLink} isExternal>
                        <Button leftIcon={<Icon as={FaGithub} />} colorScheme="gray" variant="outline">
                            GitHub
                        </Button>
                    </Link>
                    <Link href={project.devpostLink} isExternal ml={2}>
                        <Button leftIcon={<Icon as={FaLink} />} colorScheme="teal" variant="outline">
                            Devpost
                        </Button>
                    </Link>
                </Box>
            </VStack>
        </motion.div>
    );
};

const ProjectsGrid = () => {
    const projects = [
        {
            id: 1,
            title: 'Aly, 1st in Education @ HackNYU',
            description: 'Chrome Extension, Web App, and Mobile App to help keep you accountable.',
            imageUrl: '/aly.jpeg',
            githubLink: 'https://github.com/MiniHacks/aly',
            devpostLink: 'https://devpost.com/software/aly',
            skills: ['JavaScript', 'React', 'Firebase', 'Apple Maps', 'Chrome Extension']
        },
        {
            id: 2,
            title: 'Annote, 1st Place @ HackUIowa',
            description: 'Notetaking app with speech-to-text transcription, apple pencil support, and more.',
            imageUrl: '/annote.png',
            githubLink: 'https://github.com/MiniHacks/annote',
            devpostLink: 'https://devpost.com/software/annote',
            skills: ['TypeScript', 'React', 'Python', 'Whisper', 'Next.js', 'MongoDB']
        },
        {
            id: 3,
            title: 'Luna',
            description: 'A voice assistant with full browser control, built at HackGT',
            imageUrl: '/lunaa.jpeg',
            githubLink: 'https://github.com/MiniHacks/luna',
            devpostLink: 'https://devpost.com/software/luna-7jviqh',
            skills: ['Electron.js', 'Next.js', 'Microsoft Azure']
        },
        {
            id: 4,
            title: 'cardforme',
            description: 'A website that uses your previous bank transaction history to suggest the best credit cards for you',
            imageUrl: '/cardforme.jpeg',
            githubLink: 'https://github.com/MiniHacks/cardforme',
            devpostLink: 'https://devpost.com/software/cardforme',
            skills: ['TypeScript', 'React', 'Python', 'Plaid']
        }
        // Additional projects...
    ];

    const boxShadow = useColorModeValue("0px 0px 8px rgba(0, 0, 0, 0.12)", "0px 0px 8px rgba(0, 0, 0, 0.75)");
    const hoverBoxShadow = useColorModeValue("0px 10px 15px rgba(0, 0, 0, 0.2)", "0px 10px 15px rgba(0, 0, 0, 0.9)");

    return (
        <Grid templateColumns={{ sm: "1fr", md: "1fr" }} gap={6} py={5}>
            {projects.map(project => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    boxShadow={boxShadow}
                    hoverBoxShadow={hoverBoxShadow}
                />
            ))}
        </Grid>
    );
};

export default ProjectsGrid;
