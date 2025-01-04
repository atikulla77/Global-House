import React, { useState, useEffect } from "react";
import { useAppSelector } from "../redux/hooks"; // to access user data
import { TUser } from "../redux/features/auth/authSlice"; // assuming user info is stored in redux

const Home: React.FC = () => {
	// Accessing user data from Redux
	const user = useAppSelector(state => state.auth.user) as TUser;

	// State for posts and loading indicator
	const [posts, setPosts] = useState<any[]>([]);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1); // Page number to manage posts loading
	const [visibleComments, setVisibleComments] = useState<{
		[key: number]: boolean;
	}>({});

	// Function to fetch posts from fakeData.json
	const fetchPosts = async (page: number) => {
		setLoading(true);
		try {
			// Fetch data from fakeData.json
			const response = await fetch("fakeData.json");
			const data = await response.json();

			// Calculate the starting and ending indices for pagination
			const postsPerPage = 5;
			const startIndex = (page - 1) * postsPerPage;
			const endIndex = startIndex + postsPerPage;

			// Extract the posts for the current page
			const newPosts = data.slice(startIndex, endIndex);

			// If there are posts, append them, else don't add more
			if (newPosts.length > 0) {
				setPosts(prevPosts => [...prevPosts, ...newPosts]);
			}

			setLoading(false);
		} catch (error) {
			console.error("Error fetching posts:", error);
			setLoading(false);
		}
	};

	// First load and fetching posts when the page changes
	useEffect(() => {
		fetchPosts(page);
	}, [page]);

	// Infinite scroll handler
	const handleScroll = (e: React.UIEvent) => {
		// Check if the user has scrolled to the bottom
		const bottom =
			e.currentTarget.scrollHeight ===
			e.currentTarget.scrollTop + e.currentTarget.clientHeight;

		if (bottom && !loading) {
			// Load more posts when scrolled to the bottom
			setPage(prevPage => prevPage + 1);
		}
	};

	const toggleComments = (postId: number) => {
		setVisibleComments(prev => ({
			...prev,
			[postId]: !prev[postId],
		}));
	};

	// Handle adding a new comment
	const handleAddComment = (postId: number, newComment: string) => {
		setPosts(prevPosts =>
			prevPosts.map(post =>
				post.id === postId
					? {
							...post,
							comments: [
								...post.comments,
								{ user: user.name, text: newComment },
							],
					  }
					: post
			)
		);
	};

	return (
		<div className="w-full grid grid-cols-3">
			{/* Main Content (Feed) */}
			<div
				className="max-w-lg mx-auto col-span-2 p-4 overflow-y-auto"
				onScroll={handleScroll} // Infinite scroll handler
			>
				<div className="space-y-7 rounded-lg">
					{posts.map(post => (
						<div key={post.id} className="border-b">
							{/* Post Header */}
							<div className="flex justify-between items-center mb-4">
								<div className="flex items-center space-x-2">
									<img
										src="https://via.placeholder.com/40" // Replace with post owner's profile image
										alt="User"
										className="w-8 h-8 rounded-full"
									/>
									<span className="font-bold">{post.user}</span>
								</div>
								<button className="text-gray-500">•••</button>
							</div>

							<h1>{post.caption}</h1>

							{/* Post Image */}
							<img
								src={post.imageUrl}
								alt="Post"
								className="w-full h-[400px] object-cover mb-4 rounded-lg"
							/>

							{/* Post Actions */}
							<div className="flex items-center space-x-4 mb-2">
								<button className="text-gray-500">❤️</button>
								<button
									className="text-gray-500"
									onClick={() => toggleComments(post.id)}>
									💬
								</button>
							</div>

							{/* Post Likes */}
							<div className="text-gray-600 text-sm mb-2">
								<span className="font-semibold">{post.likes} Likes</span>
							</div>

							{/* Comments Section */}
							{visibleComments[post.id] && (
								<div className="bg-gray-100 p-3 rounded-lg">
									<h4 className="font-semibold mb-2">Comments:</h4>
									<ul className="space-y-2">
										{post.comments.map((comment, index) => (
											<li key={index} className="text-gray-700">
												<span className="font-bold">{comment.user}: </span>
												{comment.text}
											</li>
										))}
									</ul>

									{/* Add Comment */}
									<div className="mt-3">
										<input
											type="text"
											placeholder="Write a comment..."
											className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
											onKeyDown={e => {
												if (
													e.key === "Enter" &&
													e.currentTarget.value.trim() !== ""
												) {
													handleAddComment(
														post.id,
														e.currentTarget.value.trim()
													);
													e.currentTarget.value = "";
												}
											}}
										/>
									</div>
								</div>
							)}
						</div>
					))}
					{loading && (
						<div className="text-center text-gray-500">
							Loading more posts...
						</div>
					)}
				</div>
			</div>

			{/* Right Sidebar: Suggested For You */}
			<div className="hidden lg:block p-4">
				<div className="w-full bg-white shadow-md rounded-lg mb-6">
					<h3 className="font-bold text-lg mb-4">Suggested For You</h3>
					{/* Add suggestions here */}
				</div>
				{/* Stories */}
				<div className="w-full bg-white shadow-md rounded-lg p-4">
					<h3 className="font-bold text-lg mb-4">Stories</h3>
					{/* Add story items here */}
				</div>
			</div>
		</div>
	);
};

export default Home;
