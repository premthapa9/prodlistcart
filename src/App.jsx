import Cartsection from "./components/Cartsection";
import Itemsection from "./components/Itemsection";

const App = () => {
  return (
    <div className=" max-w-6xl mx-auto  px-5 md:px-10 py-5 flex flex-col md:flex-row gap-5">
      <div className="flex-1">
        <Itemsection />
        <h1>Fking Awesome one</h1>
      </div>
      <div className="flex-[0.40]">
        <Cartsection />
      </div>
    </div>
  );
};

export default App;
