import React from 'react';
import { Grid, Box, Image, Text, VStack, Link, Button, useColorModeValue, Icon } from '@chakra-ui/react';
import { FaGithub, FaLink } from 'react-icons/fa'; // Ensure you have react-icons installed

const ProjectsGrid = () => {
    const projects = [
        {
            id: 1,
            title: 'Aly, 1st in Education @ HackNYU',
            description: 'Chrome Extension, Web App, and Mobile App to help keep you accountable.',
            imageUrl: '/aly.jpeg',
            githubLink: 'https://github.com/MiniHacks/aly',
            devpostLink: 'https://devpost.com/software/aly'
        },
        {
            id: 2,
            title: 'Annote, 1st Place @ HackUIowa',
            description: 'Notetoking app with speech-to-text transcription, apple pencil support, and more.',
            imageUrl: '/annote.png',
            githubLink: 'https://github.com/MiniHacks/aly',
            devpostLink: 'https://devpost.com/software/annote'
        },
        {
            id: 3,
            title: 'Luna',
            description: 'A voice assistant with full browser control, built at HackGT',
            imageUrl: '/lunaa.png',
            githubLink: 'https://github.com/MiniHacks/luna',
            devpostLink: 'https://devpost.com/software/luna-7jviqh'
        },
        {
            id: 4,
            title: 'cardforme',
            description: 'A website that uses your previous bank transaction history to suggest the best credit cards for you',
            imageUrl: '/cardforme.jpeg',
            githubLink: 'https://github.com/MiniHacks/cardforme',
            devpostLink: 'https://devpost.com/software/cardforme'
        }


        // Add more projects as needed
    ];

    const boxShadow = useColorModeValue("0px 0px 8px rgba(0, 0, 0, 0.12)", "0px 0px 8px rgba(0, 0, 0, 0.75)");
    const hoverBoxShadow = useColorModeValue("0px 10px 15px rgba(0, 0, 0, 0.2)", "0px 10px 15px rgba(0, 0, 0, 0.9)");

    return (
        <Grid templateColumns={{ sm: "1fr", md: "1fr 1fr" }} gap={6} py={5}>
            {projects.map(project => (
                <VStack
                    key={project.id}
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    boxShadow={boxShadow}
                    transition="all 0.3s ease"
                    _hover={{ transform: "translateY(-10px)", boxShadow: hoverBoxShadow }}
                    w="full"
                >
                    <Image src={project.imageUrl} alt={project.title} boxSize="100%" objectFit="cover" />
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
            ))}
        </Grid>
    );
};

export default ProjectsGrid;
