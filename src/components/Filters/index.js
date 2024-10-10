import React, { useState } from 'react';
import './index.css';

const Filters = () => {
  const [filters, setFilters] = useState({
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });

  const toggleDropdown = (filter) => {
    setFilters((prev) => ({ ...prev, [filter]: !prev[filter] }));
  };

  return (
    <div className="filter-container">
      <div className="filter-item">
        <input type="checkbox" id="customizable" />
        <label htmlFor="customizable">Customizable</label>
      </div>

      <div className="filter-item">
        <div className="filter-header" onClick={() => toggleDropdown('idealFor')}>
          <span>Ideal For</span>
          <span>{filters.idealFor ? '-' : '+'}</span>
        </div>
        {filters.idealFor && (
          <div className="filter-dropdown">
            <p className="unselect-all">Unselect all</p>
            <div>
              <input type="checkbox" id="men" />
              <label htmlFor="men">Men</label>
            </div>
            <div>
              <input type="checkbox" id="women" />
              <label htmlFor="women">Women</label>
            </div>
            <div>
              <input type="checkbox" id="kids" />
              <label htmlFor="kids">Baby & Kids</label>
            </div>
          </div>
        )}
      </div>

      {/* Repeat similar structure for other filters */}
      {['occasion', 'work', 'fabric', 'segment', 'suitableFor', 'rawMaterials', 'pattern'].map((filter) => (
        <div className="filter-item" key={filter}>
          <div className="filter-header" onClick={() => toggleDropdown(filter)}>
            <span>{filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
            <span>{filters[filter] ? '-' : '+'}</span>
          </div>
          {filters[filter] && <div className="filter-dropdown"> {/* Add content here */} </div>}
        </div>
      ))}
    </div>
  );
};

export default Filters;
