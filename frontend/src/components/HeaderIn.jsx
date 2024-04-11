import React from "react";
import { Box, Flex, Image, Link, useColorMode } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import authScreenAtom from "../atoms/authAtom";
import { Link as RouterLink } from "react-router-dom";




const HeaderIn = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const user = useRecoilValue(userAtom);
    const setAuthScreen = useSetRecoilState(authScreenAtom);


  return (
    <Box
      flex={60}
      top="0"
      pl={100}
      justifyContent="space-between"
      py={4}
      bg={colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800"}
      zIndex="999"
      width="100%"
      position="fixed"
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
          <Flex alignItems="center" justifyContent="space-between"  gap={4}>
            <Link as={RouterLink} to="/">
              for you
            </Link>

            <Image
            ml={12}
            justifyContent="space-between"
          cursor="pointer"
          alt="logo"
          w={6}
          src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
          onClick={toggleColorMode}
          // Add margin to the logo to increase space
        />


            <Link as={RouterLink} to="/home2" ml={12}  justifyContent="space-between"         // Add margin to the logo to increase space
  > 
              following
            </Link>
          </Flex>
        )}

       
      </Flex>
    </Box>
  );
};

export default HeaderIn;
