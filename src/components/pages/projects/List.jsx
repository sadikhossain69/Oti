import React,{useState} from 'react'

const List = ({list, filterItems, setClickButton}) => {
  const [active, setActive] = useState(0);
  return (
    
      <div className="projects_list text-center">
        {list.map((category, index) => {
          // console.log(category)
          return (
            <button
              className={`${
                active === index ? "active-work" : ""
              } project_list-item btn`}
              key={index}
              onClick={() => {
                setClickButton(true)
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