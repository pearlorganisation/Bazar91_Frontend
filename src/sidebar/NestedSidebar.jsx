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
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState(null);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Primary Sidebar */}
      <aside className="w-1/4 bg-white shadow-md">
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              className={`flex items-center py-3 px-2 rounded hover:bg-gray-200 cursor-pointer ${
                category.isHighlighted ? 'text-red-500 font-semibold' : 'text-gray-700'
              } ${hoveredCategory === category.name ? 'bg-gray-200' : ''}`}
              onMouseEnter={() => {
                setHoveredCategory(category.name);
                setHoveredSubcategory(null); // Reset subcategory on hover of new category
              }}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <span className="text-xl mr-3">{category.icon}</span>
              <span className="text-sm">{category.name}</span>
              {category.subcategories.length > 0 && (
                <span className="ml-auto text-gray-500">›</span>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* Secondary Sidebar (Subcategories) */}
      {hoveredCategory && (
        <aside
          className="w-1/4 bg-gray-50 shadow-md"
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
                    hoveredSubcategory === subcategory.name ? 'bg-gray-200' : ''
                  }`}
                  onMouseEnter={() => setHoveredSubcategory(subcategory.name)}
                  onMouseLeave={() => setHoveredSubcategory(null)}
                >
                  <span className="text-sm text-gray-700">{subcategory.name}</span>
                  {subcategory.items.length > 0 && (
                    <span className="ml-auto text-gray-500">›</span>
                  )}
                </li>
              ))}
          </ul>
        </aside>
      )}

      {/* Tertiary Sidebar (Items) */}
      {hoveredSubcategory && (
        <aside
          className="w-1/4 bg-gray-50 shadow-md"
          onMouseEnter={() => setHoveredSubcategory(hoveredSubcategory)}
          onMouseLeave={() => setHoveredSubcategory(null)}
        >
          <ul>
            {categories
              .find((category) => category.name === hoveredCategory)
              ?.subcategories.find((subcat) => subcat.name === hoveredSubcategory)
              ?.items.map((item, index) => (
                <li key={index} className="py-2 px-2 hover:bg-gray-200 cursor-pointer rounded">
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
          </ul>
        </aside>
      )}
    </div>
  );
}

export default NestedSidebar;
