import React from 'react'
import MainHeader from '../components/MainHeader/MainHeader'
import { Outlet,useNavigation } from 'react-router-dom'

function RootLayout() {
  // const navigation =useNavigation();

  
  return (
   <>
   <MainHeader/>
   {/* <main> */}
    {/* {navigation.state==='loading' && <p>Loading...</p>} */}
   <Outlet/>
   {/* </main> */}
   </>
  )
}

export default RootLayout