import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
 import Sidebar from "../Sidebar/Sidebar";
import styles from "../../styles/Layout.module.scss";
import ContactUS from "../ContactUS/ContactUS";
import Profile from '../Profile/Profile'
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
        <Home /> 
        </div>
        <Profile/>
      <ContactUS/> 
        {/* <div className={styles.footer}>
         <Footer />
         </div> */}
        </div>
      </div>
    </>
  );
};
export default Layout;
