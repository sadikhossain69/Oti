import React, { useEffect, useState } from 'react';
import './project.css';
import Items from './Items';
import List from './List';
import { projects } from './Data';
import { AnimatePresence } from 'framer-motion';
import baseURL from '../../../utils/baseURL';



const ProjectPage = () => {

  const [propertyData, setPropertyData] = useState([])

  const getPropertyData = async () => {
    const { data } = await baseURL('/property/list')
    setPropertyData(data.data)
  }

  useEffect(() => {
    getPropertyData()
  }, [])

  // find project category and add 'all' category.
  const allNavList = ['All', ...new Set(propertyData.map((project) => project.type))];

  // console.log(allNavList)

  const [projectItems, setMenuItems] = useState(propertyData)
  const [clickButton, setClickButton] = useState(false)
  //  
  // const [navList, setCategories] = useState(allNavList);
  // console.log(navList)
  //  filteration of category 
  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(propertyData);
      return;
    }
    const newProjectItems = propertyData.filter((item) => item.type === category
    );
    setMenuItems(newProjectItems);
  }
  return (
    <section className="projects" id="projects">
      <h2 className="section_title text-center">Our Ongoing Projects</h2>
      <p className="section_subtitle text-center">Choose the best option</p>
      <List setClickButton={setClickButton} list={allNavList} filterItems={filterItems} />

      <div className="container">
        <div className="row">
          <AnimatePresence initial={false}>
            {
              clickButton ? 
              <Items projectItems={projectItems} />
              :
              <Items projectItems={propertyData} />
            }
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default ProjectPage;
