import React from "react";
type Props = {
  url: string;
  sizeClass: string;
};
const Card: React.FC<Props> = ({ url, sizeClass }) => {
  return (
    <div className="card">
      <div className="card-image">
        <div className={`image ${sizeClass}`}>
          <img src={url} alt="BK" />
        </div>
      </div>
    </div>
  );
};

export default Card;
