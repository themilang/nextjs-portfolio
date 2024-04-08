
import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";

export default function Navui() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "About Me", href: "#about" },
    { label: "Skills", href: "#abtab" },
    { label: "Education", href: "#abtab" },
    { label: "Experience", href: "#abtab" },
    { label: "Projects", href: "#projects" },
    { label: "Case Studies", href: "#casestudies" },
    { label: "Testimonials", href: "#testimonials" },

    { label: "Contact Me", href: "#contact" },
    { label: "Subscribe", href: "#subscribe" },
    { label: "Social Links", href: "#social" },
  ];

  return (
    <Navbar
      className="top-0 fixed "
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden " justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} style={{ color: 'white' }} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-white text-inherit">GHIMIRE</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit text-white ">GHIMIRE</p>
        </NavbarBrand>
        <NavbarItem>
          <Link className="text-white" color="foreground" href="#about">
           About
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="text-white" href="#projects" aria-current="page">
           Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" color="foreground" href="#">
           Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden  lg:flex">
          {/* <Link className="text-white" href="#">Login</Link> */}
        </NavbarItem>
        <NavbarItem>
          <Button className="text-white" as={Link} color="warning" href="#subscribe" variant="flat">
           Subscribe
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              className="w-full hover:text-blue-500 text-white "
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
