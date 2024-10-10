import { useEffect, useState } from 'react';
import Header from '../Header/index';
import HomeContent from '../HomeContent';
import ProductCard from '../ProductCard';
import Filters from '../Filters';
import Footer from '../Footer';
import './index.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const response = await data.json();
    setProducts(response);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="home-container">
      <Header />
      <HomeContent />

      <div className="filter-toggle-container">
        <div className='total-products-and-filter-btn'>
          <h5 className='total-products'>{products.length} Products</h5>
          {showFilters ? <button className="filter-toggle-btn" onClick={toggleFilters}>
            &lt; Hide Filters
          </button> :
          <button className="filter-toggle-btn" onClick={toggleFilters}>
            &gt; Show Filters
          </button>}
          </div> 
        
        <div className="sort-container">
          <select className="custom-select">
            <option>RECOMMENDED</option>
            <option>NEWEST FIRST</option>
            <option>POPULAR</option>
            <option>PRICE : HIGH TO LOW</option>
            <option>PRICE : LOW TO HIGH</option>
          </select>
        </div>

      </div>

      <div id="products-and-filters-container" className={showFilters ? 'show-filters' : ''}>
        {showFilters && (
          <div className={`filters-container ${showFilters ? 'slide-in' : 'slide-out'}`}>
            <Filters />
          </div>
        )}
        <ul className="all-products-container">
          {products.map((each) => (
            <li key={each.id} className="product-list-item">
              <ProductCard imageSrc={each.image} productName={each.title} />
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default Home;


