import React from 'react';
import { useState } from 'react';
import Header from './Header';
import ClientOne from './ClientOne';
import { Link } from 'react-router-dom';
import image1 from "../../public/baw01.png"
import image2 from "../../public/baw02.png"
import image3 from "../../public/baw03.png"
import image4 from "../../public/baw04.png"
import image5 from "../../public/baw05.png"
import image6 from "../../public/baw06.png"
import image7 from "../../public/baw07.png"




const ScreenSix = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const items = [
      { image: image5, color: 'green', text: 'Item 1', content: 'Detailed info about Item 1', id: 1, route: '/client-one' },
      { image: image3, color: 'red', text: 'Item 2', content: 'Detailed info about Item 2', id: 2, route: '/client-two' },
      { image: image6, color: 'blue', text: 'Item 3', content: 'Detailed info about Item 3', id: 3, route: '/client-three' },
      { image: image7, color: 'gray', text: 'Item 4', content: 'Detailed info about Item 4', id: 4, route: '/client-four' },
      { image: image2, color: 'yellow', text: 'Item 5', content: 'Detailed info about Item 5', id: 5, route: '/client-five' },
      { image: image1, color: 'navy', text: 'Item 6', content: 'Detailed info about Item 6', id: 6, route: '/client-six' },
      { image: image4, color: 'purple', text: 'Item 7', content: 'Detailed info about Item 7', id: 7, route: '/client-seven' },
      
    ];

  return (
    
 
    <div>
      <div className="supreme-container">
        <div className="supreme-date">08/27/2024 02:47pm TYO</div>
        <div className="supreme-grid">
          {items.map((item, index) => (
            
              <div
                key = {item.id}
                className={`grid-item ${hoveredIndex === index ? 'hovered' : ''} ${hoveredIndex !== null && hoveredIndex !== index ? 'blur' : ''}`}
                style={{  backgroundImage: `url(${item.image})` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                   <Link key={item.id} to={item.route}>
                <span className="item-text" >{item.text}</span>
                <span className="item-new">New</span>
                <div className="item-content" style= {{ width: "700px", height: "500px"}}>{item.content}</div>
                </Link>
              </div>
          
          ))}
        </div>
       
      </div>
    </div>

  );
};

export default ScreenSix;