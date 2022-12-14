import React from "react";
import Home from "../SuperAdmin/pages/home/Home";
import Login from "../Login";
import Admins from "../SuperAdmin/pages/list/Admin";
import New from "../SuperAdmin/pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  adminsInputs,
  userInputs,
  adminsUpdate,
  vendorInputs,
} from "../SuperAdmin/formSource";
import "../style/dark.scss";
import Users from "../SuperAdmin/pages/list/Users";
import Vendor from "../SuperAdmin/pages/list/vendors";
import AdminsHistory from "../SuperAdmin/pages/History/admins_history";
import VendorsHistory from "../SuperAdmin/pages/History/vendors_history";
import UsersHistory from "../SuperAdmin/pages/History/users_history";
import AdminHistory from "../SuperAdmin/pages/single/AdminHistory";
import VendorHistory from "../SuperAdmin/pages/single/VendorHistory";
import UserHistory from "../SuperAdmin/pages/single/UserHistory";
import Invoice from "../SuperAdmin/pages/invoice/invoice";
import MyAccount from "../SuperAdmin/pages/MyAccount/Myaccount";
import PaymentRequest from "../SuperAdmin/pages/payment-req/Payment-Request";
import PrivacyPolicy from "../SuperAdmin/pages/settingsInfo/PrivacyPolicy";
import TermsConditions from "../SuperAdmin/pages/settingsInfo/Terms&Conditions";
import ContactForm from "../SuperAdmin/pages/contact/ContactForm";
import SingleVendor from "../SuperAdmin/pages/single/SingleVendor";
import SingleUser from "../SuperAdmin/pages/single/SingleUser";
import SingleAdmin from "../SuperAdmin/pages/single/SingleAdmin";

function Superadminroutes() {
  //   const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/superadmindashboard" element={<Home />} />
            <Route path="/" element={<Login />} />

            <Route path="admin">
              <Route index element={<Admins />} />
              {/* <Route path=":adminId" element={<Single />} /> */}
              <Route
                path="new"
                element={<New inputs={adminsInputs} title="Add New Admins" />}
              />
            </Route>
            <Route path="admin">
              <Route index element={<Admins />} />
              <Route path=":adminId" element={<SingleAdmin />} />
              <Route
                path="update"
                element={<New inputs={adminsUpdate} title="Update Admin" />}
              />
            </Route>
            {/* <Route path="vendors">
              <Route index element={<Vendors />} />
              <Route path=":vendorId" element={<Single />} />
              <Route
                path="update"
                element={<New inputs={vendorsUpdate} title="Update Vendors" />}
              />
            </Route> */}
            <Route path="vendors">
              <Route index element={<Vendor />} />
              <Route path=":vendorId" element={<SingleVendor />} />
              <Route
                path="new"
                element={<New inputs={vendorInputs} title="Add New Vendor" />}
              />
            </Route>
            <Route path="Payment-Request">
              <Route index element={<PaymentRequest />} />
            </Route>
            <Route path="ContactForm">
              <Route index element={<ContactForm />} />
            </Route>
            <Route path="PrivacyPolicy">
              <Route index element={<PrivacyPolicy />} />
            </Route>
            <Route path="Terms&Conditions">
              <Route index element={<TermsConditions />} />
            </Route>
            <Route path="users">
              <Route index element={<Users />} />
              <Route path=":userId" element={<SingleUser />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New Users" />}
              />
            </Route>

            <Route path="admins_history">
              <Route index element={<AdminsHistory />} />
              <Route path=":userId" element={<AdminHistory />} />
            </Route>
            <Route path="vendors_history">
              <Route index element={<VendorsHistory />} />
              <Route path=":userId" element={<VendorHistory />} />
            </Route>
            <Route path="users_history">
              <Route index element={<UsersHistory />} />
              <Route path=":userId" element={<UserHistory />} />
            </Route>
            <Route path="invoice">
              <Route index element={<Invoice />} />
              {/* <Route path=":userId" element={<SingleHistory />} />  */}
            </Route>
            <Route path="Myaccount">
              <Route index element={<MyAccount />} />
              {/* <Route path=":userId" element={<SingleHistory />} />  */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Superadminroutes;
