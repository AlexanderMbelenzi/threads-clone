import { Box, Button, Flex,InputLeftElement, Input,InputGroup, Image, Link, useColorMode } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import HeaderIn from "./HeaderIn";
import { AiFillHome } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";

import authScreenAtom from "../atoms/authAtom";

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const user = useRecoilValue(userAtom);
    const setAuthScreen = useSetRecoilState(authScreenAtom);

    return (

		<Flex gap="10"  alignItems="flex-start">
		<Box
		  flex={23}
		  display={{
			base: "none",
			md: "block",
		  }}
		>
		 
		</Box>

		<Box
    mb={-9}
		  flex={58}>
      <HeaderIn/>
		  <Box w="full" h="1px" bg={colorMode === "light" ? "gray.300" : "#2B2B2B"}   ></Box>
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
