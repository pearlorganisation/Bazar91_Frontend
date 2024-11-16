import React, { useState } from 'react';

const categories = [
  {
    name: 'Office Stationery & Supplies',
    icon: '📄',
    subcategories: [
      {
        name: 'Printers',
        items: ['Ink Tank Printer', 'Laser Printer', 'Inkjet Printer', 'Thermal Printer', 'Barcode Printers']
      },
      { name: 'Mobiles', items: [] },
      { name: 'CCTV Cameras', items: [] },
      { name: 'Chairs', items: [] },
      { name: 'Audio & Video', items: [] },
    ]
  },
  { name: 'Electrical Tools & Appliances', icon: '🔌', subcategories: [] },
  { name: 'Industrial Tools & Equipment', icon: '⚙️', subcategories: [] },
  { name: 'Agriculture & Farming Equipment', icon: '🌾', subcategories: [] },
  { name: 'Medical, Hospital & Lab Supplies', icon: '🩺', subcategories: [] },
  { name: 'Automotive Supplies', icon: '🚗', subcategories: [] },
  { name: 'Safety Supplies', icon: '🛡️', subcategories: [] },
  { name: 'Building & Construction Supplies', icon: '🏗️', subcategories: [] },
  { name: 'Packaging & Material Handling', icon: '📦', subcategories: [] },
  { name: 'View All Categories', icon: '📁', subcategories: [], isHighlighted: true },
];

function NestedSidebar() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.name === selectedCategory ? null : category.name);
    setSelectedSubcategory(null); // Reset subcategory on new category selection
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory.name === selectedSubcategory ? null : subcategory.name);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <aside className="w-full bg-white shadow-md">
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <div
                className={`flex items-center py-3 px-2 rounded hover:bg-gray-200 cursor-pointer ${
                  category.isHighlighted ? 'text-red-500 font-semibold' : 'text-gray-700'
                } ${selectedCategory === category.name ? 'bg-gray-200' : ''}`}
                onClick={() => handleCategoryClick(category)}
              >
                <span className="text-xl mr-3">{category.icon}</span>
                <span className="text-sm">{category.name}</span>
                {category.subcategories.length > 0 && (
                  <span className="ml-auto text-gray-500">
                    {selectedCategory === category.name ? '▼' : '›'}
                  </span>
                )}
              </div>
              {/* Render Subcategories Inline */}
              {selectedCategory === category.name && category.subcategories.length > 0 && (
                <ul className="ml-8">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <li key={subIndex}>
                      <div
                        className={`flex items-center py-2 px-2 hover:bg-gray-200 cursor-pointer rounded ${
                          selectedSubcategory === subcategory.name ? 'bg-gray-200' : ''
                        }`}
                        onClick={() => handleSubcategoryClick(subcategory)}
                      >
                        <span className="text-sm text-gray-700">{subcategory.name}</span>
                        {subcategory.items.length > 0 && (
                          <span className="ml-auto text-gray-500">
                            {selectedSubcategory === subcategory.name ? '▼' : '›'}
                          </span>
                        )}
                      </div>
                      {/* Render Items Inline */}
                      {selectedSubcategory === subcategory.name && (
                        <ul className="ml-8">
                          {subcategory.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="py-2 px-2 hover:bg-gray-200 cursor-pointer rounded"
                            >
                              <span className="text-sm text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export default NestedSidebar;
