import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { FaGithubSquare, FaInstagram, FaTwitter } from "react-icons/fa";

import "./style.css";

import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { Link } from "react-router-dom";
import FooterContents from "./FooterContents";

const Footer = () => {
  return (
    <footer className="text-gray-400 body-font mt-10 mb-[65px] lg:mb-0 bg-white py-8 shadow-even">
      <ContentWrapper>
        <FooterContents/>
        <div className="flex flex-col  px-10">
          <div className="flex items-center justify-between flex-col md:flex-row ">
            <div className="media pb-4">
              <div className="font-medium text-lg text-slate-600">
                Follow Us
              </div>
              <div className="pl-2 text-3xl space-x-3">
                {/* <a href="http://" target="_blank" rel="noopener noreferrer"></a> */}

                <a
                  href="https://www.facebook.com/adarshrangare007/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoFacebook className="inline-block hover:text-blue-700 transition-all" />
                </a>
                <a
                  href="https://www.twitter.com/akrangare/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="inline-block hover:text-blue-500 transition-all" />
                </a>
                <a
                  href="https://www.instagram.com/adarsh.ad007/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="inline-block hover:text-pink-500 transition-all" />
                </a>
                <a
                  href="https://www.github.com/adarshrangare/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithubSquare className="inline-block hover:text-purple-700 transition-all" />
                </a>
              </div>
            </div>
          </div>
          <div className="affiliation pt-6 mt-4 border-t ">
            <div className="font-medium text-lg mb-4 text-slate-600">
              Our Brands
            </div>
            <div className="flex">
              <a
                className="footer-logo mmt w-[98px] h-8 mr-[30px] grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all"
                href="https://www.makemytrip.com/"
                target="_blank"
              ></a>
              <a
                className="footer-logo redbus w-[65px] h-8 mr-[30px] grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all"
                href="https://www.redbus.in/"
                target="_blank"
              ></a>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
