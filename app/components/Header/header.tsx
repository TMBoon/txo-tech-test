'use client';

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../../assets/txo_logo_2.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const spacerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const logo = logoRef.current;
    const nav = navRef.current;
    // const spacer = spacerRef.current;

    gsap.set(nav, { opacity: 0, y: 20 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=100%",
        scrub: true,
      },
    });

    tl.to(header, {
      height: "140px",
    }, 0)
      .to(logo, {
        width: 168,
        height: 74,
        x: "2.5rem",
        y: "43px",
        botom:"auto",
        top: 0,
      }, 0)
      .to(nav, {
        opacity: 1,
        y: 0,
      }, "<");
      // .to(spacer, {
      //   height:"160px",
      // }, "<");

  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavItems = () => (
    <ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
      <li className="px-8">
        <a href="#" className="text-[#736357]">ENQUIRIES</a>
        <ul>
          <li className="text-[#736357]">General</li>
          <li className="text-[#736357]">+44 0 020 3613 4733</li>
          <li className="text-[#736357]">info@txowork.com</li>
        </ul>
      </li>
      <li className="px-8">
        <a href="#" className="text-[#736357]"> &nbsp; </a>
        <ul>
          <li className="text-[#736357]">sales</li>
          <li className="text-[#736357]">+44 0 020 3613 4733</li>
          <li className="text-[#736357]">info@txowork.com</li>
        </ul>
      </li>
      <li className="px-8">
        <a href="#" className="text-[#736357]">ADDRESS</a>
        <ul>
          <li className="text-[#736357]">Morelands</li>
          <li className="text-[#736357]">5-23 Old Street</li>
          <li className="text-[#736357]">London EC1V 9HL</li>
        </ul>
      </li>
      <li className="px-8">
        <a href="#" className="text-[#736357]">CONNECT</a>
        <ul>
          <li className="text-[#736357]">Instagram</li>
          <li className="text-[#736357]">LinkedIn</li>
          <li className="text-[#736357]">Facebook</li>
        </ul>
      </li>
    </ul>
  );

  return (
    <>
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-10 h-screen bg-[#F9F5EF] transition-all duration-300">
      <nav ref={navRef} className="fixed top-0 right-0 p-4 z-20 opacity-0 bg-[#F9F5EF]">
        <div className="hidden md:block">
          <NavItems />
        </div>
        <button
          className="md:hidden text-[#736357] focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>
        {/* <ul className="flex space-x-6">
          <li className="px-8">
            <a href="#" className="text-[#736357]">ENQUIRIES</a>
              <ul>
                <p className="text-[#736357]">General</p>
                <p className="text-[#736357]">+44 0 020 3613 4733</p>
                <p className="text-[#736357]">info@txowork.com</p>
              </ul>
          </li>
          <li className="px-8">
            <a href="#" className="text-[#736357]"> &nbsp; </a>
              <ul>
                <p className="text-[#736357]">sales</p>
                <p className="text-[#736357]">+44 0 020 3613 4733</p>
                <p className="text-[#736357]">info@txowork.com</p>
              </ul>
          </li>
          <li className="px-8">
            <a href="#" className="text-[#736357]">ADDRESS</a>
            <ul>
                <p className="text-[#736357]">Morelands</p>
                <p className="text-[#736357]">5-23 Old Street</p>
                <p className="text-[#736357]">London EC1V 9HL</p>
              </ul>
          </li>
          <li className="px-8">
            <a href="#" className="text-[#736357]">CONNECT</a>
            <ul>
                <p className="text-[#736357]">Instagram</p>
                <p className="text-[#736357]">LinkedIn</p>
                <p className="text-[#736357]">Facebook</p>
              </ul>
          </li>
        </ul> */}
      </nav>
      <div ref={logoRef} className="absolute bottom-0 left-5 m-4">
        <Image
          className="dark:invert"
          src={logo}
          alt="TXO logo"
          width={600}
          height={266}
          priority
        />
      </div>
  </header>
        {isMenuOpen && (
        <div className="fixed inset-0 bg-[#F9F5EF] z-30 flex items-center justify-center md:hidden">
          <button
            className="absolute top-4 right-4 text-[#736357] focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <NavItems />
        </div>
      )}
  <div className="h-screen" />
  </>
  );
}