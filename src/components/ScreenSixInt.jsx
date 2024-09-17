import React from 'react';
import { useState } from 'react';
import Header from './Header';
import ClientOne from './ClientOne';
import { Link } from 'react-router-dom';


const ScreenSixInt = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const items = [
      { color: 'green', bg: 'Item 1', content: 'Detailed info about Item 1', id: 1, route: '/client-one' },
      { color: 'red', text: 'Item 2', content: 'Detailed info about Item 2', id: 2, route: '/client-two' },
      { color: 'blue', text: 'Item 3', content: 'Detailed info about Item 3', id: 3, route: '/client-three' },
      { color: 'gray', text: 'Item 4', content: 'Detailed info about Item 4', id: 4, route: '/client-four' },
      { color: 'yellow', text: 'Item 5', content: 'Detailed info about Item 5', id: 5, route: '/client-five' },
      { color: 'navy', text: 'Item 6', content: 'Detailed info about Item 6', id: 6, route: '/client-six' },
      { color: 'purple', text: 'Item 7', content: 'Detailed info about Item 7', id: 7, route: '/client-seven' },
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
                style={{ backgroundColor: item.color }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                   <Link key={item.id} to={item.route}>
                <span className="item-text">{item.text}</span>
                <span className="item-new">New</span>
                <div className="item-content">{item.content}</div>
                </Link>
              </div>
          
          ))}
        </div>
        <Link to = "/">
      <p className='back'>⇦</p>
      </Link> 
      </div>
    </div>

  );
};

export default ScreenSixInt;