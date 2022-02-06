import React from 'react';

function Content(props) {
  return (
    <div className="Content">
      <div className="container">
        {props.children}
      </div>
    </div>
  );
}

export default Content;
