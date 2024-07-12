import Head from 'next/head';
import {
    Box,
    Button,
    HStack,
    Text,
    useColorMode,
    useColorModeValue,
    Icon
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import AboutMe from "./components/ui/AboutMe";
import ProjectsCarousel from "./components/ui/ProjectsCarousel";
import Skills from "./components/ui/Skills";
import NavBar from './components/ui/NavBar';  // Import NavBar component
import MainLanding from './components/ui/MainLanding';  // Import MainLanding component
import Footer from './components/ui/Footer';  // Import Footer component

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

export default function Home() {
    const { colorMode, toggleColorMode } = useColorMode();
    const textColor = useColorModeValue("black", "white");
    const bgColor = useColorModeValue("white", "gray.800");
    const subTextColor = useColorModeValue("gray.500", "gray.400");

    const skillRef = useRef(null);
    const aboutmeRef = useRef(null);
    const projectsRef = useRef(null);

    const scrollToSkills = () => {
        skillRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToAboutMe = () => {
        aboutmeRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToProjects = () => {
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const { ref: aboutMeInViewRef, inView: aboutMeInView } = useInView({ triggerOnce: true });
    const { ref: skillsInViewRef, inView: skillsInView } = useInView({ triggerOnce: true });
    const { ref: projectsInViewRef, inView: projectsInView } = useInView({ triggerOnce: true });

    return (
        <Box
            bgImage="url('/background-texture.png')"
            bgSize="cover"
            bgPosition="center"
            color={textColor}
            minHeight="100vh"
            py={4}
            px={{ base: "0", md: "60" }}
            width={"100%"}
        >
            <NavBar
                textColor={textColor}
                toggleColorMode={toggleColorMode}
                scrollToAboutMe={scrollToAboutMe}
                scrollToSkills={scrollToSkills}
                scrollToProjects={scrollToProjects}
                position="fixed"
            />
            <Box p={3}> {/* Add padding here */}
                <MainLanding
                    textColor={textColor}
                    subTextColor={subTextColor}
                />
                <Box paddingTop={{ base: "0", md: "20" }}>
                    <Box ref={aboutMeInViewRef}>
                        <motion.div variants={fadeIn} initial="hidden" animate={aboutMeInView ? "visible" : "hidden"}>
                            <Text ref={aboutmeRef} fontSize="60" fontWeight="bold" mt={-40}>About Me</Text>
                            <AboutMe />
                        </motion.div>
                    </Box>
                    <Box ref={skillsInViewRef}>
                        <motion.div variants={fadeIn} initial="hidden" animate={skillsInView ? "visible" : "hidden"}>
                            <Text ref={skillRef} fontSize="60" fontWeight="bold" mt={300}>Skills</Text>
                            <Skills />
                        </motion.div>
                    </Box>
                    <Box ref={projectsInViewRef}>
                        <motion.div variants={fadeIn} initial="hidden" animate={projectsInView ? "visible" : "hidden"}>
                            <Text ref={projectsRef} fontSize="60" fontWeight="bold" mt={300}>Projects</Text>
                            <ProjectsCarousel />
                        </motion.div>
                    </Box>
                </Box>
            </Box>
            <Footer />  {/* Use the Footer component here */}
        </Box>
    );
}
