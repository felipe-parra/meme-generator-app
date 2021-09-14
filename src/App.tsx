import { useState } from "react";
import html2canvas from "html2canvas";
import "./styles.css";
import SelectComponent from "./components/Select";
import ImageComponent from "./components/Image";
import TextInputComponent from "./components/TextInput";

const initialState = {
  imageMeme: "meme1",
  topMessage: "",
  bottomMessage: "",
};

const optsMemes = [
  {
    id: "meme1",
    name: "1",
  },
  {
    id: "meme2",
    name: "2",
  },
  {
    id: "meme3",
    name: "3",
  },
];

export default function App() {
  const [state, setState] = useState(initialState);

  const handleChange = (
    event:
      | React.FormEvent<HTMLInputElement>
      | React.FormEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.currentTarget;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleClear = () => {
    setState({
      ...state,
      topMessage: "",
      bottomMessage: "",
    });
  };

  const handleExport = () => {
    const element = document.getElementById("meme");
    if (!element) {
      throw new Error("The element #portal wasn't found");
    }
    html2canvas(element).then(function (canvas) {
      const img = canvas.toDataURL("image/jpg");
      const link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  };
  return (
    <div className="App">
      <h1>Meme Generator</h1>
      <section className="d-flex">
        <section>
          <SelectComponent
            opts={optsMemes}
            name={"imageMeme"}
            handleChange={handleChange}
          />
          <TextInputComponent
            name={"topMessage"}
            value={state.topMessage}
            placeholder="Top text"
            handleChange={handleChange}
          />
          <TextInputComponent
            name={"bottomMessage"}
            value={state.bottomMessage}
            placeholder={"Bottom text"}
            handleChange={handleChange}
          />
        </section>
        <ImageComponent
          topMessage={state.topMessage}
          bottomMessage={state.bottomMessage}
          image={state.imageMeme}
        />
      </section>

      <div className="buttons">
        <button onClick={() => handleClear()}>Clear</button>
        <button onClick={() => handleExport()}>Export</button>
      </div>
    </div>
  );
}
