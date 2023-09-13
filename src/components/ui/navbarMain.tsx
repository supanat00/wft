"use client"

import React, { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from "@nextui-org/react";
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

interface MenuItem {
  name: string;
  link: string;
}

export default function NavbarMain() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [    
    { name: "Generate", link: "/generate" },
    { name: "Showcase", link: "/showcase" },
    { name: "My Creations", link: "/creations" },
    { name: "Settings", link: "/settings" },    
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} >
      {/* Mobile-Screen */}
      {/* Hamburger */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      {/* Logo */}
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href="/" color="foreground" className="flex-items-center gap-4">
            <Image src="/images/favicon.ico" alt="logo" width={28} height={28} />           
            <p className="font-bold text-inherit">WFT</p>   
          </Link>           
        </NavbarBrand>
      </NavbarContent>

      <NavbarBrand className="hidden sm:flex gap-4">
      <Link href="/" color="foreground" className="flex-items-center gap-4">
            <Image src="/images/favicon.ico" alt="logo" width={28} height={28} />           
            <p className="font-bold text-inherit">WFT</p>   
          </Link>             
      </NavbarBrand>     

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/generate">
            Generate
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/showcase">
            Showcase
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        
        <NavbarItem >          
          <ThemeSwitcher />          
        </NavbarItem>

        <NavbarItem >          
          <UserButton afterSignOutUrl='/'/>         
        </NavbarItem> 

        

      </NavbarContent>      
      
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color={
                index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.name}              
            </Link>           
            
            
          </NavbarMenuItem>          
        ))}
      </NavbarMenu>      
    </Navbar>
  );
}
