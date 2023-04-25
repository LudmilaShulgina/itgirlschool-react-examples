import "./card.css";

export default function Card() {
  return (
    <div className="card">
      <img
        src="https://i.pinimg.com/originals/d0/32/89/d032898ae807199292bd01b7e4b43655.jpg"
        alt="Базовые сапожки"
        className="card-image"
      />
      <h2 className="card-title">Базовые сапожки</h2>
      <p className="card-description">Эклектичное сочетание ...</p>
      <p className="card-price">$23.90</p>
      <button className="card-button">Заказать</button>
    </div>
  );
}
