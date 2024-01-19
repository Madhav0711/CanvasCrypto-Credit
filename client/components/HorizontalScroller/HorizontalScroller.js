// HorizontalScroll.js

import React from 'react';

const HorizontalScroller = () => {
  const containerStyle = {
    width: '100%',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
  };

  const itemStyle = {
    display: 'inline-block',
    width: '500px',
    height:'500px',
    marginRight: '10px',
    border: '1px solid #ddd',
    padding: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={itemStyle}>Item 1</div>
      <div style={itemStyle}>Item 2</div>
      <div style={itemStyle}>Item 3</div>
      <div style={itemStyle}>Item 4</div>
      {/* Add more items as needed */}
    </div>
  );
};

export default HorizontalScroller;
