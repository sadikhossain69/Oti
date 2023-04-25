import React,{useState} from 'react'

const List = ({list, filterItems}) => {
  const [active, setActive] = useState(0);
  return (
    
      <div className="projects_list text-center">
        {list.map((category, index) => {
          return (
            <button
              className={`${
                active === index ? "active-work" : ""
              } project_list-item btn`}
              key={index}
              onClick={() => {
                setActive(index);
                filterItems(category);
              }}>
              {category}
            </button>
          );
        })}
      </div>
   
  );
}

export default List