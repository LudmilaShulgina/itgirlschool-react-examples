import "./card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.title} className="card-image" />
      <h2 className="card-title">{props.title}</h2>
      <p className="card-description">{props.description}</p>
      <p className="card-price">{props.price}</p>
      <button className="card-button">Заказать</button>
    </div>
  );
}
