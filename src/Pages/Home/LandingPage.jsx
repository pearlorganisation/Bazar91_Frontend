import React, { useState } from "react";
import BannerSlider from "../../components/slider/BannerSlider";
import Slider from "react-slick";
import SimpleSlider from "../../components/slider/slider";
const categories = [
  {
    name: "All Brands",
    icon: "📄",
    subcategories: [
      {
        name: "Bernena",
        items: [
          "Ink Tank Printer",
          "Laser Printer",
          "Inkjet Printer",
          "Thermal Printer",
          "Barcode Printers",
        ],
      },
      { name: "Brothers", items: [] },
      { name: "Bruce", items: [] },
      { name: "Butterfly", items: [] },
      { name: "Fortever", items: [] },
      { name: "Futton", items: [] },
      { name: "Generic", items: [] },
    ],
  },
  {
    name: "Sewing Machine",
    icon: "📄",
    subcategories: [
      {
        name: "Industrial",
        items: [
          "Ink Tank Printer",
          "Laser Printer",
          "Inkjet Printer",
          "Thermal Printer",
          "Barcode Printers",
        ],
      },
      { name: "Sewing Accessories", items: [] },
      { name: "Home Demo", items: [] },
      { name: "Sewing Classes", items: [] },
      { name: "FlatLock", items: [] },
    ],
  },
  {
    name: "Sewing Embroidery",
    icon: "📄",
    subcategories: [
      {
        name: "Industrial",
        items: [
          "Ink Tank Printer",
          "Laser Printer",
          "Inkjet Printer",
          "Thermal Printer",
          "Barcode Printers",
        ],
      },
      { name: "Sewing Accessories", items: [] },
      { name: "Home Demo", items: [] },
      { name: "Sewing Classes", items: [] },
      { name: "FlatLock", items: [] },
    ],
  },
  {
    name: "Embroidery Design Life",
    icon: "📄",
    subcategories: [
      { name: "Free Design", items: [] },
      { name: "Paid Design", items: [] },
      { name: "All Design", items: [] },
      { name: "Software", items: [] },
    ],
  },
  { name: "Videos", icon: "🔌", subcategories: [] },
  { name: "India Mart", icon: "🔌", subcategories: [] },
  { name: "JustDial", icon: "🔌", subcategories: [] },
  { name: "Blog", icon: "🔌", subcategories: [] },



];

const cardData = {
  imgData: [
    {
      imgUrl:
        "https://cdn.moglix.com/cms/utility/1729576611017-TzKF8qN80dsUYmO8Mhi24CeC.png",
    },
    {
      imgUrl:
        "https://cdn.moglix.com/cms/flyout/Image_2024-11-06_10:34:14.830_platinumNBC_desktop.jpg",
    },
    {
      imgUrl:
        "https://cdn.moglix.com/cms/flyout/Images_2024-09-19_16-46-58_L0-NDD_Desktop%201.jpg",
    },
    {
      imgUrl:
        "https://cdn.moglix.com/cms/flyout/Image_2024-11-06_10:34:14.830_platinumNBC_desktop.jpg",
    },
    {
      imgUrl:
        "https://cdn.moglix.com/cms/flyout/Images_2024-09-19_16-46-58_L0-NDD_Desktop%201.jpg",
    },
  ],
  tabs: [
    { label: "Delivery Within", subtext: "24 HOURS" },
    { label: "ELECTROWER", subtext: "Up to 30% OFF" },
    { label: "LONGWAY", subtext: "Up to 60% OFF" },
    { label: "SKF AUTOMOTIVE", subtext: "Up to 45% OFF" },
    { label: "NBC", subtext: "Up to 50% OFF" },
  ],
};

function LandingPage() {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <>
      <div className="grid grid-cols-[20rem_auto] lg:grid-cols-[20rem_auto] sm:grid-cols-[56rem_auto] h-auto  w-full overflow-hidden bg-gray-100">
    

        {/* Sidebar */}
        <div
          className={`w-full  gap-4  hidden bg-white shadow-md mt-4 transition-transform duration-300 ease-in-out ${
            isSidebarVisible ? "transform-none" : "transform -translate-x-full"
          } lg:transform-none lg:translate-x-0 lg:block fixed lg:relative`}
        >
          <ul>
            {categories.map((category, index) => (
              <li
                key={index}
                className={`flex items-center px-1 py-2 rounded hover:bg-gray-200 cursor-pointer ${
                  category.isHighlighted
                    ? "text-red-500 font-semibold"
                    : "text-gray-700"
                } ${hoveredCategory === category.name ? "bg-gray-200" : ""}`}
                onMouseEnter={() => {
                  setHoveredCategory(category.name);
                  setHoveredSubcategory(null);
                }}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="text-sm">{category.name}</span>
                {category.subcategories.length > 0 && (
                  <span className=" text-gray-500">›  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Subcategories Sidebar */}
        {hoveredCategory && (
          <aside
            className="w-1/4 bg-gray-50 shadow-md absolute top-0 left-60  mt-[90px] z-20"
            onMouseEnter={() => setHoveredCategory(hoveredCategory)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <ul>
              {categories
                .find((category) => category.name === hoveredCategory)
                ?.subcategories.map((subcategory, index) => (
                  <li
                    key={index}
                    className={`py-2 px-2 hover:bg-gray-200 cursor-pointer rounded ${
                      hoveredSubcategory === subcategory.name
                        ? "bg-gray-200"
                        : ""
                    }`}
                    onMouseEnter={() => setHoveredSubcategory(subcategory.name)}
                    onMouseLeave={() => setHoveredSubcategory(null)}
                  >
                    <span className="text-sm text-gray-700">
                      {subcategory.name}
                    </span>
                    {subcategory.items.length > 0 && (
                      <span className="ml-auto text-gray-500">›</span>
                    )}
                  </li>
                ))}
            </ul>
          </aside>
        )}

        {/* Items Sidebar */}
        {hoveredSubcategory && (
          <div className="w-1/4 bg-gray-50 shadow-md absolute top-0  left-[40%] mt-[90px] z-20">
            <ul>
              {categories
                .find((category) => category.name === hoveredCategory)
                ?.subcategories.find(
                  (subcat) => subcat.name === hoveredSubcategory
                )
                ?.items.map((item, index) => (
                  <li
                    key={index}
                    className="py-2 px-2 hover:bg-gray-200 cursor-pointer rounded"
                  >
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
            </ul>
          </div>
        )}

        {/* Main Content */}
        <BannerSlider imgArray={cardData.imgData} tabs={cardData.tabs} />
      </div>

      <div className="px-10 py-5">
        <h1 className="text-black text-2xl font-bold mb-3">Best Sellers</h1>
        <SimpleSlider />
        
      </div>
    </>
  );
}

export default LandingPage;
