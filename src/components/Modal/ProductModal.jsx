import React, { useEffect, useState } from "react";


// Key Features Component
function KeyFeatures() {
  return (
    <div>
      <h2 className="text-xl font-bold">Key Features</h2>
      <ul className="list-disc pl-5 mt-4">
        <li>High performance</li>
        <li>Energy efficient</li>
        <li>Durable and reliable</li>
      </ul>
    </div>
  );
}

// Specifications Component
function Descripition() {
  return (
    <div>
      <h2 className="text-xl font-bold">Descripition</h2>
      <table className="table-auto border-collapse border border-gray-300 w-full mt-4">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Specification</th>
            <th className="border border-gray-300 px-4 py-2">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Weight</td>
            <td className="border border-gray-300 px-4 py-2">2kg</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Dimensions</td>
            <td className="border border-gray-300 px-4 py-2">10x10x5 cm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// Product Details Component
function ProductDetails() {
  return (
    <div>
      <h2 className="text-xl font-bold">Product Details</h2>
      <p className="mt-4">
        This is a high-quality product with great durability and performance. It
        is designed to meet the needs of modern users and offers exceptional
        value.
      </p>
    </div>
  );
}




function Images() {
  const [products, setProducts] = useState([]);
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);

  useEffect(() => {
    // Simulating fetching product details for multiple products
    const fetchedProducts = [
      {
        id: 3,
        image: "https://cdn.moglix.com/p/FMxIewipFqLxG-medium.jpg",
        title: "Sameer 1 HP i-Flo Water Pump with 1 Year Warranty",
        price: 2749,
        originalPrice: 4600,
        discount: "40% OFF",
        reviews: 6,
      },
      {
        id: 4,
        image: "https://bazar91.com/img/ets_blog/post/f600846378-jack-f5-energy-saver-lockstitch-machine.png",
        title: "Advanced Water Pump with High Performance",
        price: 3500,
        originalPrice: 5000,
        discount: "30% OFF",
        reviews: 8,
      },
      {
        id: 5,
        image: "https://bazar91.com/img/ets_blog/post/f600846378-jack-f5-energy-saver-lockstitch-machine.png",
        title: "Advanced Water Pump with High Performance",
        price: 3500,
        originalPrice: 5000,
        discount: "30% OFF",
        reviews: 8,
      },
    ];

    // Set the products state
    setProducts(fetchedProducts);
  }, []);

  if (products.length === 0) {
    // Display a loading indicator or fallback UI until the products are fetched
    return <p>Loading products...</p>;
  }

  // Get the currently selected product
  const selectedProduct = products[selectedProductIndex];

  return (
    <div className="w-full lg:w-full">
      <div className="p-4 flex  flex-col md:flex-row-reverse  justify-between  w-full">
        {/* Main Product Image */}
        <div className="w-full mb-4">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        {/* Thumbnail Gallery */}
        <div className="flex gap-2 flex-row ">
          {products.map((product, index) => (
            <img
              key={product.id}
              src={product.image}
              alt={`Product preview ${index + 1}`}
              className={`w-[200px] h-[80px] border rounded-md cursor-pointer ${
                index === selectedProductIndex ? "border-red-500" : "border-gray-300"
              }`}
              onClick={() => setSelectedProductIndex(index)} // Switch to the clicked product
            />
          ))}
        </div>
     
      </div>
    </div>
  );
}



function ProductModal({onClose}) {
    const [activeTab, setActiveTab] = useState("Key Features");
  
    const renderContent = () => {
      switch (activeTab) {
        case "Key Features":
          return <KeyFeatures />;
        case "Descripition":
          return <Descripition/>;

        case "Product Details":
          return <ProductDetails />;
        case "Images":
          return <Images />;
        default:
          return null;
      }
    };
    return (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 "
          onClick={onClose} // Close modal on clicking the backdrop
        >
       
          <div
            className="bg-white w-full md:max-w-4xl lg:h-[80%] rounded-lg shadow-lg  flex flex-col relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
                       <div className=" absolute top-2 right-5 bg-[#3C3C3C] rounded-full px-4  py-2   text-center text-sm text-white">x</div>         {/* Tabs */}
            <div className="flex border-b border-gray-300 mt-20">

              <button
                className={`flex-1 py-3 text-sm font-medium ${
                  activeTab === "Key Features"
                    ? "text-white bg-blue-500"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab("Key Features")}
              >
                Key Features
              </button>
              <button
                className={`flex-1 py-3 text-sm font-medium ${
                  activeTab === "Description"
                    ? "text-white bg-blue-500"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab("Description")}
              >
                Description
              </button>
              <button
                className={`flex-1 py-3 text-sm font-medium ${
                  activeTab === "Product Details"
                    ? "text-white bg-blue-500"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab("Product Details")}
              >
                Product Details
              </button>
              <button
                className={`flex-1 py-3 text-sm font-medium ${
                  activeTab === "Images"
                    ? "text-white bg-blue-500"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab("Images")}
              >
                Images
              </button>
            </div>
    
            {/* Content */}
            <div className="p-6">{renderContent()}</div>
    
            {/* Close Button */}
           
          </div></div>
    
      );
    }
    

export default ProductModal;
