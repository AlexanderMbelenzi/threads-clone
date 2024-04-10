import { Button, Flex, Image, Link, useColorMode } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import { AiFillHome } from "react-icons/ai";

import { Link as RouterLink } from "react-router-dom";

import authScreenAtom from "../atoms/authAtom";


const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const user = useRecoilValue(userAtom);

	const setAuthScreen = useSetRecoilState(authScreenAtom);

	return (
		<Flex justifyContent={"space-between"}   mt={6}   >
			
			{!user && (
				<Link as={RouterLink} to={"/auth"} onClick={() => setAuthScreen("login")}>
					Login
				</Link>
			)}

			
            {user && (
				<Flex alignItems={"center"} gap={4}>
					
					<Link as={RouterLink} to={`/`}>
					for you
					</Link>
					
				</Flex>

            )}



			<Image
				cursor={"pointer"}
				alt='logo'
				w={6}
				src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
				onClick={toggleColorMode}
			/>



            {user && (
				    <Flex alignItems={"center"} gap={4}>
				   <Link as={RouterLink} to={`/home2`}>
					following
			</Link></Flex>)}

		

			{!user && (
				<Link as={RouterLink} to={"/auth"} onClick={() => setAuthScreen("signup")}>
					Sign up
				</Link>
			)}
		</Flex>
	);
};

export default Header;
