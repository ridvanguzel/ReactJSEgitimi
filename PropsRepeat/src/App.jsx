import "./App.css";
import Container from "./Container";
import Product from "./Product";

function App() {
  // const productSecondName = "Televizyon";
  return (
    <div>
      <Container>
        {/* <Product productName="Ayakkabi" price={50000} /> */}
        <hr></hr>
        <Product productName="TV" />
        <hr></hr>
        {/* <Product productName={productSecondName} /> */}
      </Container>
    </div>
  );
}

export default App;
