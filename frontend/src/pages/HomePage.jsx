import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { useRecoilState, useRecoilValue } from "recoil"; // corrected import statement
import useShowToast from "../hooks/useShowToast";
import Post from "../components/Post";
import SideBar from "../components/SideBar";
import postsAtom from "../atoms/postsAtom";
import userAtom from "../atoms/userAtom";

import SuggestedUsers from "../components/SuggestedUsers";
const HomePage = () => {
  const user = useRecoilValue(userAtom);
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
        console.log(data);
        setPosts(data);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setLoading(false); // Set loading to false in finally block
      }
    };
    getFeedPosts();
  }, [showToast, setPosts]);

  return (
    <Flex gap="10" mt={10} alignItems="flex-start">
      <Box
        flex={20}
        display={{
          base: "none",
          md: "block",
        }}
      >
        <SideBar /> {/* Corrected the component name */}
      </Box>

      <Box flex={60}>
        {!loading && posts.length === 0 && (
          <h1>Welcome to bidoi, share your ideas</h1>
        )}

        {loading && (
          <Flex justify="center">
            <Spinner size="xl" />
          </Flex>
        )}

        {posts.map((post) => (
          <Post key={post._id} post={post} postedBy={post.postedBy} />
        ))}
      </Box>
      <Box
        flex={35}
        display={{
          base: "none",
          md: "block",
        }}
      >
    				<SuggestedUsers />

      </Box>
    </Flex>
  );
};

export default HomePage;
