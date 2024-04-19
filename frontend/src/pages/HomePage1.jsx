import { Box, Flex, Spinner, Container, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import useShowToast from "../hooks/useShowToast";
import Post from "../components/Post";
import { useRecoilState } from "recoil";
import postsAtom from "../atoms/postsAtom";
import SuggestedUsers from "../components/SuggestedUsers";
import { useColorMode } from "@chakra-ui/react";

const HomePage1 = () => {
  const { colorMode } = useColorMode();
  const [posts, setPosts] = useRecoilState(postsAtom);
  const [loading, setLoading] = useState(true);
  const showToast = useShowToast();

  useEffect(() => {
    const getFeedPosts = async () => {
      setLoading(true);
      setPosts([]);
      try {
        const res = await fetch("/api/posts/feed");
        const data = await res.json();
        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        setPosts(data);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setLoading(false);
      }
    };
    getFeedPosts();
  }, [showToast, setPosts]);

  return (
    <Container maxW="650" mt={3.5}>
      <Flex flexDir={{ base: "column", md: "row" }} gap="10">
        <Box flex={{ base: "none", md: 1 }}>
          <SideBar />
        </Box>
        <Box flex={{ base: 1, md: 2 }} marginTop={{ base: 4, md: 0 }}>
          <Box w="full" h="1px" bg={colorMode === "light" ? "gray.300" : "#2B2B2B"} mt={4} />
          {!loading && posts.length === 0 && (
            <Heading as="h1" size="md" mt={4}>
              Welcome to bidoi, share your ideas
            </Heading>
          )}
          {loading && (
            <Flex justify="center" mt={4}>
              <Spinner size="xl" />
            </Flex>
          )}
          {posts.map((post) => (
            <Post key={post._id} post={post} postedBy={post.postedBy} />
          ))}
        </Box>
        <Box flex={{ base: "none", md: 1 }}>
          <SuggestedUsers />
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage1;
