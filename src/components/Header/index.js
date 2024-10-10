

// import { Component } from "react";
// import NavLinks from "../NavLinks/index";
// import { GrMenu } from "react-icons/gr";
// import { GrClose } from "react-icons/gr";
// import './index.css';

// const navLinks = [
//   { id: 1, name: "SHOP" },
//   { id: 2, name: "SKILLS" },
//   { id: 3, name: "STORIES" },
//   { id: 4, name: "ABOUT" },
//   { id: 5, name: "CONTACT US" },
// ];

// class Header extends Component {
//   state = {
//     isSidebarOpen: false,
//   };

//   toggleSidebar = () => {
//     this.setState((prevState) => ({
//       isSidebarOpen: !prevState.isSidebarOpen,
//     }));
//   };

//   render() {
//     const { isSidebarOpen } = this.state;

//     return (
//       <div className="header-main-container">
//         {/* Navbar code */}
//         <div className="navbar-container">
//           <div className="logo-container">
//             <button className="menu-btn" onClick={this.toggleSidebar}>
//               <GrMenu />
//             </button>
//             <img
//               src="https://res.cloudinary.com/ramcharan/image/upload/v1728401146/product-listing-page/header/product-listing-page-logo_euqecr.png"
//               alt="logo"
//               className="company-logo"
//             />
//           </div>
//           <div className="logo-heading">LOGO</div>

//           <ul className="navbar-icons-container">
//             <li className="each-navbar-icon-cont">
//               <img
//                 src="https://res.cloudinary.com/ramcharan/image/upload/v1728401147/product-listing-page/header/search-normal_ayxwcd.png"
//                 alt="search"
//                 className="each-navbar-icon"
//               />
//             </li>
//             <li className="each-navbar-icon-cont">
//               <img
//                 src="https://res.cloudinary.com/ramcharan/image/upload/v1728401146/product-listing-page/header/heart_yexuo7.png"
//                 alt="love"
//                 className="each-navbar-icon"
//               />
//             </li>
//             <li className="each-navbar-icon-cont">
//               <img
//                 src="https://res.cloudinary.com/ramcharan/image/upload/v1728401147/product-listing-page/header/shopping-bag_jb1hyf.png"
//                 alt="cart"
//                 className="each-navbar-icon"
//               />
//             </li>
//             <li className="each-navbar-icon-cont small-screen-dont-show">
//               <img
//                 src="https://res.cloudinary.com/ramcharan/image/upload/v1728401146/product-listing-page/header/profile_nhmsy0.png"
//                 alt="profile"
//                 className="each-navbar-icon"
//               />
//             </li>
//             <li className="each-navbar-select-cont small-screen-dont-show">
//               <select className="language-select">
//                 <option>ENG</option>
//                 <option>GER</option>
//                 <option>SPA</option>
//               </select>
//             </li>
//           </ul>
//         </div>

//         {/* NavLinks */}
//         <div className="header-nav-links-main-container small-screen-dont-show">
//           <ul className="header-navlinks-ul">
//             {navLinks.map((eachLink) => (
//               <NavLinks each={eachLink} key={eachLink.id} />
//             ))}
//           </ul>
//         </div>
//         <hr />

//         {/* Sidebar */}
//         <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
//           <div className="sidebar-header">
//             <button className="close-btn" onClick={this.toggleSidebar}>
//               <GrClose />
//             </button>
//           </div>
//           <ul className="sidebar-navlinks-ul">
//             {navLinks.map((eachLink) => (
//               <NavLinks each={eachLink} key={eachLink.id} />
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default Header;




import { Component } from "react";
import NavLinks from "../NavLinks/index";
import { GrMenu, GrClose } from "react-icons/gr";
import './index.css';

const translations = {
  ENG: {
    SHOP: "SHOP",
    SKILLS: "SKILLS",
    STORIES: "STORIES",
    ABOUT: "ABOUT",
    CONTACT: "CONTACT US",
    LOGO: "LOGO"
  },
  GER: {
    SHOP: "KAUFEN",
    SKILLS: "FÄHIGKEITEN",
    STORIES: "GESCHICHTEN",
    ABOUT: "ÜBER UNS",
    CONTACT: "KONTAKT",
    LOGO: "LOGO"
  },
  SPA: {
    SHOP: "TIENDA",
    SKILLS: "HABILIDADES",
    STORIES: "HISTORIAS",
    ABOUT: "ACERCA DE",
    CONTACT: "CONTÁCTENOS",
    LOGO: "LOGO"
  }
};

class Header extends Component {
  state = {
    isSidebarOpen: false,
    language: 'ENG', // Default language
  };

  toggleSidebar = () => {
    this.setState((prevState) => ({
      isSidebarOpen: !prevState.isSidebarOpen,
    }));
  };

  handleLanguageChange = (event) => {
    this.setState({ language: event.target.value });
  };

  render() {
    const { isSidebarOpen, language } = this.state;
    const navLinks = [
      { id: 1, name: translations[language].SHOP },
      { id: 2, name: translations[language].SKILLS },
      { id: 3, name: translations[language].STORIES },
      { id: 4, name: translations[language].ABOUT },
      { id: 5, name: translations[language].CONTACT },
    ];

    return (
      <div className="header-main-container">
        {/* Navbar code */}
        <div className="navbar-container">
          <div className="logo-container">
            <button className="menu-btn" onClick={this.toggleSidebar}>
              <GrMenu />
            </button>
            <img
              src="https://res.cloudinary.com/ramcharan/image/upload/v1728401146/product-listing-page/header/product-listing-page-logo_euqecr.png"
              alt="logo"
              className="company-logo"
            />
          </div>
          <div className="logo-heading">{translations[language].LOGO}</div>

          <ul className="navbar-icons-container">
            <li className="each-navbar-icon-cont">
              <img
                src="https://res.cloudinary.com/ramcharan/image/upload/v1728401147/product-listing-page/header/search-normal_ayxwcd.png"
                alt="search"
                className="each-navbar-icon"
              />
            </li>
            <li className="each-navbar-icon-cont">
              <img
                src="https://res.cloudinary.com/ramcharan/image/upload/v1728401146/product-listing-page/header/heart_yexuo7.png"
                alt="love"
                className="each-navbar-icon"
              />
            </li>
            <li className="each-navbar-icon-cont">
              <img
                src="https://res.cloudinary.com/ramcharan/image/upload/v1728401147/product-listing-page/header/shopping-bag_jb1hyf.png"
                alt="cart"
                className="each-navbar-icon"
              />
            </li>
            <li className="each-navbar-icon-cont small-screen-dont-show">
              <img
                src="https://res.cloudinary.com/ramcharan/image/upload/v1728401146/product-listing-page/header/profile_nhmsy0.png"
                alt="profile"
                className="each-navbar-icon"
              />
            </li>
            <li className="each-navbar-select-cont small-screen-dont-show">
              <select className="language-select" onChange={this.handleLanguageChange}>
                <option value="ENG">ENG</option>
                <option value="GER">GER</option>
                <option value="SPA">SPA</option>
              </select>
            </li>
          </ul>
        </div>

        {/* NavLinks */}
        <div className="header-nav-links-main-container small-screen-dont-show">
          <ul className="header-navlinks-ul">
            {navLinks.map((eachLink) => (
              <NavLinks each={eachLink} key={eachLink.id} />
            ))}
          </ul>
        </div>
        <hr />

        {/* Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
          <div className="sidebar-header">
            <button className="close-btn" onClick={this.toggleSidebar}>
              <GrClose />
            </button>
          </div>
          <ul className="sidebar-navlinks-ul">
            {navLinks.map((eachLink) => (
              <NavLinks each={eachLink} key={eachLink.id} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
