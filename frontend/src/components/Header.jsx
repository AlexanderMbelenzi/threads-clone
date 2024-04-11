import { Box, Button, Flex, Image, Link, useColorMode } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import { AiFillHome } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";

import authScreenAtom from "../atoms/authAtom";

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const user = useRecoilValue(userAtom);
    const setAuthScreen = useSetRecoilState(authScreenAtom);

    return (
        <Box
            position="fixed"
            top="0"
            left="0"
            right="0"
            px={8} // Adjust the padding as needed
            py={4}
            bg={colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800"} // Adjust the transparency as needed
            zIndex="999" // Ensure the header is on top of other content
            mx="auto" // Center the header horizontally
            width="100%" // Ensure the header spans the full width
        >
            <Flex justifyContent={"space-between"}>
                {!user && (
                    <Link as={RouterLink} to={"/auth"} onClick={() => setAuthScreen("login")}>
                        Login
                    </Link>
                )}
				  {user && (
                    <Flex alignItems={"center"} gap={4}>
                        <Link as={RouterLink} to={`/`}>
                            
                        </Link>
                    </Flex>
                )}

                  {user && (
                    <Flex alignItems={"center"} gap={4}>
                        <Link as={RouterLink} to={`/`}>
                            
                        </Link>
                    </Flex>
                )}  

                {user && (
                    <Flex alignItems={"center"} gap={4}>
                        <Link as={RouterLink} to={`/`}>
                            for you
                        </Link>
                    </Flex>
                )}

                <Image
                    cursor={"pointer"}
                    alt="logo"
                    w={6}
                    src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
                    onClick={toggleColorMode}
                />

                {user && (
                    <Flex alignItems={"center"} gap={4}>
                        <Link as={RouterLink} to={`/home2`}>
                            following
                        </Link>
                    </Flex>
                )}

				{user && (
                    <Flex alignItems={"center"} gap={4}>
                        <Link as={RouterLink} to={`/home2`}>
                            
                        </Link>
                    </Flex>
                )}
				

				{user && (
                    <Flex alignItems={"center"} gap={4}>
                        <Link as={RouterLink} to={`/home2`}>
                            
                        </Link>
                    </Flex>
                )}

                {!user && (
                    <Link as={RouterLink} to={"/auth"} onClick={() => setAuthScreen("signup")}>
                        Sign up
                    </Link>
                )}
            </Flex>
        </Box>
    );
};

export default Header;
