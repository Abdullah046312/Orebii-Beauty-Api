import {
  createBrowserRouter, createRoutesFromElements,
  RouterProvider, Route
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductsDetails from "./pages/ProductsDetails";

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route index element= {<Home />}></Route>
    <Route path="/shop" element={<Shop/>}></Route>
    <Route path="/shop/:id" element={<ProductsDetails/>}></Route>

  </Route>
))

function App() {
  

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
