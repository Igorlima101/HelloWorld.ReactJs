import "./index.js";
import "./App.css";
function Text1() {
  return "Hello World";
}

function Text2() {
  return "Hello World".toLowerCase();
}

function Text3() {
  return "Hello World".toUpperCase();
}

function Text4() {
  return "Hello World".split("").reverse().join("");
}

function Text5() {
  return "Hello World".split('').sort(function(){return 0.3-Math.random()}).join('');
}

function Text6() {
  return "Hello World".split("").join(" ");
}

function Text7() {
  return "Hello World".split("").reverse().join();
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
    <Text1 /> <TextDate/> <br/>
    <Text2 /> <TextDate/> <br/>
    <Text3 /> <TextDate/> <br/>
    <Text4 /> <TextDate/> <br/>
    <Text5 /> <TextDate/> <br/>
    <Text6 /> <TextDate/> <br/>
    <Text7 /> <TextDate/> <br/>
    </div>
  );
}
export default App;