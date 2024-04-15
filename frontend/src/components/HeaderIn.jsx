import React from "react";
import { Box, Flex, Image, Button, Link, useColorMode,Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import authScreenAtom from "../atoms/authAtom";
import { Link as RouterLink } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import Logo2 from "/public/Reddit.png"; // Import your PNG image
import { Container } from "@chakra-ui/react";
import useLogout from "../hooks/useLogout";


const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const user = useRecoilValue(userAtom);
    const setAuthScreen = useSetRecoilState(authScreenAtom);
    const logout = useLogout();

    return (
<Box       >
      <Box   left={0} right={0} maxW="1250"    bg={colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800"} zIndex="999" position="fixed"  top={0} marginX="auto"    >
        <Box py={3}   pl="0"    maxW="1250"   pr="0" marginX="auto">
          <Flex justifyContent="space-between" alignItems="center">
            {!user ? (
              <>
                <Link as={RouterLink} to="/auth" onClick={() => setAuthScreen("login")}>
                  Login
                </Link>
                <Link as={RouterLink} to="/auth" onClick={() => setAuthScreen("signup")}>
                  Sign up
                </Link>
              </>
            ) : (
              <>
<Box>
<Image src={Logo2} mt={-25} mb={-25} alt="Logo"cursor="pointer" 
 className="logo" />
</Box>



                <Link fontSize="md" as={RouterLink} to="/Home2">
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
                <Link fontSize="md" as={RouterLink} to="/">
                  Following
                </Link>

            
                <Link >
            <Button fontSize="xs"  onClick={logout} borderRadius="20px"bg= "#FF4500 "  color= "white"     >
              Log Out
            </Button>
            </Link>

              </>
            )}
          </Flex>
        </Box>
      </Box>
      </Box>
    );
};

export default Header;
