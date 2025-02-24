import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleRight, FaAngleUp, IoIosMenu, FaTimes } from "../../../assets/icons";
import { Button } from "@mui/material";

const Navigation = () => {
  const [isOpenSidebarVal, setIsOpenSidebarVal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (category) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const renderSubmenu = (category, items) => {
    return (
      <div 
        className={`submenu ${openSubmenus[category] ? 'open' : ''}`}
      >
        {items.map((item, index) => (
          <Link key={index} to={"/"}>
            <Button>{item}</Button>
          </Link>
        ))}
      </div>
    );
  };

  const menuItems = [
    { 
      label: "Home", 
      submenu: false 
    },
    { 
      label: "Men", 
      submenu: [
        "clothing", "footwear", "watches"
      ]
    },
    { 
      label: "Women", 
      submenu: [
        "clothing", "footwear", "watches"
      ]
    },
    { 
      label: "Beauty", 
      submenu: [
        "clothing", "footwear", "watches"
      ]
    },
    { 
      label: "Watches", 
      submenu: [
        "clothing", "footwear", "watches"
      ]
    },
    { 
      label: "Kids", 
      submenu: false 
    },
    { 
      label: "Gift", 
      submenu: false 
    },
    { 
      label: "Blog", 
      submenu: false 
    },
    { 
      label: "Contact", 
      submenu: false 
    }
  ];

  return (
    <>
      <nav className="responsive-navigation">
        <div className="container">
          {/* Mobile Header */}
          <div className="mobile-header">
            <Button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes /> : <IoIosMenu />}
            </Button>
            
            <Button
              className="allCartTab align-items-center mobile-categories"
              onClick={() => setIsOpenSidebarVal(!isOpenSidebarVal)}
            >
              <span className="text">All categories</span>
              <span className="icon">
                {isOpenSidebarVal ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </Button>
          </div>

          {/* Sidebar Categories */}
          <div 
            className={`sidebarNav mobile-sidebar ${
              isOpenSidebarVal ? "open" : ""
            }`}
          >
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link to={"/"}>
                    <Button>
                      {item.label}
                      {item.submenu && (
                        <FaAngleRight 
                          className="ml-auto"
                          onClick={() => toggleSubmenu(item.label)}
                        />
                      )}
                    </Button>
                  </Link>
                  {item.submenu && renderSubmenu(item.label, item.submenu)}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`mobile-menu ${
              isMobileMenuOpen ? "open" : ""
            }`}
          >
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link to={"/"}>
                    <Button>
                      {item.label}
                      {item.submenu && (
                        <span 
                          className="submenu-toggle"
                          onClick={() => toggleSubmenu(item.label)}
                        >
                          {openSubmenus[item.label] ? <FaAngleUp /> : <FaAngleDown />}
                        </span>
                      )}
                    </Button>
                  </Link>
                  {item.submenu && renderSubmenu(item.label, item.submenu)}
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-navigation">
            <div className="row">
              <div className="col-sm-2 navPart1">
                <div className="cartWrapper">
                  <Button
                    className="allCartTab align-items-center"
                    onClick={() => setIsOpenSidebarVal(!isOpenSidebarVal)}
                  >
                    <span className="icon1 mr-2">
                      <IoIosMenu />
                    </span>
                    <span className="text">All categories</span>
                    <span className="icon2 ml-2">
                      <FaAngleDown />
                    </span>
                  </Button>

                  <div
                    className={`sidebarNav ${
                      isOpenSidebarVal === true ? "open" : ""
                    }`}
                  >
                    <ul>
                      {menuItems.map((item, index) => (
                        <li key={index}>
                          <Link to={"/"}>
                            <Button>
                              {item.label}
                              {item.submenu && <FaAngleRight className="ml-auto" />}
                            </Button>
                          </Link>
                          {item.submenu && (
                            <div className="submenu">
                              {item.submenu.map((subitem, subindex) => (
                                <Link key={subindex} to={"/"}>
                                  <Button>{subitem}</Button>
                                </Link>
                              ))}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-sm-10 navPart2 d-flex align-items-center">
                <ul className="list list-inline ms-auto w-100">
                  {menuItems.map((item, index) => (
                    <li key={index} className="list-inline-item">
                      <Link to={"/"}>
                        <Button>{item.label}</Button>
                      </Link>
                      {item.submenu && (
                        <div className="submenu shadow">
                          {item.submenu.map((subitem, subindex) => (
                            <Link key={subindex} to={"/"}>
                              <Button>{subitem}</Button>
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navigation;