import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import FindFriend from "../pages/FindFriend";
import Activity from "../pages/Activity";
import PortfolioInfo from "../pages/PortfolioInfo";
import MakeFriend from "../pages/MakeFriend";
import Messages from "../pages/Messages";
import Chatting from "../pages/Chatting";
//       <Activity />
//       <PortfolioInfo />

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/find-friend",
				element: <FindFriend />,
			},
			{
				path: "/make-friend",
				element: <MakeFriend />,
			},
			{
				path: "/messages",
				element: <Messages />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <SignUp />,
	},
]);

export default router;
