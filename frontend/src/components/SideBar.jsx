import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  Box,
  Link,
  Flex,
  Stack,
  Button,
  useColorMode 
} from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { MdOutlineSettings } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { Image } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import useLogout from "../hooks/useLogout";
import userAtom from "../atoms/userAtom";
import Logo from "/public/emoji.png"; // Import your PNG image
const SideBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const user = useRecoilValue(userAtom);
  const logout = useLogout();

  return (
    <Box position="fixed">
      <Flex direction="column" marginTop="-90px" alignItems="flex-start">
        <Box height="full" flex={20} position="fixed" display={{ base: "none", md: "block" }}>
          <Stack spacing={8} mb={2}>


          <Image src={Logo} alt="Logo" boxSize="50px" ml={4} />
            <Link as={RouterLink} to='/'>
              <Button size="lg"  bg={colorMode === "dark" ? "black" : "white"}   leftIcon={<AiFillHome size={25} />}>
                Home
              </Button>
            </Link>
            <Link as={RouterLink} to="/update">
              <Button size="lg"  bg={colorMode === "dark" ? "black" : "white"} leftIcon={<BsFillChatQuoteFill size={25} />}>Explore</Button>
            </Link>
            <Link as={RouterLink} to="/update">
              <Button size="lg"  bg={colorMode === "dark" ? "black" : "white"} leftIcon={<BsFillChatQuoteFill size={25} />}>Notifications</Button>
            </Link>
            <Link as={RouterLink} to={`/chat`}>
              <Button size="lg" bg={colorMode === "dark" ? "black" : "white"}  leftIcon={<BsFillChatQuoteFill size={25} />}>
                Messages
              </Button>
            </Link>
            <Link as={RouterLink} to={`/${user.username}`}>
              <Button size="lg" bg={colorMode === "dark" ? "black" : "white"}   leftIcon={<RxAvatar size={25} />}>
                Profile
              </Button>
            </Link>
            <Link as={RouterLink} to={`/settings`}>
              <Button size="lg"bg={colorMode === "dark" ? "black" : "white"}   leftIcon={<MdOutlineSettings size={25} />}>
                Settings
              </Button>
            </Link>
            <Link as={RouterLink} to="/update">
              <Button size="lg"  bg={colorMode === "dark" ? "black" : "white"} leftIcon={<MdOutlineSettings size={25} />}>  More</Button>
            </Link>
            <Link >
            <Button size="lg" onClick={logout} bg={colorMode === "dark" ? "black" : "white"}  leftIcon={<FiLogOut size={25} />}>
              Log Out
            </Button>
            </Link> 

            <Flex justifyContent="center">
              <Button
                style={{
                  backgroundColor: "#1DA1F2",
                  borderRadius: "20px",
                  fontSize: "lg",
                  width: "200px",
                  padding: "0.5rem 1rem",
                  color: "white"
                }}
              >
                Post
              </Button>
            </Flex>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default SideBar;
