import React, { PureComponent } from 'react'
import './Css/Header.css'
import logo from "../Publics/Img/Logo_gadder.png";

export default class Header extends PureComponent {
  render() {
    return (
    <>
      <header className="flex items-center rounded-2xl shadow-xl h-20 px-6 header">
        
          <h1 className="text-3xl font-roboto text-black">GADDER</h1>

        
          <picture className="ml-4">
            <img
              src={logo}
              alt="Logo"
              className="w-12 object-cover"
            />
          </picture>
      </header>
      
    </>
    )
  }
}