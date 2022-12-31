import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ContactUS from "../ContactUS/ContactUS";
import Profile from "../Profile/Profile";
import styles from "../../styles/Layout.module.scss";
import { Routes, Route, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.Sidebar}>
          <Sidebar />
        </div>
        <div className={styles.main}>
          <div className={styles.navbar}>
            <Navbar />
          </div>
          <div className={styles.home}>
            <div className="content">
              <Routes>
                <Route element={<Outlet />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/contactUS" element={<ContactUS />} />
                  <Route path="/profile" element={<Profile />} />
                </Route>
              </Routes>
            </div>
          </div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
