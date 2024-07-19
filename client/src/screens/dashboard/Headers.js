import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  Collapse,
  IconButton,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Popover,
  PopoverContent,
  PopoverHandler,
  Typography
} from "@material-tailwind/react";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
//import { useAuth } from "../contexts/authContext";

const excludedRoutes = ["/login", "/signup"]

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen ] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <React.Fragment>
            <Menu 
                open = {isMenuOpen}
                handler = {setIsMenuOpen}
                offset = {{mainAxis : 20}}
                placement = "bottom"
                allowHover = {true}
            >
                <MenuHandler>
                    <Typography as = "div" variant = "small" className = "flex items-center justify-center lg:mt-0 lg:mb-0 font-medium hover:text-blue-gray-900">
                        <ListItem 
                            className = "text-white bg-color no-underline flex items-center gap-2 py-2 pr-4 text-md font- opensans"
                            selected = {isMenuOpen || isMobileMenuOpen}
                            onClick = {() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            Booking
                            <ChevronDownIcon
                                strokeWidth =  {2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                 }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                 }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="no-underline hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="no-underline grid grid-cols-1 gap-y-2 outline-none outline-0 pl-1">
                    <NavLink to="/" className="no-underline">
                        <MenuItem className="no-underline flex items-center gap-3 rounded-lg ">
                        <div>
                            <Typography
                            variant="h6"
                            className="no-underline flex items-center text-sm font-bold lg:text-blue-gray-900"
                            >
                            Booking Form
                            </Typography>
                        </div>
                        </MenuItem>
                    </NavLink>
                    <NavLink to="/" className="no-underline">
                        <MenuItem className="no-underline flex items-center gap-3 rounded-lg">
                        <div>
                            <Typography
                            variant="h6"
                            className="no-underline flex items-center text-sm font-bold lg:text-blue-gray-900"
                            >
                            Booking Payment
                            </Typography>
                        </div>
                        </MenuItem>
                    </NavLink>
                    <NavLink to="/internship" className="no-underline">
                        <MenuItem className="no-underline flex items-center gap-3 rounded-lg">
                        <div>
                            <Typography
                            variant="h6"
                            className="no-underline flex items-center text-sm font-bold lg:text-blue-gray-900"
                            >
                            Booking Record
                            </Typography>
                        </div>
                        </MenuItem>
                    </NavLink>
                    </ul>
                </MenuList>
            </Menu>
            <div className="no-underline block lg:hidden">
                <Collapse open={isMobileMenuOpen}>
                    <NavLink to="/" className="no-underline text-white">
                    <MenuItem className="no-underline flex items-center gap-3 rounded-lg">
                        <div>
                        <Typography
                            variant="h6"
                            className="no-underline flex items-center text-sm font-bold lg:text-white"
                        >
                            Booking Form
                        </Typography>
                        </div>
                    </MenuItem>
                    </NavLink>
                    <NavLink to="/" className="no-underline text-white">
                    <MenuItem className="no-underline flex items-center gap-3 rounded-lg">
                        <div>
                        <Typography
                            variant="h6"
                            className="no-underline flex items-center text-sm font-bold lg:text-blue-gray-900"
                        >
                            Booking Payment
                        </Typography>
                        </div>
                    </MenuItem>
                    </NavLink>
                    <NavLink to="/internship" className="no-underline text-white">
                    <MenuItem className="no-underline flex items-center gap-3 rounded-lg">
                        <div>
                        <Typography
                            variant="h6"
                            className="no-underline flex items-center text-sm font-bold lg:text-blue-gray-900"
                        >
                            Booking Record
                        </Typography>
                        </div>
                    </MenuItem>
                    </NavLink>
                </Collapse>
            </div>
        </React.Fragment>
    );
}

export default function Headers() {
    const [openNav, setOpenNav ] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);
    const [openDropdown, setOpenDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const handleDropdownToggle = () => {
        setOpenDropdown(!openDropdown);
    };
    
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpenDropdown(false);
        }
    };

    const location = useLocation();
    //const {currentUser, logout} = useAuth();

    const [shouldRenderNavbar, setShouldRenderNavbar] = useState(
        !excludedRoutes.includes(location.pathname)
    );

    const handleLogout = async () => {
        try {
            console.log("inside handleLogout function");
            //logout().then(()=>navigate("/"));
        } catch(err) {
            console.log(err);
        }
        navigate("/home");
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            setShouldRenderNavbar(!excludedRoutes.includes(location.pathname));
        };
    }, [location]);

    const handleSignInClick = () => {
        navigate("/login");
    };

    return (
        <Navbar className="no-underline mx-auto max-w-full lg:px-20 py-0 bg-color rounded-none">
        <div className="no-underline flex items-center justify-between text-blue-gray-900">
          <Typography
            as={NavLink}
            to="/"
            variant="h6"
            className="no-underline mr-4 cursor-pointer py-1.5 lg:ml-2 flex items-center text-white text-lg"
          >
            
            <h1>Mobile STEM Lab</h1>
          </Typography>
          
          <IconButton
            variant="text"
            color="white"
            className="no-underline lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="no-underline h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="no-underline h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav} className="no-underline color-white">
          
        </Collapse>
      </Navbar>
    );
}

function ProfileInfoPopover({ handleLogout, currentUser }) {
    const [openPopover, setOpenPopover] = React.useState(false);
    
    const triggers = {
      onMouseEnter: () => setOpenPopover(true),
      onMouseLeave: () => setOpenPopover(false),
    };
    const name=currentUser.email.split('@')[0]
    return (
      <Popover open={openPopover} handler={setOpenPopover}>
        <PopoverHandler {...triggers}>
          <Button variant="gradient"
            size="sm"
            color="white">{name}</Button>
        </PopoverHandler>
        <PopoverContent {...triggers} className="z-50 max-w-[24rem]">
          <div className="mb-2 flex items-center justify-between gap-4">
            <Avatar
              size="md"
              variant="circular"
              src={`https://ui-avatars.com/api/?name=${currentUser.email ? currentUser.email[0].toUpperCase() : ''}&background=random`}
              alt={currentUser.email ? currentUser.email[0].toUpperCase() : ''}
            />
            <Button
              variant="gradient"
              size="sm"
              className="font-medium capitalize"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    );
  }
  
