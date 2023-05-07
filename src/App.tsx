import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Layout 🏠️
import { Auth, HomePage } from "./pages/layout";

//Views 👀
import { DetailsFurniture, Home, Orders, PageNotFound } from "./pages";
import { SignIn, SignUp } from "./pages/auth";

//Context 🔎
import AuthProvider from "./context/AuthContext";
import BasketProvider from "./context/BasketContext";
import OrderProvider from "./context/OrderContext";
import FurnitureProvider from "./context/FurnitureContext";

function App() {
  return (
    <AuthProvider>
      <BasketProvider>
        <OrderProvider>
          <FurnitureProvider>
            <BrowserRouter>
              <Routes>
                {/* Pages */}
                <Route path="/" element={<HomePage />}>
                  <Route index element={<Home />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route
                    path="/furniture/:furnitureId"
                    element={<DetailsFurniture />}
                  />
                </Route>

                {/* Sign In/Up */}
                <Route path="/auth" element={<Auth />}>
                  <Route path="/auth/signin" element={<SignIn />} />
                  <Route path="/auth/signup" element={<SignUp />} />
                </Route>

                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </BrowserRouter>
          </FurnitureProvider>
        </OrderProvider>
      </BasketProvider>
    </AuthProvider>
  );
}

export default App;
