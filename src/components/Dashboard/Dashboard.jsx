import React from "react";
import HeadeAdmi from "./HeadeAdmi";
import AsideAdmi from "./AsideAdmi";
import ContentAdmi from "./ContentAdmi";
import FooterAdmi from "./FooterAdmi";
import "./adminlte.min.scss";

export default function Dashboard() {
  return (
    <div id="dashboard-content">
      <HeadeAdmi />
      <div id="dashboard-main-content">
        <AsideAdmi />
        <ContentAdmi />
      </div>
        <FooterAdmi />
    </div>
  );
}
