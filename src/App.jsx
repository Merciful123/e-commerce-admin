// import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AdminPanel from './pages/AdminPanel';
import UserList from "./components/UserList";
import Category from "./components/Category";
import SubCategory from "./components/SubCategory";
import Product from "./components/Product";
import Dashboard from "./components/Dashboard";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AdminPanel />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="userlist" element={<UserList />} />

            <Route path="category" element={<Category />} />
            <Route path="sub-category" element={<SubCategory />} />
            <Route path="product" element={<Product />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
