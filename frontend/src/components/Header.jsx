import { Box, Button, Flex,InputLeftElement, Input,InputGroup, Image, Link, useColorMode } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import { AiFillHome } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";

import authScreenAtom from "../atoms/authAtom";

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const user = useRecoilValue(userAtom);
    const setAuthScreen = useSetRecoilState(authScreenAtom);

    return (

		<Flex gap="10" mt={10} alignItems="flex-start">
		<Box
		  flex={20}
		  display={{
			base: "none",
			md: "block",
		  }}
		>
		 
		</Box>

		<Box
		  flex={20}
		
		>

		<Box 

            position="fixed"
            top="0"
            left="0"
            right="0"
            px={8}
            py={4}
            bg={colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800"}
            zIndex="999"
            mx="auto"
            width="50%"
            
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
                    <Flex alignItems={"center"} gap={8}>
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
        </Box>
		<Box
        flex={35}
        display={{
          base: "none",
          md: "block",
        }}
      >
    			

      </Box>

		</Flex>
    );
};

export default Header;
