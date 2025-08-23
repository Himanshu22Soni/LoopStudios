import React from "react";
import logo from "../assets/images/logo.svg";
import facebookIcon from "../assets/images/icon-facebook.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import pinterestIcon from "../assets/images/icon-pinterest.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";

const FooterSection = () => {
  return (
    <footer className="bg-black">
      {/* Container */}
      <div className="container max-w-6xl py-10 mx-auto">
        {/* Footer FLex Container */}
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:justify-between md:space-y-0 md:items-start">
          {/* <!-- Menu & Logo Container --> */}
          <div class="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            {/* <!-- Logo --> */}
            <div class="h-8">
              <img src={logo} alt="" class="w-44 md:ml-3" />
            </div>
            {/* <!-- Menu Container --> */}
            <div class="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              {/* <!-- Item 1 --> */}
              <div class="h-10 group">
                <a href="#">About</a>
                <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              {/* <!-- Item 2 --> */}
              <div class="h-10 group">
                <a href="#">Careers</a>
                <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              {/* <!-- Item 3 --> */}
              <div class="h-10 group">
                <a href="#">Events</a>
                <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              {/* <!-- Item 4 --> */}
              <div class="h-10 group">
                <a href="#">Products</a>
                <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              {/* <!-- Item 5 --> */}
              <div class="h-10 group">
                <a href="#">Support</a>
                <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
          </div>

          {/* <!-- Social & Copy Container --> */}
          <div class="flex flex-col items-start justify-between space-y-4 text-gray-500">
            {/* <!-- icons Container --> */}
            <div class="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
              {/* <!-- Icon 1 --> */}
              <div class="h-8 group">
                <a href="#">
                  <img src={facebookIcon} alt="" class="h-6" />
                </a>
              </div>
              {/* <!-- Icon 2 --> */}
              <div class="h-8 group">
                <a href="#">
                  <img src={twitterIcon} alt="" class="h-6" />
                </a>
              </div>
              {/* <!-- Icon 3 --> */}
              <div class="h-8 group">
                <a href="#">
                  <img src={pinterestIcon} alt="" class="h-6" />
                </a>
              </div>
              {/* <!-- Icon 4 --> */}
              <div class="h-8 group">
                <a href="#">
                  <img src={instagramIcon} alt="" class="h-6" />
                </a>
              </div>
            </div>

            {/* <!-- Copy --> */}
            <div class="font-bold">
              &copy; 2025 Loopstudios. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
