import {Routes, Route} from 'react-router'
import "./index.css";
import TermsPage from "./pages/TermPage";
import HomePage from "./pages/HomePages";
import NotFoundPage from "./pages/NotFound";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPages";
import FormPage from "./pages/FormPages";
import RHFPage from "./pages/RHPPages";
import EmployeesPage from "./pages/EmployessPages";

//? COMPONENT
function App() {
  return (
    <>
      <Routes>
        {/*Static Route*/}
        <Route path="/" element={<HomePage />}/>
        <Route  path="/terms" element={<TermsPage />}/>
        <Route path="Product-List" element={<ProductListPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/rhf" element={<RHFPage />} />
        <Route path="/employees" element={<EmployeesPage />} />

        {/*Dynamic Route*/}
        <Route path="/product/:slug" element={<ProductDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
export default App;
