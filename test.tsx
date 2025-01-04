import React, { useState, useEffect, useRef } from "react";
import {
	FaBars,
	FaHome,
	FaSearch,
	FaCompass,
	FaVideo,
	FaEnvelope,
	FaBell,
	FaPlusCircle,
	FaUserCircle,
	FaEllipsisH,
	FaTimes,
} from "react-icons/fa";
export default function test() {
    	const [isOpen, setIsOpen] = useState<boolean>(false); // Explicit type for state
			const sidebarRef = useRef<HTMLElement | null>(null); // Ref for the sidebar element

			// Toggle sidebar visibility
			const toggleSidebar = () => setIsOpen(!isOpen);

			// Close the sidebar if clicked outside
			useEffect(() => {
				const handleClickOutside = (event: MouseEvent) => {
					if (
						sidebarRef.current &&
						!sidebarRef.current.contains(event.target as Node)
					) {
						setIsOpen(false);
					}
				};

				document.addEventListener("mousedown", handleClickOutside);

				return () => {
					document.removeEventListener("mousedown", handleClickOutside);
				};
			}, []);
  return (
		<div>
			{/* Sidebar Toggle Button */}
			<button
				onClick={toggleSidebar}
				aria-controls="sidebar"
				className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden focus:outline-none focus:ring-2   hover:bg-gray-700 hover:text-white focus:ring-gray-600">
				<span className="sr-only">Open sidebar</span>
				<FaBars className="w-6 h-6" />
			</button>

			{/* Sidebar */}
			<aside
				ref={sidebarRef}
				id="sidebar"
				className={`fixed top-0 left-0 z-40 md:w-64 w-56 h-screen transition-transform ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				} sm:translate-x-0`}
				aria-label="Sidebar">
				<div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 relative">
					{/* Close button for mobile */}
					<button
						onClick={toggleSidebar}
						className="absolute sm:hidden top-4 right-4 text-gray-500 hover:text-gray-700">
						<FaTimes className="w-6 h-6" />
					</button>
					{/* Sidebar Links */}
					<div className="py-4">
						<NavLink to="/" className=" text-3xl font-semibold">
							<span className="ml-3">PORICHITA</span>
						</NavLink>
					</div>
					<ul className="space-y-2 font-medium">
						<li>
							<NavLink
								to="/"
								className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-700 hover:text-white">
								<FaHome className="w-5 h-5" />
								<span className="ml-3">Home</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/search"
								className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-700 hover:text-white">
								<FaSearch className="w-5 h-5" />
								<span className="ml-3">Search</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/explore"
								className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-700 hover:text-white">
								<FaCompass className="w-5 h-5" />
								<span className="ml-3">Explore</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/reels"
								className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-700 hover:text-white">
								<FaVideo className="w-5 h-5" />
								<span className="ml-3">Reels</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/messages"
								className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-700 hover:text-white">
								<FaEnvelope className="w-5 h-5" />
								<span className="ml-3">Messages</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/notifications"
								className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-700 hover:text-white">
								<FaBell className="w-5 h-5" />
								<span className="ml-3">Notifications</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/create"
								className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-700 hover:text-white">
								<FaPlusCircle className="w-5 h-5" />
								<span className="ml-3">Create</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/profile"
								className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-700 hover:text-white">
								<FaUserCircle className="w-5 h-5" />
								<span className="ml-3">Profile</span>
							</NavLink>
						</li>
					</ul>
					{/* More Button */}
					<div className="absolute bottom-4 left-3">
						<button className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-700 hover:text-white">
							<FaEllipsisH className="w-5 h-5" />
							<span className="ml-3">More</span>
						</button>
					</div>
				</div>
			</aside>
		</div>
	);
}
