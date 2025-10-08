import Product from "./Product"
import Container from "./Container"

function App() {

  // const productName = "Buzdolabı"

  return (
    <>
   {/* <div>
    <Product productName="Ayakkabı" price={3200}/>
    <hr></hr>
    <Product productName ={productName} price={5000}/>
    </div> */}

    <Container>
      <Product productName="Ayakkabı" price={3200}/>
      <Product productName="Ayakkabı" price={3200}/>
    </Container>
    </>
  )
}

export default App
