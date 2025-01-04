import React from "react";
import { Link, useNavigate } from "react-router-dom";
import mobile from "../assets/screenshot1.png";
import { useAppDispatch } from "../redux/hooks";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { verifyToken } from "../utils/verifyToken";
import { setUser, TUser } from "../redux/features/auth/authSlice";

interface LoginFormInputs {
	email: string;
	password: string;
}

const Login: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [login] = useLoginMutation();

	// React Hook Form
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormInputs>({
		defaultValues: {
			email: "jillurahmanjibon@gmail.com",
			password: "Jibon27",
		},
	});

	// Submit Handler
	const onSubmit: SubmitHandler<LoginFormInputs> = async data => {
		const toastId = toast.loading("Logging in...");
			navigate(`/`);

		// try {
		// 	const res = await login(data).unwrap();
		// 	const user = verifyToken(res.data.accessToken) as TUser;
		// 	dispatch(setUser({ user, token: res.data.accessToken }));
		// 	toast.success(`${user.role} logged in successfully.`, {
		// 		id: toastId,
		// 		duration: 2000,
		// 	});
		// 	navigate(`/`);
		// } catch (error) {
		// 	console.error("Login Error:", error);
		// 	toast.error("Something went wrong", { id: toastId, duration: 2000 });
		// }
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-4">
			<div className="flex flex-col lg:flex-row items-center justify-between gap-5 max-w-3xl w-full">
				{/* Image Section */}
				<div className="hidden lg:flex justify-center w-1/2">
					<img
						src={mobile}
						alt="Mobile Preview"
						className="max-w-md w-full h-[600px] rounded-lg shadow-lg"
					/>
				</div>

				{/* Login Form Section */}
				<div className="w-full lg:w-1/2">
					<div className="border shadow-md rounded-lg mb-4 p-6">
						<form onSubmit={handleSubmit(onSubmit)}>
							<h1 className="text-center text-3xl py-6 font-semibold text-gray-800">
								PORICHITA
							</h1>
							<div className="mb-4">
								<input
									type="email"
									placeholder="Email"
									{...register("email", {
										required: "Email is required",
										pattern: {
											value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
											message: "Invalid email address",
										},
									})}
									className={`w-full border px-3 py-2 rounded-sm focus:outline-none ${
										errors.email ? "border-red-500" : "border-gray-300"
									}`}
								/>
								{errors.email && (
									<p className="text-red-500 text-sm mt-1">
										{errors.email.message}
									</p>
								)}
							</div>
							<div className="mb-4">
								<input
									type="password"
									placeholder="Password"
									{...register("password", {
										required: "Password is required",
										minLength: {
											value: 6,
											message: "Password must be at least 6 characters",
										},
									})}
									className={`w-full border px-3 py-2 rounded-sm focus:outline-none ${
										errors.password ? "border-red-500" : "border-gray-300"
									}`}
								/>
								{errors.password && (
									<p className="text-red-500 text-sm mt-1">
										{errors.password.message}
									</p>
								)}
							</div>
							<button
								type="submit"
								className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
								Log In
							</button>
						</form>

						{/* OR Separator */}
						<div className="flex items-center justify-center my-6">
							<div className="w-1/4 h-px bg-gray-300"></div>
							<span className="text-gray-500 text-sm font-medium mx-4">OR</span>
							<div className="w-1/4 h-px bg-gray-300"></div>
						</div>

						{/* Forgot Password */}
						<div className="text-center mt-4">
							<a href="#" className="text-blue-500 text-sm hover:underline">
								Forgot password?
							</a>
						</div>
					</div>

					{/* Sign Up Section */}
					<p className="text-center border bg-white shadow-md rounded-lg p-5">
						Don't have an account?{" "}
						<Link
							className="text-blue-700 font-semibold"
							to="/account/emailsignup">
							Sign up
						</Link>
					</p>
				</div>
			</div>

			{/* Footer */}
			<div className="mt-6 text-sm text-gray-500">
				© {new Date().getFullYear()} Instagram Clone. All rights reserved.
			</div>
		</div>
	);
};

export default Login;
