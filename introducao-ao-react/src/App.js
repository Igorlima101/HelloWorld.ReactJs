const desafio = "helloworld";
function Opa() {
  return (
    <div>
      <b> {desafio.split("").join("///")}</b> <TextDate />
      <h1> {desafio.split("").join("===")}</h1>
      <h2> {desafio.split("").join("()")}</h2> <TextDate />
      <h3> {desafio.split("").join("{}")}</h3>
      <h4> {desafio.toUpperCase()}</h4>
    </div>
  );
}
function One() {
  return "Hello World".split("").join(" ");
}

function Two() {
  return "Hello World".split("").reverse().join();
}

function Three() {
  return "Hello World".split("").join();
}

function Four() {
  return <UsandoProps name="Hello" lastname="World" />;
}

function UsandoProps(props) {
  return (
    <h1>
      {props.name} {props.lastname}
    </h1>
  );
}

function Cod() {
  const decoded = Buffer.from("Hello World").toString("base64");
  const encoded = Buffer.from("SGVsbG8gV29ybGQ=", "base64").toString("utf-8");
  return encoded + "  CODIFICADO PARA BASE64: " + decoded;
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
function App() {
  return (
    <div>
      <Opa />
      <One /> <TextDate /> <br />
      <Two /> <TextDate /> <br />
      <Three /> <TextDate /> <br />
      <Four /> <TextDate /> <br />
      <UsandoProps /> <TextDate /> <br />
      <b> <Cod /> </b><br /> <br /> <TextDate />
    </div>
  );
}
export default App;