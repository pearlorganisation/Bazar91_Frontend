import React from "react";
import { IoWallet } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { SiAdguard } from "react-icons/si";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (


    <>
       <hr class="border-t border-gray-300 mb-10 mt-6" />
      <div className="flex flex-col md:flex-row gap-10 px-10 pb-6 mt-10">
        <div className="border-l border-gray-300 pl-4 md:border-none">
          <IoWallet className="text-[#D9232D]" size={28} />
          <div className="text-[#3C3C3C] font-bold">Great Value</div>
          <div className="text-xs text-[#6f6f6f]">
            Most popular brands with the widest range of selection at best
            prices
          </div>
        </div>
        <div className="border-l border-gray-300 pl-4">
          <TbTruckDelivery className="text-[#D9232D]" size={28} />
          <div className="text-[#3C3C3C] font-bold">Great Value</div>
          <div className="text-xs text-[#6f6f6f]">
            Most popular brands with widest range of selection at best prices
          </div>
        </div>
        <div className="border-l border-gray-300 pl-4">
          <RiSecurePaymentLine className="text-[#D9232D]" size={28} />
          <div className="text-[#3C3C3C] font-bold">Great Value</div>
          <div className="text-xs text-[#6f6f6f]">
            Most popular brands with widest range of selection at best prices
          </div>
        </div>
        <div className="border-l border-gray-300 pl-4">
          <SiAdguard className="text-[#D9232D]" size={28} />
          <div className="text-[#3C3C3C] font-bold">Buyer Protection</div>
          <div className="text-xs text-[#6f6f6f]">
            Most popular brands with widest range of selection at best prices
          </div>
        </div>
        <div className="border-l border-gray-300 pl-4">
          <TfiHeadphoneAlt className="text-[#D9232D]" size={28} />
          <div className="text-[#3C3C3C] font-bold">365 Days Help Desk</div>
          <div className="flex flex-row gap-3 items-center">
            <IoLogoWhatsapp className="text-green-500" size={18} />
            <div className="text-xs text-[#6f6f6f]">4979870276</div>
          </div>
        </div>
      </div>
      <hr class="border-t border-gray-300 mb-10 mt-6" />
      <div className="flex flex-col  gap-10 md:flex-row md:gap-56 px-10">
      <div className="flex flex-col gap-4 ">
      <div className="text-[#3C3C3C] font-bold flex flex-col">Bazar91</div>
        <div className="text-[#3C3C3C] text-xs">
        <div>About Us</div>
        <div>Careers</div>
        <div>Press</div>
        <div>Testimonials</div>
        <div>Blog</div>
        <div>Articles</div>
        </div>
        </div>
        <div className="flex flex-col gap-4 ">
      <div className="text-[#3C3C3C] font-bold flex flex-col"> Help</div>
        <div className="text-[#3C3C3C] text-xs">
        <div>Contact Us</div>
        <div>Track My Order</div>
        <div>Buying Guide</div>
            </div>
        </div>
        <div className="flex flex-col gap-4 md:pl-4">
      <div className="text-[#3C3C3C] font-bold flex flex-col">FAQs</div>
        <div className="text-[#3C3C3C] text-xs">
        <div>Order Tracking</div>       
        <div>Cancellation and Return</div>
        <div>Refund</div>
        <div>Payment Option</div>
    
        </div>
        </div>
        <div className="flex flex-col gap-4 ">
      <div className="text-[#3C3C3C] font-bold flex flex-col">Bazar91</div>
        <div className="text-[#3C3C3C] text-xs">
        <div>Popular Searches</div>
        <div>Best Deals</div>
        <div>Online Assist
        </div>
        <div>Industry Store
        </div>
        <div>Top Buying Requirement
        </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
      <div className="text-[#3C3C3C] font-bold flex flex-col">Miscellaneous</div>
        <div className="text-[#3C3C3C] text-sm">
        <div>Bulk Enquiry</div>
        <div>Bazar91 Business</div>
        <div>Supplier Central
        </div>
        <div>Testimonials</div>
        <div>Credlix
        </div>
        <div>DigiMRO
        </div>
        <div>Zoglix</div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
