// components/ui/NavBar.js
import React from 'react';
import { Box, Button, Heading, HStack, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const buttonHover = {
    hover: {
        borderBottom: "2px solid #0F78A2",
    },
};

const NavBar = ({ textColor, toggleColorMode, scrollToAboutMe, scrollToSkills, scrollToProjects }) => {
    const bg = useColorModeValue("white", "gray.800");

    return (
        <Box
            position="sticky"
            top={0}
            left={0}
            width={"100%"}
            zIndex={1}
            bg={bg}
            font={"Poppins"}
        >
            <HStack justifyContent={"space-between"} p={4}>
                <HStack>
                    <Button
                        backgroundColor={"transparent"}
                        onClick={toggleColorMode}
                        _hover={{ bg: "transparent" }}
                        fontSize={"30px"}
                        paddingLeft={"0"}
                    >
                        <Heading fontSize={"30px"}>AP</Heading>
                    </Button>
                </HStack>
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