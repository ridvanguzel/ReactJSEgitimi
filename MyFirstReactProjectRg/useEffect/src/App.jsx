import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("Rıdvan");
  const [lastName, setLastName] = useState("Güzel");

  useEffect(() => {
    console.log("Herzaman çalışır");
  });

  useEffect(() => {
    console.log("Component çalıstıgında sadece bir kez çalış");
  }, []); //bos array bir kez çalıştırır

  useEffect(() => {
    console.log(
      "component ilk kez render edgıldınde ve FİRSTNAME state degeri değişince çalışır"
    );
  }, [firstName]);

  useEffect(() => {
    console.log(
      "Component ilk kez render edildiğinde ve 'LASTNAME', state degeri degisince çalışır"
    );
  }, [lastName]);

  useEffect(() => {
    console.log(
      "Component ilk kez render edıldiğinde ve FİRSTNAME LASTNAME state degerleri değişince çalışır"
    );
  }, [firstName, lastName]);

  return (
    <>
      <div>
        <span>İsim : {firstName}</span>
        <br></br>
        <span>Soyisim : {lastName}</span>
      </div>
      <div>
        <button onClick={() => setFirstName("Can")}>İsim Ata</button>
        <button onClick={() => setLastName("Bros")}>Soyisim Ata</button>
      </div>
    </>
  );
}

export default App;
