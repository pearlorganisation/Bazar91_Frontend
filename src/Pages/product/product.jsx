import React, { useState, useEffect } from "react";
import { FaTruck, FaMoneyCheckAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/Slice/CartSlice";
import ProductModal from "../../components/Modal/ProductModal";
import { getProductById } from "../../features/actions/product/productAction";
import parse from "html-react-parser";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [pinCode, setPinCode] = useState("");
  const [deliveryCheck, setDeliveryCheck] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams(); // Get product id from URL params

  const { isSuccess, ProductData } = useSelector((state) => state.product);
  const [mainImage, setMainImage] = useState();

  // Fetch product details
  useEffect(() => {
    dispatch(getProductById(id)).then((res) => {
      console.log("first", res);
      if (res?.payload?.success) {
        setMainImage(
          res?.payload?.data?.productBanner?.secure_url || "default.png"
        );
      }
    });
  }, [id, dispatch]);

  const handleCart = () => {
    if (ProductData) {
      dispatch(addToCart({ ...ProductData, quantity }));
    }
  };

  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handlePinCheck = () => {
    setDeliveryCheck(true); // Mock delivery check result
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!ProductData) {
    return <div>Loading...</div>; // Show loading until the product data is available
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 bg-[#ffffff]">
      {/* Left Column: Image Gallery */}
      <div className="w-full lg:w-2/5">
        <div className="border rounded-lg p-4">
          <img
            src={mainImage}
            alt={ProductData.productTitle || "Product Image"}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto mt-4">
          {ProductData.productImages?.map((productImage, index) => (
            <img
              key={index}
              src={productImage.secure_url}
              alt={`Product Preview ${index + 1}`}
              className="w-20 h-20 border rounded-md cursor-pointer"
              onClick={() => setMainImage(productImage.secure_url)}
            />
          ))}
        </div>
      </div>

      {/* Right Column: Product Details */}
      <div className="w-full lg:w-3/5 space-y-4">
        {/* Product Title */}
        <h2 className="text-2xl font-bold">{ProductData?.productTitle}</h2>

        <h1 className="">
          Brand :
          <span className="text-orange-500">{ProductData?.brand?.title}</span>
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-2 text-green-600">
          <span className="font-bold">4.6</span>
          <span>({ProductData?.reviews || 0} Reviews)</span>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-blue-600">
            ₹{ProductData.discountedPrice}
          </span>
          <span className="text-gray-500 line-through">
            ₹{ProductData.price}
          </span>
          <span className="text-green-600 font-semibold">
            {ProductData.discount}%
          </span>
        </div>

        {/* Power Input Options */}
        {/* <div className="space-x-2">
          {["900W", "750W", "850W"].map((power) => (
            <button key={power} className="px-3 py-1 border rounded-lg">
              {power}
            </button>
          ))}
        </div> */}

        {/* Quantity Selector */}
        <div className="flex items-center gap-4">
          <button onClick={decreaseQty} className="px-3 py-1 border">
            -
          </button>
          <span>{quantity}</span>
          <button onClick={increaseQty} className="px-3 py-1 border">
            +
          </button>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            className="bg-[#24B9D7] text-white px-4 py-2 rounded-lg"
            onClick={handleCart}
          >
            Add to Cart
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Buy Now
          </button>
        </div>

        {/* Offers */}
        <div className="bg-green-50 p-4 rounded-lg border">
          <h3 className="font-semibold text-green-700">Offers and Coupons</h3>
          <p className="text-sm mt-1">
            Get Flat Rs 50 Off on Power Tools | Min cart value Rs 2500
          </p>
        </div>

        {/* Delivery Details */}
        <div className="border p-4 rounded-lg space-y-4 bg-[#FFFFFF] pl-10">
          <div>
            {ProductData?.productDescription &&
              parse(ProductData?.productDescription)}
            {ProductData?.productDetails && parse(ProductData?.productDetails)}
          </div>
          <span>
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              Read more
            </span>
            {isModalOpen && <ProductModal onClose={closeModal} />}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
