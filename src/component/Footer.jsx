import React from "react";
function Footer(){
    const year=new Date().getFullYear()
return(
    <footer>
    <p>©{year}/Abdulilah Al-Hamwi/Keeper</p>
    </footer>
)
}
export default Footer;