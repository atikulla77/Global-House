import { Outlet } from "react-router-dom";
import NavbarTop from "../../Shared/NavbarTop";
import NavbarBottom from "../../Shared/NavbarBottom";

const MainLayout: React.FC = () => {
	return (
		<main className="w-full mx-auto">
			<NavbarTop />
			{/* Content Area */}
			<div>
				<Outlet />
			</div>
			<NavbarBottom />
		</main>
	);
};

export default MainLayout;
