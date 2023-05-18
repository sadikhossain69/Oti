import React from 'react';
import{FaArrowRight} from 'react-icons/fa';
import {motion} from 'framer-motion';
import location1 from "../../../assets/svg/flat1.svg";
import bed from "../../../assets/svg/flat2.svg";
import bath from "../../../assets/svg/flat3.svg";
import Area from "../../../assets/svg/flat4.svg";
import garage from "../../../assets/svg/flat5.svg";
import unitsLogo from '../../../assets/svg/units.svg'
import storysLogo from '../../../assets/svg/storeys.svg'
import floorLogo from '../../../assets/svg/floor.svg'
import './item.css'
import { Link } from 'react-router-dom';

const Items = ({projectItems}) => {

  return (
     <>
     {
      projectItems.map((projectItem)=>{
        const { _id, properties, units, parking, storeys, floor, location, category, construction,beds, baths, area, carparking, address} = projectItem;
        return (
          <div className="col-lg-4 col-md-6 mars_right" data-aos="fade-up">
            <div className="flat_item" key={_id}>
              <div className="flat_img">
                <img src={properties?.[0]} alt="" srcset="" />
              </div>
              <div className="flat_content">
                <h5>{category}</h5>
                <h4>{construction}</h4>
                <div className="content1 d-flex">
                  <img src={location1} alt="" srcset="" />
                  <p>{location}</p>
                </div>
                <div className="content2 d-flex">
                  <div className="Three_beds">
                    <p>
                      <img src={storysLogo} alt="" srcset="" />
                      {storeys}
                    </p>
                  </div>
                  <div className="Three_baths">
                    <p>
                      <img src={floorLogo} alt="" srcset="" />
                      {floor}
                    </p>
                  </div>
                </div>
                <div className="content3 d-flex">
                  <p>
                    <img src={unitsLogo} alt="" srcset="" />
                    {units}
                  </p>
                  <p>
                    <img src={garage} alt="" srcset="" />
                    {parking}
                  </p>
                </div>
                <div className="see_more">
                  <Link to={`/products/${_id}`}>See More</Link>
                </div>
              </div>
            </div>
          </div>
        );
      })
     }
     </>
  )
}

export default Items