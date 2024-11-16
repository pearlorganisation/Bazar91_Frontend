import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaTruck, FaMoneyCheckAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { addToCart } from '../../features/Slice/CartSlice';
import ProductModal from '../../components/Modal/ProductModal';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [pinCode, setPinCode] = useState('');
  const [deliveryCheck, setDeliveryCheck] = useState(null);
  const [product, setProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
const dispatch=useDispatch()
  const { id } = useParams(); // Get product id from URL params

  const handleCart=(products)=>{
    dispatch(addToCart(products))}
  useEffect(() => {
    // Here, you would fetch the product data based on the id (using an API call)
    // For now, we mock the product details
    const fetchedProduct = {
      id: 3,
      image: 'https://cdn.moglix.com/p/FMxIewipFqLxG-medium.jpg',
      title: 'Sameer 1 HP i-Flo Water Pump with 1 Year Warranty',
      price: 2749,
      originalPrice: 4600,
      discount: '40% OFF',
      reviews: 6,
    };

    setProduct(fetchedProduct); // Simulating product fetch
  }, [id]);

  
  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handlePinCheck = () => {
    setDeliveryCheck(true); // Mock delivery check result
  };

  if (!product) {
    return <div>Loading...</div>; // Show loading until the product data is available
  }
  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 bg-gray-100">
      {/* Left Column: Image Gallery */}
      <div className="w-full lg:w-2/5">
        <div className="border rounded-lg p-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div className="flex gap-2 overflow-x-auto mt-4">
            <img
              src={product.image}
              alt="Product preview"
              className="w-[80px] h-[80px]  border rounded-md "
            />
            {/* You can add more product images here if needed */}
          </div>
        </div>
      </div>

      {/* Right Column: Product Details */}
      <div className="w-full lg:w-3/5 space-y-4">
        {/* Product Title */}
        <h2 className="text-2xl font-bold">{product.title}</h2>

        {/* Rating */}
        <div className="flex items-center gap-2 text-green-600">
          <span className="font-bold">4.6</span>
          <span>({product.reviews} Reviews)</span>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-blue-600">₹{product.price}</span>
          <span className="text-gray-500 line-through">₹{product.originalPrice}</span>
          <span className="text-green-600 font-semibold">{product.discount}</span>
        </div>

        {/* Power Input Options */}
        <div className="space-x-2">
          {["900W", "750W", "850W"].map((power) => (
            <button key={power} className="px-3 py-1 border rounded-lg">
              {power}
            </button>
          ))}
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4">
          <button onClick={decreaseQty} className="px-3 py-1 border">-</button>
          <span>{quantity}</span>
          <button onClick={increaseQty} className="px-3 py-1 border">+</button>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-[#24B9D7] text-white px-4 py-2 rounded-lg" onClick={()=>{
handleCart(product)}}>Add to Cart</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Buy Now</button>
        </div>

        {/* Offers */}
        <div className="bg-green-50 p-4 rounded-lg border">
          <h3 className="font-semibold text-green-700">Offers and Coupons</h3>
          <p className="text-sm mt-1">Get Flat Rs 50 Off on Power Tools | Min cart value Rs 2500</p>
        </div>

        {/* Delivery Details */}
        <div className="border p-4 rounded-lg space-y-4">
        
          {/* {deliveryCheck && (
            <div className="space-y-2">
              <p className="flex items-center text-green-600">
                <FaTruck className="mr-2" /> Free Delivery
              </p>
              <p className="flex items-center text-green-600">
                <FaMoneyCheckAlt className="mr-2" /> COD Available
              </p>
            </div>
          )} */}
          <p className='text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, alias. Nobis, doloremque ipsa. Nemo sunt, voluptatem eius quos at suscipit rerum in deserunt delectus distinctio unde! Culpa fuga ipsa vel?Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vero optio libero, odio quia minima perspiciatis corporis qui dignissimos illo. Omnis ad consequatur magni expedita vel ullam! Animi, exercitationem corporis.</p>
          <span> 
          <span  className='text-blue-500'      onClick={() => setIsModalOpen(true)}>Readmore</span>
          {isModalOpen && <ProductModal  onClose={closeModal} />}
    </span>


        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
