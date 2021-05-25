import "./index.js";
import "./App.css";
function Text1() {
  return "Hello World";
}

function TextDate() {
  var today = new Date();
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var dd = String(today.getDate()).padStart(2, "0");
  var yyyy = today.getFullYear();
  var hora = today.getHours();
  var minuto = today.getMinutes();
  var segundo = today.getSeconds();

  today =
    dd + "/" + mm + "/" + yyyy + "    " + hora + ":" + minuto + ":" + segundo;
  return today;
}
function App(){
  return (
    <div>
    <Text1 /> <TextDate/>
    </div>
  );
}
export default App;