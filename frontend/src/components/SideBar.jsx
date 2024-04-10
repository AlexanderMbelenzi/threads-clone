import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  Box,
  Link,
  Flex,
  Stack,
  Button,
} from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { MdOutlineSettings } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { AiFillHome } from "react-icons/ai";
import useLogout from "../hooks/useLogout";
import userAtom from "../atoms/userAtom";

const SideBar = () => {
  const user = useRecoilValue(userAtom);
  const logout = useLogout();

  return (
    <Box position="fixed">
      <Flex direction="column" mt={10} alignItems="flex-start">
        <Box height="full" flex={20} position="fixed" display={{ base: "none", md: "block" }}>
          <Stack spacing={8} mb={2}>
            <Link as={RouterLink} to='/'>
              <Button size="md" leftIcon={<AiFillHome size={24} />}>
                Home
              </Button>
            </Link>
            <Link as={RouterLink} to="/update">
              <Button size="md">Explore</Button>
            </Link>
            <Link as={RouterLink} to="/update">
              <Button size="md">Notifications</Button>
            </Link>
            <Link as={RouterLink} to={`/chat`}>
              <Button size="md" leftIcon={<BsFillChatQuoteFill size={20} />}>
                Messages
              </Button>
            </Link>
            <Link as={RouterLink} to={`/${user.username}`}>
              <Button size="md" leftIcon={<RxAvatar size={20} />}>
                Profile
              </Button>
            </Link>
            <Link as={RouterLink} to={`/settings`}>
              <Button size="md" leftIcon={<MdOutlineSettings size={20} />}>
                Settings
              </Button>
            </Link>
            <Link as={RouterLink} to="/update">
              <Button size="md">More</Button>
            </Link>
            <Button size="md" onClick={logout} leftIcon={<FiLogOut size={20} />}>
              Log Out
            </Button>
            <Flex justifyContent="center">
              <Button
                style={{
                  backgroundColor: "#1DA1F2",
                  borderRadius: "20px",
                  fontSize: "xl",
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
