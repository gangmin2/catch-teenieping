import Badge from "./Badge";

const TeeniepingCard = ({ imageUrl, series, rank, name }) => {
  return (
    <div>
      <img src={imageUrl} />
      <div>
        <Badge color='#eee' text={`시즌 ${series}`} />
        <Badge color='yellow' text={rank} />
      </div>
      <p>{name}</p>
    </div>
  )
}

export default TeeniepingCard;