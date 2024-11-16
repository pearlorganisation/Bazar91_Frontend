import React, { useState } from 'react';

const BrandListing = () => {
  const [filters, setFilters] = useState({
    category: [],
    price: 500,
    rating: 3,
  });

  const handleCategoryChange = (category) => {
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
      rating: e.target.value,
    }));
  };

  return (
    <div className="container mx-auto p-4 flex space-x-6">
      {/* Left Side Filters */}
      <div className="filter-section w-1/4 bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Filter by Category</h2>
        <ul className="space-y-3">
          <li>
            <input
              type="checkbox"
              id="category1"
              checked={filters.category.includes('Category 1')}
              onChange={() => handleCategoryChange('Category 1')}
              className="mr-2"
            />
            <label htmlFor="category1">Category 1</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="category2"
              checked={filters.category.includes('Category 2')}
              onChange={() => handleCategoryChange('Category 2')}
              className="mr-2"
            />
            <label htmlFor="category2">Category 2</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="category3"
              checked={filters.category.includes('Category 3')}
              onChange={() => handleCategoryChange('Category 3')}
              className="mr-2"
            />
            <label htmlFor="category3">Category 3</label>
          </li>
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
          {[1, 2, 3].map((rating) => (
            <li key={rating}>
              <input
                type="radio"
                id={`rating${rating}`}
                name="rating"
                value={rating}
                checked={filters.rating == rating}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              img: 'https://bazar91.com/img/ets_blog/post/brother.png',
              name: 'Brand 1',
              description:
                'Brand 1 is known for high-quality products in various categories. Check out their latest collection!',
            },
            {
              img: 'https://bazar91.com/img/ets_blog/post/bazar91.png',
              name: 'Brand 2',
              description:      'Explore Brand 2s innovative designs and trending styles for all your needs.',
            },
            {
              img: 'https://bazar91.com/img/ets_blog/post/brother-innov-is-bp3600-embroidery-machine.jpg',
              name: 'Brand 3',
              description:
                'Brand 3 offers a wide range of products that combine style and functionality.',
            },
          ].map((brand, index) => (
            <div key={index} className="brand-item bg-white p-4 rounded-lg shadow-lg">
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
      </div>
    </div>
  );
};

export default BrandListing;
