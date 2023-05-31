import { React } from "react";
import exampleImage from "../../assets/example.png";

export const Card = () => {
  return (
    <div className="card w-64 bg-base-100 shadow-xl">
      <figure>
        <img src={exampleImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Modern React Template</h2>
        <p>What's included</p>
        <div className="card-actions justify-center">
          <div className="badge badge-outline">TailwindCSS</div>
          <div className="badge badge-outline">DaisyUI</div>
          <div className="badge badge-outline">Storybook</div>
          <div className="badge badge-outline">Eslint</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
