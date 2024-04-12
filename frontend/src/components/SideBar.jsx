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
import { CgHomeAlt } from "react-icons/cg";
import { GiIdea } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import { BsHouseAddFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { CgCommunity } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs"; 
import { BsFillChatQuoteFill } from "react-icons/bs";
import { MdOutlineSettings } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { Image } from "@chakra-ui/react";
import {  AiOutlineHome,  } from "react-icons/ai"; // Import AiOutlineHome from react-icons/ai
import { Search2Icon } from "@chakra-ui/icons";   IoEllipsisHorizontalOutline
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
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
          <Stack spacing={2} >


          <Image src={Logo} alt="Logo" boxSize="50px" ml={4} />
            <Link as={RouterLink} to='/'>
              <Button size="lg"  bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px"    leftIcon={<BsHouseAddFill size={30}  />}>
                Home
              </Button>
            </Link>
            <Link as={RouterLink} to="/">
              <Button size="lg"  bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px"  leftIcon={< BsSearch size={28} />}>Explore</Button>
            </Link>
             <Link as={RouterLink} to="/">
              <Button size="lg"  bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px"   leftIcon={< GiIdea size={30}  />}>Ideas</Button>
            </Link>
            <Link as={RouterLink} to="/chat">
              <Button size="lg"  bg={colorMode === "dark" ? "black" : "white"}  borderRadius="20px"  ml="1-"  leftIcon={<IoNotificationsOutline size={32} />}>Notifications</Button>
            </Link>
            <Link as={RouterLink} to={`/chat`}>
              <Button size="lg" bg={colorMode === "dark" ? "black" : "white"}  borderRadius="20px" ml="1"  leftIcon={<BsEnvelopeFill size={25}  />}>
                Messages
              </Button>
            </Link>
            <Link as={RouterLink} to={`/${user.username}`}>
              <Button size="lg" bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px"  ml="1"  leftIcon={<BsBookmark size={25}  />}>
                Bookmarks
              </Button>
            </Link>
            <Link as={RouterLink} to={`/`}>
              <Button size="lg" bg={colorMode === "dark" ? "black" : "white"}  borderRadius="20px"    leftIcon={<CgCommunity size={30}  />}  >
                Communities
              </Button>
            </Link>
            <Link as={RouterLink} to={`/${user.username}`}>
              <Button size="lg" bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px"    leftIcon={<RxAvatar size={30} />}>
                Profile
              </Button>
            </Link>
            
            <Link as={RouterLink} to={`/settings`}>
              <Button size="lg"bg={colorMode === "dark" ? "black" : "white"}  borderRadius="20px"  leftIcon={<MdOutlineSettings size={30}  />}>
                Settings
              </Button>
            </Link>
            <Link as={RouterLink} to="/update">
              <Button size="lg"  bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px"   leftIcon={<IoEllipsisHorizontalOutline size={30} borderRadius="20px"   />}>  More</Button>
            </Link>
            <Link >
            <Button size="lg" onClick={logout} borderRadius="20px" bg={colorMode === "dark" ? "black" : "white"}  leftIcon={<MdLogout size={30}   />}>
              Log Out
            </Button>
            </Link> 

            <Flex justifyContent="center">
              <Button
                style={{
                  marginTop: "20%",
                  backgroundColor: "#1DA1F2",
                  borderRadius: "20px",
                  fontSize: "lg",
                  width: "80%",
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
