import Badge from "./Badge";
import { Link } from "react-router-dom";

const TeeniepingCard = ({ id, imageUrl, series, rank, name }) => {
  return (
    <Link to={`teeniepings/${id}`}>
      <img src={imageUrl} />
      <div>
        <Badge color='#eee' text={series} />
        <Badge color='yellow' text={rank} />
      </div>
      <p>{name}</p>
    </Link>
  )
}

export default TeeniepingCard;