
import "./App.css";


let name= prompt("enter your name")
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>Contact</li>
      <li>About</li>
    </nav>
    <h1>Hey {name}! how are you ?</h1>
     <div className="Container">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod dolores error quasi reprehenderit odio delectus iste adipisci et nisi unde temporibus asperiores repellendus quibusdam repudiandae aliquid voluptates eius facilis beatae, esse a. Totam.</p>
     </div>
    </>
  );
}

export default App;
