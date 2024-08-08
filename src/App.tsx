import "./App.css";
import { useRoutes } from "react-router-dom";
import Home from "./components/home";
import Detail from "./components/detail";
import Productlist from "./components/productlist";
import Client from "./layout/client";
import ProductContext from "./context/product";
import Addproduct from "./components/admin/addProduct"; 
import Editproduct from "./components/admin/editProduct"; 
import Category from "./components/category";
import Admin from "./layout/Admin";
import HomeAdmin from "./components/admin/homeadmin";
import CategoryList from "./components/admin/categorylist"; 
import AddCategory from "./components/admin/addCategory"; 
import EditCategory from "./components/admin/EditCategory"; 
import CategoryContext from "./context/category";
import Search from "./components/Search";
import Login from "./components/login";
import Login2 from "./layout/Login";
import Register from "./components/register";
import Privaterouterr from "./components/privaterouter";



function App() {
  const router = useRoutes([
    {
      path: "",
      element: (
        
          <ProductContext>
            <CategoryContext>
            
              <Client />
              
              </CategoryContext>      
          </ProductContext>
      ),
      children: [
        { path: "", element: <Home /> },
        { path: "category", element: <Category /> },
        { path: "detail/:id", element: <Detail /> },
        { path: "category/:id", element: <Category />, },
        { path: "search", element: <Search /> },
        
        
        
      ],
    },
    {
      path: "",
      element: (
        <ProductContext>
          <Login2 />
          </ProductContext>
      ),
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> }
      ],
    },
    {
      path: "dashboard",
      element: (
        
          <ProductContext>
            <CategoryContext>
            <Privaterouterr>
            <Admin />
            </Privaterouterr>
             
              </CategoryContext>
          </ProductContext>
      ),
      children: [
        {path:'', element:<HomeAdmin/>},
        { path: "list", element:  <Productlist /> },
        { path: "list/add", element: <Addproduct /> },
        { path: "list/edit/:id", element: <Editproduct /> },
        { path: "category", element: <CategoryList /> },
        { path: "category/add", element: <AddCategory /> },
        { path: "category/edit/:id", element: <EditCategory /> },
        
      ],
    },
  ]);
  return router;
}

export default App;
