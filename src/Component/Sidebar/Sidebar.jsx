// import React from "react";
// // import styles from '../../styles/Sidebar.module.scss'
// import styles from "../../styles/SideTask.module.scss";
// import Sideitem from "../Sideitem";
// import { Link } from "react-router-dom";

// function Sidebar(){
//   return (
    
//       <div className={styles.side}>
//         <ul className={styles.sidelist}>
//            {Sideitem.map((val, key) => {
//  return (
//    <li key={key}
//    className={styles.siderow}
//   //  id={window.location.pathname = val.path ? "active":""}
//    onClick={()=>{
//     window.location.pathname= val.path
//    }}
//    >
//   <div  className={styles.sideicon}>
//      {val.icon}
//   </div>
// <div className={styles.sidelable}>{val.label}</div>
//    </li>
//       ); 
//        })}
//  </ul>
//  </div>

//     );
// };    
         
//             {/* <div className={styles.title}>
          
//   */}
// export default Sidebar;
import React ,{useState}from 'react';
import { Link } from "react-router-dom";
import { FaBars} from 'react-icons/fa';
import { AiOutlineClose} from 'react-icons/ai';
import styles from '../../styles/Sidebar.module.scss';
import { IconContext } from "react-icons";
import Sideitem from '../Sideitem';
function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);
  
    return (
      <>
      
        <IconContext.Provider value={{ color: "red" }}>
          <div className={styles.navbar}>
          <div className={styles.menubars}>
            
          <FaBars onClick={showSidebar} />   
            asmaa
            </div> 
          </div>
           <nav className={`${styles.navmenu} ${sidebar? styles.active : ''}`}>
          <ul className={styles.navmenuitems} onClick={showSidebar}>
              <li className={styles.navbartoggle}>
                <div className={styles.menubars}>
                  <AiOutlineClose />
                </div>
              </li> 
              {Sideitem.map((item, index) => {
                return (
                  <li key={index} className={styles.navtext}> 
                     <Link to={item.path}>
                      {item.icon}
                      <span>{item.label}</span>
                    </Link> 
                  </li>
                );
              })}
            </ul>
           </nav> 
        </IconContext.Provider>
      </>
    );
  }
  
  export default Sidebar;