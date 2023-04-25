import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card
        imageUrl="https://i.pinimg.com/originals/d0/32/89/d032898ae807199292bd01b7e4b43655.jpg"
        title="Базовые сапожки"
        description="Подойдут под любой наряд"
        price="$23.99"
      />
      <Card
        imageUrl="https://img.vitkac.com/uploads/product_thumb/BUTY%20538942%20W04Z0-3801/up/1.JPG"
        title="Зеленые сапожки"
        description="Когда на душе весна"
        price="$23.99"
      />
      <Card
        imageUrl="https://m.media-amazon.com/images/I/61G56PZgCOL._AC_SX575._SX._UX._SY._UY_.jpg"
        title="Шлепки нарядные"
        description="Для особыч случаев"
        price="$99.99"
      />
    </div>
  );
}

export default App;
