import DashboardLayout from "../../components/dashboard/DashboardLayout";
import React, { useRef, useState, useEffect } from "react";
import FormBody from "../../components/auth/FormBody";
import { useForm } from "react-hook-form";
import { Input, ErrorMessage } from "../../components/shared";
import { useLocation } from "react-router-dom";
import ChangePass from "../../components/dashboard/ChangePass";
const ChangePassword = () => {
  return (
    <>
      <DashboardLayout>
        <ChangePass />
      </DashboardLayout>
    </>
  );
};

export default ChangePassword;
