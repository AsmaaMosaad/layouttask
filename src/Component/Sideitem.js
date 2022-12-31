import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { CgProfile} from 'react-icons/cg';
import { RiContactsLine } from 'react-icons/ri';
 const Sideitem = [
  {
   label: 'Home',
    path: '/',
    icon: <AiFillHome/>,
  },
  {
    label: 'Profile',
     path: '/profile',
     icon: <CgProfile/>,
   },
   {
    label: 'Contact US',
     path: '/contactUS',
     icon: <RiContactsLine/>,
   },
]

export default Sideitem;