import "./Testimonial.css"
import { AiFillStar } from "react-icons/ai"
import images from "./../../assets/lemon dessert.jpg"

const reviews = [
  {
    image: images,
    name: "Alishba",
    reviewText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
  },
  {
    image: images,
    name: "Maha",
    reviewText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
  },
  {
    image: images,
    name: "Hamza",
    reviewText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
  },
  {
    image: images,
    name: "Afzal",
    reviewText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
  },
]

const ReviewCard = ({ props }) => {
  return (
    <div className="app__testimonials-review" key={props.key}>
      <div className="app__testimonials-stars">
        <AiFillStar className="app__testimonials-review-stars-icon" />
        <AiFillStar className="app__testimonials-review-stars-icon" />
        <AiFillStar className="app__testimonials-review-stars-icon" />
        <AiFillStar className="app__testimonials-review-stars-icon" />
        <AiFillStar className="app__testimonials-review-stars-icon" />
      </div>
      <div className="app__testimonials-name-image">
        <img
          className="app__testimonial-review-image"
          src={props.image}
          alt={props.name}
        />
        <h6 className="app__testimonials-review-name">{props.name}</h6>
      </div>
      <p className="app__testimonials-review-text">{props.reviewText}</p>
    </div>
  )
}
const Testimonials = () => {
  return (
    <div className="app__testimonials-content">
      <h1 className="app__testimonals-title">Testimonials</h1>
      {/* <ReviewCard /> */}
      <div className="app__testimonial-review-card">
        {reviews.map((review, index) => {
          return <ReviewCard props={review} key={index} />
        })}
      </div>
    </div>
  )
}

export default Testimonials
