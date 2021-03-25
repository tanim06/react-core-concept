import "./App.css";

function App() {
  var Pname = ['Tanim', 'Vubon' , 'Anas Abdulla' , 'Tonmoy']
 const products =  [
   {name: 'Photoshop' , price:"$90.99"},
   {name: 'Illustrator' , price:"$60.99"},
   {name: 'PDF Reader' , price:"$30.99"}
 ]
  return (
    <div className="App">
     <h1>I am a react person</h1>
     {/* <Product 
     name={products[0].name}
     price={products[0].price}
     ></Product> */}
     <Product product ={products[0]}> </Product>
     <Product product ={products[1]}> </Product>
     <Product product ={products[2]}> </Product>
     <Person name ="Tanim" famework="React JS"></Person>
     <Person name="Vubon Paul"></Person>
      <Person name={Pname[2]}></Person>
    </div>
  );
}
function Product(props){
  const {name ,price} = props.product
  console.log("Product er" , props);
  const productStyle ={
    border: "1px solid gray",
    borderRadius : "5px",
    backgroundColor:"lightgray",
    height:"200px",
    weight:"200px",
    Float:"left",
    margin:"10px"
  }
  return (
   <div style={productStyle}>
     <h2>Name: {name}</h2>
     <h1>{price}</h1>
     <button>Buy Now</button>
   </div>
  )
}
function Person(props){
  const personStyle = {
    border:"2px solid blue",
    margin : "10px"
  }
  
  console.log(props);
  return (
 
  <div style={personStyle}>
      <p>Name: <b>{props.name}</b></p>
      <h3>Hero of the year</h3>
  </div>
  )
}
export default App;
