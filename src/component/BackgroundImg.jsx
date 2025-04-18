
import React from 'react';

export default function BackgroundImg({
  src,
  setImgSize,
  setXY,
  handleChange,
  correctCoords
}) {
  const handleClick = (e) => {
    if (handleChange) {
      handleChange(e);
    }
  };

  return (
    <div className="image" onClick={handleClick}>
      <img
        src={src}
        className="background"
        alt="Toggle Background"
      />
    </div>
  );
}
