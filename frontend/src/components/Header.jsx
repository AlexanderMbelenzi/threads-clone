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
		  flex={20}
		  display={{
			base: "none",
			md: "block",
		  }}
		>
		 
		</Box>

		<Box
		  flex={60}>
      <HeaderIn/>
		
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
