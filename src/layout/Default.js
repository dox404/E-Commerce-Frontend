import React from "react"
// import Header from "./Header/Header"
// import Footer from "./Footer/Footer"
import Header from '../components/Header/Nav'
import Footer from '../components/Footer/Footer'
class Layout extends React.Component {
  render(){
    return (
      <>
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </>
    )
  }
}
export default Layout;
