import { useState } from "react";

import "./App.css";

function App() {
  const [vizeBir, setVizeBir] = useState(0);
  const [vizeIki, setVizeIki] = useState(0);

  const ortalamaHesapla = () => {
    debugger;
    const toplamSonuc = topla() / 2;
    yazdir(toplamSonuc);
  };

  const topla = () => {
    const toplam = vizeBir + vizeIki;
    debugger;
    return toplam;
  };

  const yazdir = (sonuc) => {
    debugger;
    console.log("Ortalama :" + sonuc);
  };

  return (
    <>
      <div>
        <input
          type="number"
          value={vizeBir}
          onChange={(e) => setVizeBir(Number(e.target.value))}
        ></input>
        <input
          type="number"
          value={vizeIki}
          onChange={(e) => setVizeIki(Number(e.target.value))}
        ></input>
        <button onClick={ortalamaHesapla}>Ortalama Hesapla</button>
      </div>
    </>
  );
}

export default App;
