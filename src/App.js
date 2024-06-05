import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Layout/Header';
import Home from './Components/Home/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact';
import Brand from './Components/ShopByCategory/Category';
import ProductCart from './Components/CartSection/ProductCart';
import Checked from './Components/CartSection/Checked';
import MyOrders from './Components/myAccountPages/Orders/MyOrders';
import Required from './Components/myAccountPages/Required';
import Subscriptions from './Components/myAccountPages/Subscript/Subscriptions';
import BillingDetail from './Components/myAccountPages/Billing/BillingDetail';
import EditBilling from './Components/myAccountPages/Billing/EditBilling';
import EditShipping from './Components/myAccountPages/Billing/EditShipping';
import BillingAndShipping from './Components/myAccountPages/Account/AddNewCard';
import ChangePassword from './Components/myAccountPages/Account/ChangePassword';
import EmailPassword from './Components/myAccountPages/Account/EmailPassword';
import AccountSetting from './Components/myAccountPages/Account/AccountSetting';
import Required1 from './Components/BroadCategory/Required1';
import Plates from './Components/BroadCategory/Plates';
import TermsOfService from './Components/HelpPagesSection/TermsOfService';
import Faqpage from './Components/HelpPagesSection/Faqpage';
import ShippingPolicy from './Components/HelpPagesSection/ShippingPolicy';
import ReturnsPolicy from './Components/HelpPagesSection/ReturnsPolicy';
import Reviews from './Components/HelpPagesSection/Reviews';
import PrivacyPolicy from './Components/HelpPagesSection/PrivacyPolicy';
import LoginAndSignup from './Components/Register/LoginAndSignup';
import ShopProduct from './Components/ShopProduct/ShopProduct';
import AddNewCard from './Components/myAccountPages/Account/AddNewCard';
function App() {
  return (
    <>
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/shopProduct" element={<ShopProduct />} />
          <Route path="/login-and-signup" element={<LoginAndSignup />} />
          <Route path="/product" element={<Brand />} />
          <Route path="/cart" element={<ProductCart />} />
          <Route path="/payment" element={<Checked />} />
          <Route path="/faqs" element={<Faqpage />} />
          <Route path="/termsofservice" element={<TermsOfService />} />
          <Route path="/shippingpolicy" element={<ShippingPolicy />} />
          <Route path="/returnspolicy" element={<ReturnsPolicy />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Routes>
          <Route path="user" element={<Required />}>
            <Route path="" element={<Navigate replace to="order" />} />
            <Route path="order" element={<MyOrders />} />
            <Route path="subscription" element={<Subscriptions />} />
            <Route
              path="save-billing-and-shipping"
              element={<BillingDetail />}
            />
            <Route path="edit-billing-address" element={<EditBilling />} />
            <Route path="edit-shipping-address" element={<EditShipping />} />
            <Route path="addNewCard" element={<AddNewCard />} />
            <Route path="account-setting" element={<AccountSetting />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="change-email-password" element={<EmailPassword />} />
          </Route>
        </Routes>
        <Routes>
          <Route path="subcategory" element={<Required1 />}>
            <Route path="" element={<Navigate replace to=":c1" />} />
            <Route path=":c1" element={<Plates />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
