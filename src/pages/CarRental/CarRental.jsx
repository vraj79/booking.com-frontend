import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./carrental.css";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";

const CarRental = () => {
  return (
    <div>
        <Header type={"hotel"}/>
      <div id="top_search_container">
        <div className="car_search_container">
          <h3 className="car_search_heading">Car hire for any kind of trip</h3>
          <p>Compare deals for the biggest car hire companies</p>
          <div className="input_radio">
            <label htmlFor="same_location">
              <input
                id="same_location"
                name="location"
                type="radio"
                defaultChecked
              />
              Return to same location
            </label>
            <label htmlFor="different_location">
              <input id="different_location" name="location" type="radio" />
              Return to different location
            </label>
          </div>
          <div className="car_search_section">
            <div className="car_search">
              <i className="ri-car-line" />
              <input type="text" placeholder="pick-up-location" />
            </div>
            <div className="date_time" id="date_btn">
              <i className="ri-calendar-2-line" />
              <input type="date" />
              <input type="time" />
            </div>
            <div className="date_time" id="date_btn">
              <i className="ri-calendar-2-line" />
              <input type="date" />
              <input type="time" />
            </div>
            <button id="search">Search</button>
          </div>
          <div className="drive_age_container">
            <label htmlFor="driver_age">
              <input type="checkbox" id="driver_age" /> Driver aged between
              30-65
            </label>
            <i className="ri-information-line" />
            <label
              style={{ display: "none" }}
              className="driver_age_value"
              htmlFor
            >
              Driver's Age
              <input type="text" placeholder="Name" />
            </label>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="covid_wrapper">
          <div className="info_icon_box">
            <i className="ri-information-line" />
          </div>
          <div className="covid_contents">
            <h3>
              Clean cars. Flexible bookings. Socially distant rental counters.
            </h3>
            <p>
              We’re working with our partners to keep you safe and in the
              driving seat.
              <Link to="https://www.booking.com/cars-covid-19-update.html?label=gen173nr-1DCAEoggI46AdIM1gEaGyIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4Ap_flpgGwAIB0gIkOTA3NzE2ZjgtZTBjNi00YmRkLTk5YjctNTk4MTkwMzc4NWU52AIE4AIB&sid=0e1241b49b71e375ac77857b567d069c&aid=304142">
                Learn more
              </Link>
            </p>
          </div>
        </div>
        <div className="discount_sign_in">
          <div className="discount_10percent_logo">
            <img
              src="https://t-cf.bstatic.com/static/img/cars/cars_genius_discount/08e39e81430e2376eeef1c607f4ae513d53408a6.svg"
              alt=""
            />
          </div>
          <div className="discount_contents">
            <h3>Sign in to save 10% with Genius</h3>
            <p>
              You're eligible for discounts on select car rentals –
              <Link to="/login">sign in now!</Link>
            </p>
          </div>
          <i className="ri-close-line" />
        </div>
        <div className="popular_car_brands">
          <h1 className="heading">Popular car hire brands</h1>
          <div className="swiper mySwiper1">
            <div className="swiper-wrapper">
              <div className="swiper-slide brand_slide">
                <img
                  src="https://cdn.rcstatic.com/images/supplier_logos/europcar_logo_lrg.gif"
                  alt=""
                />
              </div>
              <div className="swiper-slide brand_slide">
                <img
                  src="https://cdn.rcstatic.com/images/supplier_logos/alamo_logo_lrg.gif"
                  alt=""
                />
              </div>
              <div className="swiper-slide brand_slide">
                <img
                  src="https://cdn.rcstatic.com/images/suppliers/flat/sixt_logo_lrg.gif"
                  alt=""
                />
              </div>
              <div className="swiper-slide brand_slide">
                <img
                  src="https://cdn.rcstatic.com/images/supplier_logos/avis_logo_lrg.gif"
                  alt=""
                />
              </div>
              <div className="swiper-slide brand_slide">
                <img
                  src="https://cdn.rcstatic.com/images/supplier_logos/enterprise_logo_lrg.gif"
                  alt=""
                />
              </div>
              <div className="swiper-slide brand_slide">
                <img
                  src="https://cdn.rcstatic.com/images/supplier_logos/dollar_logo_lrg.gif"
                  alt=""
                />
              </div>
              <div className="swiper-slide brand_slide">
                <img
                  src="https://cdn.rcstatic.com/images/supplier_logos/thrifty_logo_lrg.gif"
                  alt=""
                />
              </div>
              <div className="swiper-slide brand_slide">
                <img
                  src="https://cdn.rcstatic.com/images/suppliers/flat/sicily_by_car_logo_lrg.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="popular_destination">
          <h1 className="heading">Popular destinations for car hire</h1>
          <div className="popular_destination_container">
            <div className="popular_destination_item">
              <div className="popular_destination_poster">
                <img
                  src="https://t-cf.bstatic.com/xdata/images/city/360x240/613095.webp?k=8caf960d96a59e284ac1518ac8777e89d17fda6572acd84dbec151f627c7bf07&o="
                  alt=""
                />
              </div>
              <div className="popular_destination_contents">
                <h3 className="popular_contents_title">London</h3>
                <p>Car hire in 75 pick-up locations</p>
                <p className="price_rates">
                  <i className="ri-roadster-line" /> From ₹3,721.11
                </p>
                <p>
                  <Link to="/carrentals">Search rental cars in London</Link>
                </p>
              </div>
            </div>
            <div className="popular_destination_item">
              <div className="popular_destination_poster">
                <img
                  src="https://t-cf.bstatic.com/xdata/images/city/360x240/613088.webp?k=a370ac3fb385fb211b35a79a42b0e968ddb458be37108af476c558bf4cedc1f3&o="
                  alt=""
                />
              </div>
              <div className="popular_destination_contents">
                <h3 className="popular_contents_title">London</h3>
                <p>Car hire in 75 pick-up locations</p>
                <p className="price_rates">
                  <i className="ri-roadster-line" /> From ₹3,721.11
                </p>
                <p>
                  <Link to="/carrentals">Search rental cars in London</Link>
                </p>
              </div>
            </div>
            <div className="popular_destination_item">
              <div className="popular_destination_poster">
                <img
                  src="https://t-cf.bstatic.com/xdata/images/city/360x240/971353.webp?k=a5b47d2c38469086427837dfe64ab2e6f57ba52f0504359ef4cc02dc4b9b0737&o="
                  alt=""
                />
              </div>
              <div className="popular_destination_contents">
                <h3 className="popular_contents_title">London</h3>
                <p>Car hire in 75 pick-up locations</p>
                <p className="price_rates">
                  <i className="ri-roadster-line" /> From ₹3,721.11
                </p>
                <p>
                  <Link to="/carrentals">Search rental cars in London</Link>
                </p>
              </div>
            </div>
            <div className="popular_destination_item">
              <div className="popular_destination_poster">
                <img
                  src="https://t-cf.bstatic.com/xdata/images/city/360x240/619932.webp?k=81c20cf1191a1d05472b45413bed3cee67dc92b8c1387c60a960beb5629f109d&o="
                  alt=""
                />
              </div>
              <div className="popular_destination_contents">
                <h3 className="popular_contents_title">London</h3>
                <p>Car hire in 75 pick-up locations</p>
                <p className="price_rates">
                  <i className="ri-roadster-line" /> From ₹3,721.11
                </p>
                <p>
                  <Link to="/carrentals">Search rental cars in London</Link>
                </p>
              </div>
            </div>
            <div className="popular_destination_item">
              <div className="popular_destination_poster">
                <img
                  src="https://t-cf.bstatic.com/xdata/images/city/360x240/645577.webp?k=81d61cb4e120af4d4218386546a117b77ef18dfcf3727d186ec3a1aad60f38fe&o="
                  alt=""
                />
              </div>
              <div className="popular_destination_contents">
                <h3 className="popular_contents_title">London</h3>
                <p>Car hire in 75 pick-up locations</p>
                <p className="price_rates">
                  <i className="ri-roadster-line" /> From ₹3,721.11
                </p>
                <p>
                  <Link to="/carrentals">Search rental cars in London</Link>
                </p>
              </div>
            </div>
            <div className="popular_destination_item">
              <div className="popular_destination_poster">
                <img
                  src="https://t-cf.bstatic.com/xdata/images/city/360x240/619965.webp?k=8b2bc851e921e03c4565fe28e4f608c30223227743b3b2cc56c476a5ef04d3da&o="
                  alt=""
                />
              </div>
              <div className="popular_destination_contents">
                <h3 className="popular_contents_title">London</h3>
                <p>Car hire in 75 pick-up locations</p>
                <p className="price_rates">
                  <i className="ri-roadster-line" /> From ₹3,721.11
                </p>
                <p>
                  <Link to="/carrentals">Search rental cars in London</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="car_services_container">
          <div className="car_services">
            <div className="car_services_items">
              <div className="service_icon">
                <i className="ri-customer-service-line" />
              </div>
              <div className="service_contents">
                <h4>24/7 customer service</h4>
                <p>24/7 customer service</p>
              </div>
            </div>
            <div className="car_services_items">
              <div className="service_icon">
                <i className="ri-check-line" />
              </div>
              <div className="service_contents">
                <h4>Free cancellation</h4>
                <p>Available on most cars</p>
              </div>
            </div>
            <div className="car_services_items">
              <div className="service_icon">
                <i className="ri-star-line" />
              </div>
              <div className="service_contents">
                <h4>3.5+ million reviews</h4>
                <p>By real, verified customers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="top_world_location">
          <h1 className="heading">Top worldwide locations for car rental</h1>
          <div className="top_world_location_wrapper">
            <div className="world_location_card">
              <img
                src="https://t-cf.bstatic.com/xdata/images/city/360x240/619644.webp?k=5b21ac6d3d913a54274d6546e60adb2c3c138d661dd1a2bd7b3aed53e9df0b65&o="
                alt=""
              />
              <div className="world_location_contents">
                <h4>Milan</h4>
                <p>Car hire from ₹ 2,144,40 per day</p>
              </div>
            </div>
            <div className="world_location_card">
              <img
                src="https://t-cf.bstatic.com/xdata/images/city/360x240/613105.webp?k=1e85cf4dec7b0d5a6327be91c38cf9c1711f9da1a31c4cba736f9cb751443ff1&o="
                alt=""
              />
              <div className="world_location_contents">
                <h4>Rome</h4>
                <p>Car hire from ₹ 2,144,40 per day</p>
              </div>
            </div>
            <div className="world_location_card">
              <img
                src="https://t-cf.bstatic.com/xdata/images/city/360x240/968315.webp?k=14d0bad185930ec2663562b999ecf498fb6fcf492c16a4c33228504a15e2d119&o="
                alt=""
              />
              <div className="world_location_contents">
                <h4>Barcelona</h4>
                <p>Car hire from ₹ 2,144,40 per day</p>
              </div>
            </div>
            <div className="world_location_card">
              <img
                src="https://t-cf.bstatic.com/xdata/images/city/360x240/971353.webp?k=a5b47d2c38469086427837dfe64ab2e6f57ba52f0504359ef4cc02dc4b9b0737&o="
                alt=""
              />
              <div className="world_location_contents">
                <h4>Madrid</h4>
                <p>Car hire from ₹ 2,144,40 per day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MailList/>
      <Footer/>
    </div>
  );
};

export default CarRental;
