import "./App.css";

function App() {
  const Pname = ['Tanim', 'Vubon' , 'Anas Abdulla' , 'Tonmoy']
  return (
    <div className="App">
     <h1>I am a react person</h1>
     <Person name ="Tanim" famework="React JS"></Person>
     <Person name="Masum"></Person>
     <Person name="Vubon Paul"></Person>
      <Person name={Pname[2]}></Person>
    </div>
  );
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
