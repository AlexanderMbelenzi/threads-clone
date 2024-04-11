import React from "react";
import { Box, Flex, Image, Link, InputLeftElement, Input, InputGroup,  useColorMode } from "@chakra-ui/react";
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
      flex={60}
      top="0"
      
      justifyContent="space-between"
      py={4}
      bg={colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800"}
      zIndex="999"
     
     
    >
      <Flex justifyContent="space-between">
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
          <Flex alignItems="center" justifyContent="space-between" mr="-20%"    gap={4}>
            <Link as={RouterLink} to="/">
              For you
            </Link>

            <Image
        ml="10%"
         justifyContent="space-between"
          cursor="pointer"
          alt="logo"
          w={6}
          src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
          onClick={toggleColorMode}
          
        />


            <Link as={RouterLink} to="/home2"  justifyContent="space-between"                   mr="-20%"       // Add margin to the logo to increase space
  > 
              Following
            </Link>

          </Flex>
        )}

       



      </Flex>


	
  


    </Box>
  );
};

export default HeaderIn;
