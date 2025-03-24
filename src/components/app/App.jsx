import { useState } from "react";
import { Header } from "../header/Header";
import { SidePanel } from "../sidePanel/SidePanel";
import { Preview } from "../preview/Preview";
import { Offer } from "../offer/Offer";
import { Calculating } from "../calculating/Calculating";
import { Menu } from "../menu/Menu";
import { Order } from "../order/Order";
import { Promotion } from "../promotion/Promotion";
import { Footer } from "../footer/Footer";
import { Modal } from "../modal/Modal";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <SidePanel />
      <Preview />
      <div className="divider" />
      <Offer />
      <div className="divider" />
      <Calculating />
      <div className="divider" />
      <Menu />
      <Order />
      <div className="divider" />
      <Promotion />
      <Footer />
      {/* <Modal /> */}
    </>
  );
}

export default App;
