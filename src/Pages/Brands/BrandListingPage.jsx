import React, { useState } from 'react';

const BrandListing = () => {
  const [filters, setFilters] = useState({
    category: [],
    price: 300,
    rating: 3,
  });

  const handleCategoryChange = (category) => {
    console.log("category",category)
    setFilters((prevFilters) => {
      const newCategory = prevFilters.category.includes(category)
        ? prevFilters.category.filter((item) => item !== category)
        : [...prevFilters.category, category];
      return { ...prevFilters, category: newCategory };
    });
  };

  const handlePriceChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: e.target.value,
    }));
  };

  const handleRatingChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      rating: Number(e.target.value),
    }));
  };

  const brands = [
    {
      img: 'https://cdn.moglix.com/cms/flyout/Images_2024-09-19_16-46-58_L0-NDD_Desktop%201.jpg',
      name: 'Brand ',
      category: 'Category A',
      price: 150,
      rating: 4,
      description: 'Brand Alpha offers premium quality products for every need.',
    },
    {
      img: 'https://cdn.moglix.com/cms/flyout/Image_2024-11-06_10:34:14.830_platinumNBC_desktop.jpg',
      name: 'Brand 1',
      category: 'Category B',
      price: 250,
      rating: 5,
      description: 'Discover the innovative solutions provided by Brand Beta.',
    },
    {
      img: 'https://cdn.moglix.com/cms/utility/1729576611017-TzKF8qN80dsUYmO8Mhi24CeC.png',
      name: 'Brand 2',
      category: 'Category A',
      price: 300,
      rating: 3,
      description: 'Brand Gamma combines style and functionality in all its offerings.',
    },
    {
      img: 'https://cdn.moglix.com/cms/flyout/Image_2024-11-14_10:57:54.927_desktop-gold-vinspire.jpg',
      name: 'Brand  3 ',
      category: 'Category C',
      price: 400,
      rating: 2,
      description: 'Explore the diverse range of products from Brand .',
    },
    {
      img: 'https://cdn.moglix.com/cms/flyout/Image_2024-11-14_10:57:54.403_Gold-Desktop.jpg',
      name: 'Brand Epsilon',
      category: 'Category B',
      price: 100,
      rating: 1,
      description: 'Brand Epsilon is known for its affordability and quality.',
    },
  ];

  // Filter logic
  const filteredBrands = brands.filter((brand) => {
    const matchesCategory =
      filters.category.length === 0 || filters.category.includes(brand.category);
    const matchesPrice = brand.price <= filters.price;
    const matchesRating = brand.rating >= filters.rating;

    return matchesCategory && matchesPrice && matchesRating;
  });

  return (
  <>


  <div className='flex flex-col' ><img src={bannerimg} alt="" className='w-full h-96' />
  <div className="self-center text-2xl font-extrabold text-gray-800 mt-5 tracking-tight leading-snug ">
  New Brand
</div>

  </div>
    <div className="container mx-auto p-4 flex space-x-6">
      {/* Left Side Filters */}
      <div className="filter-section w-1/4 bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Filter by Category</h2>
        <ul className="space-y-3">
          {['Category A', 'Category B', 'Category C'].map((category) => (
            <li key={category}>
              <input
                type="checkbox"
                id={category}
                checked={filters.category.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="mr-2"
              />
              <label htmlFor={category}>{category}</label>
            </li>
          ))}
        </ul>

        <h2 className="text-lg font-semibold mt-6 mb-4">Filter by Price Range</h2>
        <input
          type="range"
          id="price"
          min="0"
          max="500"
          step="10"
          value={filters.price}
          onChange={handlePriceChange}
          className="w-full"
        />
        <p className="text-sm mt-2">Price Range: ${filters.price} - $500</p>

        <h2 className="text-lg font-semibold mt-6 mb-4">Filter by Rating</h2>
        <ul className="space-y-3">
          {[1, 2, 3, 4, 5].map((rating) => (
            <li key={rating}>
              <input
                type="radio"
                id={`rating${rating}`}
                name="rating"
                value={rating}
                checked={filters.rating === rating}
                onChange={handleRatingChange}
                className="mr-2"
              />
              <label htmlFor={`rating${rating}`}>{rating} Star & Above</label>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side Images Section */}
      <div className="brands-section w-3/4">
        <h2 className="text-2xl font-semibold mb-6">Brand List</h2>
        {filteredBrands.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBrands.map((brand, index) => (
              <div
                key={index}
                className="brand-item bg-white p-4 rounded-lg shadow-lg"
              >
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <div className="brand-details">
                  <h3 className="text-lg font-semibold">{brand.name}</h3>
                  <p className="text-sm text-gray-600">{brand.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No brands match the selected filters.</p>
        )}
      </div>
    </div></>
  );
};

export default BrandListing;
