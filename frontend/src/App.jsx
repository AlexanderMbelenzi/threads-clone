import { Box, Container } from "@chakra-ui/react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Header from "./components/HeaderIn";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/userAtom";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import CreatePost from "./components/CreatePost";
import ChatPage from "./pages/ChatPage";
import { SettingsPage } from "./pages/SettingsPage";
import HomePage2 from "./pages/Homepage2";
function App() {
	const user = useRecoilValue(userAtom);
	const { pathname } = useLocation();
	return (
		<Box position={"relative"} w='full'>

<Container maxW={pathname === "/" || pathname === "/Home2" ? { base: "620px", md: "1300px" } : "620px"}>
<Header />
<Routes>                
                    <Route path='/' element={user ? <HomePage /> : <Navigate to='/auth' />} />
                    <Route path='/Home2' element={user ? <HomePage2 /> : <Navigate to='/auth' />} />
                    <Route path='/auth' element={!user ? <AuthPage /> : <Navigate to='/' />} />
					<Route path='/update' element={user ? <UpdateProfilePage /> : <Navigate to='/auth' />} />
					
					<Route
						path='/:username'
						element={
							user ? (
								<>
									<UserPage />
									<CreatePost />
								</>
							) : (
								<UserPage />
							)
						}
					/>
					<Route path='/:username/post/:pid' element={<PostPage />} />
					<Route path='/chat' element={user ? <ChatPage /> : <Navigate to={"/auth"} />} />
					<Route path='/settings' element={user ? <SettingsPage /> : <Navigate to={"/auth"} />} />
				
				
					
				</Routes>
				</Container>

				
	
		




		</Box>
	);
}

export default App;
