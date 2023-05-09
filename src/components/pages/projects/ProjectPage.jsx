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
    console.log(data.data)
  }

  useEffect(() => {
    getPropertyData()
  }, [])

  // find project category and add 'all' category.
  const allNavList = ['All', ...new Set(projects.map((project) => project.category))];

  const [projectItems, setMenuItems] = useState(projects)
  //  
  const [navList, setCategories] = useState(allNavList);
  //  filteration of category 
  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(projects);
      return;
    }
    const newProjectItems = projects.filter((item) => item.category === category
    );
    setMenuItems(newProjectItems);
  }
  return (
    <section className="projects" id="projects">
      <h2 className="section_title text-center">Our Ongoing Projects</h2>
      <p className="section_subtitle text-center">Choose the best option</p>
      <List list={navList} filterItems={filterItems} />

      <div className="container">
        <div className="row">
          <AnimatePresence initial={false}>
            <Items projectItems={projectItems} />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default ProjectPage;
