import React from 'react'
import HeadeAdmi from "./HeadeAdmi";
import AsideAdmi from "./AsideAdmi"
import ContentAdmi from "./ContentAdmi";
import FooterAdmi from "./FooterAdmi";

export default function Dashboard() {
    return (
      <div>
          <HeadeAdmi/>
          <AsideAdmi/>
          <ContentAdmi/>
          <FooterAdmi/>
      </div>
    )
}
