// components/ui/NavBar.js
import React, { useState, useEffect } from 'react';
import { Box, Button, Heading, HStack, Icon, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const buttonHover = {
    hover: {
        borderBottom: "2px solid #0F78A2",
    },
};

const NavBar = ({ textColor, toggleColorMode, scrollToAboutMe, scrollToSkills, scrollToProjects }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const bg = useColorModeValue("white", "gray.800");
    const shadow = isScrolled ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none";

    return (
        <Box
            position="sticky"
            top={0}
            left={0}
            width={"100%"}
            zIndex={1}
            bg={bg}
            boxShadow={shadow}
            transition="box-shadow 0.3s ease-in-out"
            font={"Poppins"}
        >
            <HStack justifyContent={"space-between"} p={4}>
                <Heading fontSize={"30px"}>
                    <Button backgroundColor={"transparent"} onClick={toggleColorMode} _hover={{ bg: "transparent" }} fontSize={"30px"}>
                        AP
                    </Button>
                </Heading>
                <HStack spacing={6}>
                    <Button color={textColor} backgroundColor={"transparent"} _hover={{ bg: "transparent" }} borderRadius={"100px"} onClick={scrollToAboutMe}>
                        <Text as={motion.div} variants={buttonHover} whileHover="hover">
                            About Me
                        </Text>
                    </Button>
                    <Button color={textColor} backgroundColor={"transparent"} _hover={{ bg: "transparent" }} borderRadius={"100px"} onClick={scrollToSkills}>
                        <Text as={motion.div} variants={buttonHover} whileHover="hover">
                            Skills
                        </Text>
                    </Button>
                    <Button color={textColor} backgroundColor={"transparent"} _hover={{ bg: "transparent" }} borderRadius={"100px"} onClick={scrollToProjects}>
                        <Text as={motion.div} variants={buttonHover} whileHover="hover">
                            Projects
                        </Text>
                    </Button>
                    <Button as="a" href="https://www.linkedin.com/in/anshmpatel/" target="_blank" rel="noreferrer" backgroundColor={"transparent"} _hover={{ bg: "transparent" }} display={{ base: 'none', md: 'inline-flex' }}>
                        <Icon as={FaLinkedin} w={6} h={6} _hover={{
                            borderBottom: "2px solid #0F78A2",
                            transition: "0.3s",
                        }} />
                    </Button>
                    <Button as="a" href="https://github.com/anshpatelcs" target="_blank" rel="noreferrer" backgroundColor={"transparent"} _hover={{ bg: "transparent" }} display={{ base: 'none', md: 'inline-flex' }}>
                        <Icon as={FaGithub} w={6} h={6} _hover={{
                            borderBottom: "2px solid #0F78A2",
                            transition: "0.3s",
                        }} />
                    </Button>
                </HStack>
            </HStack>
        </Box>
    );
};

export default NavBar;
