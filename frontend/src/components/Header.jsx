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
    			
				<Flex alignItems="center"  gap={6} >
                <InputGroup size="sm" >
                    <InputLeftElement pointerEvents="none">
					<SearchIcon  />
                    </InputLeftElement>
                    <Input
                        placeholder="Search twiter for a user"
                        borderRadius="full"
                        bg={colorMode === "light" ? "#F0F0F0" : "#2B2B2B"} // Dynamically set background color based on color mode
                    />
                </InputGroup>
            </Flex>
      </Box>

		</Flex>
    );
};

export default Header;
