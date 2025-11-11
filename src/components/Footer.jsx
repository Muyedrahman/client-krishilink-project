import React from 'react';
import logo from "../assets/logo.png";
import { FaTwitter } from 'react-icons/fa';
import { FaSquareYoutube, FaXTwitter } from 'react-icons/fa6';
import { BiLogoFacebookCircle } from 'react-icons/bi';

const Footer = () => {
    return (
      <footer className="footer sm:footer-horizontal bg-green-200 text-base-content p-10 ">
        <nav>
          <div className="">
            <img className="size-10 rounded-full" src={logo} alt="" />
            <h6 className="text-2xl font-bold text-green-600">
              <i className="text-yellow-500">Krishi</i> Network
            </h6>
          </div>
          <h6 className="footer-title">Service</h6>
          <a className="link link-hover">Our Solutions</a>
          <a className="link link-hover">Partners</a>
          <a className="link link-hover">Our projects</a>
        </nav>
        <nav>
          <h6 className="footer-title">Recent Posts</h6>
          <a href="/blog/tomato-farming-tips" className="link link-hover">
            Tomato Farming Tips for Winter Season
          </a>
          <a href="/blog/organic-fertilizer-guide" className="link link-hover">
            Organic Fertilizer Guide for Beginners
          </a>
          <a href="/blog/market-trends-2025" className="link link-hover">
            Bangladesh Agro Market Trends 2025
          </a>
        </nav>

        <nav>
          <h6 className="footer-title">Contact</h6>
          <a className="link link-hover">+880 1611203464</a>
          <a className="link link-hover">+880 1711203411</a>
          <a className="link link-hover">+880 2-9356784</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaXTwitter className="size-10" />
            </a>
            <a>
              <FaSquareYoutube className="size-10" />
            </a>
            <a>
              <BiLogoFacebookCircle className="size-10" />
            </a>
          </div>
        </nav>
      </footer>
    );
};

export default Footer;