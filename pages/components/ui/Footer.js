// components/ui/Footer.js
import React from 'react';
import { Box, Button, HStack, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box mt={10} p={5} bg={useColorModeValue("white", "gray.800")} color={useColorModeValue("white", "gray.800")} textAlign="center" position="relative" overflow="hidden">
            <HStack justifyContent="center" spacing={8}>
                <Button as="a" href="https://www.linkedin.com/in/anshmpatel/" target="_blank" rel="noreferrer" backgroundColor={"transparent"} _hover={{ bg: "transparent" }}>
                    <Icon as={FaLinkedin} w={6} h={6} _hover={{
                        borderBottom: "2px solid #0F78A2",
                        transition: "0.3s",
                    }} />
                </Button>
                <Button as="a" href="https://github.com/anshpatelcs" target="_blank" rel="noreferrer" backgroundColor={"transparent"} _hover={{ bg: "transparent" }}>
                    <Icon as={FaGithub} w={6} h={6} _hover={{
                        borderBottom: "2px solid #0F78A2",
                        transition: "0.3s",
                    }} />
                </Button>
                <Button as="a" href="mailto:hi@anshpa.tel" target="_blank" rel="noreferrer" backgroundColor={"transparent"} _hover={{ bg: "transparent" }}>
                    <Icon as={FaEnvelope} w={6} h={6} _hover={{
                        borderBottom: "2px solid #0F78A2",
                        transition: "0.3s",
                    }} />
                </Button>
                <Button as="a" href="https://www.instagram.com/ansh.patel8/" target="_blank" rel="noreferrer" backgroundColor={"transparent"} _hover={{ bg: "transparent" }}>
                    <Icon as={FaInstagram} w={6} h={6} _hover={{
                        borderBottom: "2px solid #0F78A2",
                        transition: "0.3s",
                    }} />
                </Button>
            </HStack>
        </Box>
    );
};

export default Footer;
