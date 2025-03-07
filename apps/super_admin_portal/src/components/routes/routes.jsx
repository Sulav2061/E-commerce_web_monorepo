import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../login/login";
import Dashboard from "../dashboard/dashboard";
import Profile from "../settings/profile";
import UserProfile from "../users/user_details";
import Seller from "../sellers/seller";
import KYCPending from "../kyc/kyc_pending";
import KYCApproved from "../kyc/kyc_approved";
import KYCDecline from "../kyc/kyc_decline";
import KYCFORM from "../kyc/kyc_form";

export const SaujiRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/setting/profile" element={<Profile />} />
        <Route path="/users/details" element={<UserProfile />} />
        <Route path="/selles/details" element={<Seller />} />
        <Route path="/kyc/pending" element={<KYCPending />} />
        <Route path="/kyc/approved" element={<KYCApproved />} />
        <Route path="/kyc/decline" element={<KYCDecline />} />
        <Route path="/kyc/pending/:id" element={<KYCFORM />} />
      </Routes>
    </div>
  );
};
