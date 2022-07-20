import React, { useState } from 'react'
import { BiMap, BiHeart } from 'react-icons/bi';

import CompLogo from '../images/companylogo.png';
import SecHead from './SecHead';


const FeaturedJobs = () => {

    const [JobListing, setJobListing] = useState([1, 2, 3, 4, 5, 6]);
    return (
        <section>
            <div className="block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <SecHead
                                title="Featured Jobs"
                                text="Leading Employers already using job and talent."
                                headversion="heading"
                            />
                            <div className="job-listings-sec">
                                {
                                    JobListing.map((ele, index) => {
                                        return <div key={index} className="job-listing">
                                            <div className="job-title-sec">
                                                <div className="c-logo">
                                                    <img src={CompLogo} alt="" />
                                                </div>
                                                <h3><a href="#" title="">Web Designer / Developer</a></h3>
                                                <span>Massimo Artemisis</span>
                                            </div>
                                            <span className="job-lctn"><BiMap /> Sacramento, California</span>
                                            <span className="fav-job"><BiHeart /></span>
                                            <span className="job-is ft">FULL TIME</span>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="browse-all-cat">
                                <a href="#" title="">Load more listings</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default FeaturedJobs