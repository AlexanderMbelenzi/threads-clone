import React from "react";
import { Box, Flex, Image, Link, useColorMode } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import authScreenAtom from "../atoms/authAtom";
import { Link as RouterLink } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";

const HeaderIn = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const user = useRecoilValue(userAtom);
    const setAuthScreen = useSetRecoilState(authScreenAtom);

    return (
        <Box
            pr="8%"
            pl="15%"
            top="0"
            py={4}
            bg={colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800"}
            zIndex="999"
        
            width="100%"
        >
            <Flex justifyContent="space-between" alignItems="center">
                {!user && (
                    <>
                        <Link as={RouterLink} to="/auth" onClick={() => setAuthScreen("login")}>
                            Login
                        </Link>
                        <Link as={RouterLink} to="/auth" onClick={() => setAuthScreen("signup")}>
                            Sign up
                        </Link>
                    </>
                )}

                {user && (
                    <>
                        <Link fontSize={"md"} as={RouterLink} to="/">
                            For you
                        </Link>

                        <Flex justifyContent="center" alignItems="center">
                            <Image
                                cursor="pointer"
                                alt="logo"
                                w={6}
                                src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
                                onClick={toggleColorMode}
                            />
                        </Flex>

                        <Link as={RouterLink} fontSize={"md"}  to="/Home2">
                            Following
                        </Link>
                    </>
                )}
            </Flex>
        </Box>
    );
};

export default HeaderIn;
