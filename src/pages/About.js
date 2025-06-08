import React from 'react';
import Layout from '../components/Layout/Layout';

function About() {
  return (
    <Layout
      title={"About Us - CrystalClear Online Glass Store"}
      description="Learn more about CrystalClear, your trusted source for premium glassware."
      keywords="about, CrystalClear, premium glassware, online glass store"
      author="Ajay Sahani"
    >
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/about.jpeg"
            alt="about-us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            At <strong>CrystalClear</strong>, we are passionate about bringing elegance and clarity into your everyday life. Founded with a vision to redefine how people shop for glassware online, CrystalClear has grown into a trusted destination for premium glass products. Whether you're looking for custom-designed glass sets, durable drinkware, or exquisite decorative pieces, we have something to fit every need and style.

            <br /><br />
            What sets us apart is our commitment to quality and craftsmanship. Each product is carefully curated, rigorously tested, and delivered with utmost care. Our artisans and designers work tirelessly to ensure every piece reflects sophistication and durability. 

            
            Join thousands of happy customers who trust CrystalClear for their glassware needs. We look forward to being a part of your home and special moments.
          </p>

          {/* Signature Section */}
          <div className="mt-4 text-end font-semibold italic text-gray-600">
            — Ajay Sahani
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
