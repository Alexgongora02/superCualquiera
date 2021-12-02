import React, {useState}  from "react";
import HeadeAdmi from "./HeadeAdmi";
import AsideAdmi from "./AsideAdmi";
import ContentAdmi from "./ContentAdmi";
import FooterAdmi from "./FooterAdmi";
import UploadProducts from "./../UploadProducts";
import "./adminlte.min.scss";

export default function Dashboard() {
  const [showUpload, setShowUpload] = useState(false);
  return (
    <div id="dashboard-content">
      <HeadeAdmi />
      <div id="dashboard-main-content">
        <AsideAdmi showUpload={setShowUpload}/>
        {showUpload ? <UploadProducts /> : <ContentAdmi />}

      </div>
        <FooterAdmi />
    </div>
  );
}
