import React from "react";
import PortfolioCard from "./PortfolioCard";
const Portfolio = ()=>(
    <section className="page-section portfolio" id="portfolio">
    <div className="container">
        {/* <!-- Portfolio Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
        </div>
        {/* <!-- Portfolio Grid Items--> */}
        <div className="row justify-content-center">
            {/* <!-- Portfolio Item 1--> */}
            <PortfolioCard/>
            {/* <!-- Portfolio Item 2--> */}
            <PortfolioCard/>
            {/* <!-- Portfolio Item 3--> */}
            <PortfolioCard/>
            {/* <!-- Portfolio Item 4--> */}
            <PortfolioCard/>
            {/* <!-- Portfolio Item 5--> */}
            <PortfolioCard/>
            {/* <!-- Portfolio Item 6--> */}
            <PortfolioCard/>
        </div>
    </div>
</section>
)
export default Portfolio