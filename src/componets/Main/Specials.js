// src/components/Specials.js
import React from "react";
import Button from "../Button/Button";
import "./Special.css";
import img1 from "./../../assets/greek salad.jpg"; // Import images here

const Specials = () => {
  // Define card data directly in the component
  const cardData = [
    {
      id: 1,
      title: "Greek Salad",
      price: "$66.78",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      imgSrc: img1
    },
    {
      id: 2,
      title: "Greek Salad",
      price: "$66.78",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      imgSrc: img1
    },
    {
      id: 3,
      title: "Greek Salad",
      price: "$66.78",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      imgSrc: img1
    },
    // {
    //   id: 4,
    //   title: "Greek Salad",
    //   price: "$66.78",
    //   description: "The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need.",
    //   imgSrc: img1
    // },
    
  ];

  return (
    <section className="specials_section">
      <div className="special_container">
        <div className="special_heading">
          <h1 className="special_title">Specials</h1>
          <Button Lable={"Online Menu"} />
        </div>

        <div className="card_wraper">
          {cardData.map(card => (
            <div key={card.id} className="special_card_container">
              <img className="card_img" alt={card.title} src={card.imgSrc} />
              <div className="card_detail">
                <div className="card_title_container">
                  <h4>{card.title}</h4>
                  <span>{card.price}</span>
                </div>
                <p className="card_discription">
                  {card.description}
                </p>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
