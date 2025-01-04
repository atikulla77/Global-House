 
import ProtectedRoute from "./components/layout/ProtectedRoute";
import MainLayout from "./components/layout/MainLayout";
import "./App.css"

function App() {
  return (
    <div className="text-white bg-[#1F2022]">
      {/* <ProtectedRoute>
      </ProtectedRoute> */}
        <MainLayout/>
    </div>
  );
}

export default App;
