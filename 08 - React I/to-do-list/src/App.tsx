import { Header } from "./Components/Header/Header";
import "./Styles/global.css";
import { Tasks } from "./Components/Tasks/Tasks";
import { Refs } from "./Components/Concepts/Refs";

function App() {
  // const [toggle, setToggle] = useState(false);
  // useEffect(() => {
  //   console.log("executando a funcao use effect");

  //   //componentWillUnmount = CleanUp Function
  //   return () => {
  //     console.log("Executado quando o componente for desmontado");
  //   };
  // }, [toggle]);

  //useEffect será disparado sempre que uma variável do array for alterada
  //Por padrão será disparado sempre após a montagem de um componente (equivalente a componentDidMount)
  return (
    <div style={{ padding: "2rem" }}>
      <Header />
      <Tasks />
      <Refs />

      {/* <button onClick={() => setToggle(!toggle)}>Toggle</button> */}
    </div>
  );
}

export default App;
