import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import FindFriend from "../pages/FindFriend";
import MakeFriend from "../pages/MakeFriend";
import Messages from "../pages/Messages";

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
		path: "/register",
		element: <SignUp />,
	},
]);

export default router;
