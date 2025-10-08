import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstname] = useState("Rıdvan");
  const [lastName, setLastname] = useState("Güzel");
  const [count, setCount] = useState(0);
  const [namesArray, setNameArrays] = useState([
    "Rıdvan",
    "Güzel",
    "Mehmet",
    "Dilas",
    "Faruk",
    "Ahmet",
    "Kiraz",
  ]);
  const [userInfo, setUserInfo] = useState({
    username: "ridvang",
    password: "123456789",
  });
  const [dogruMu, setCorrect] = useState(false);

  const handleName = () => {
    debugger;
    setFirstname("Mehmet");
  };
  const arttir = () => {
    setCount(count + 1);
  };
  const azalt = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  console.log("Component Tekrar Render Edildi");
  return (
    <>
      <div>
        {firstName} {lastName}
      </div>
      <div>{count}</div>

      <div>
        {namesArray.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
      <div>
        {userInfo.username} {userInfo.password}
      </div>

      <div>
        {dogruMu ? (
          <div>
            {userInfo.username} {userInfo.password}
          </div>
        ) : (
          <div>Bilgileri Gösterme</div>
        )}
      </div>

      <div>
        {/* <button onClick={() => {setFirstname("Ayşenur")}}>İsim Değiştir</button> */}
        <button onClick={handleName}>İsim Değiştir</button>
        <button onClick={arttir}>Arttır</button>
        <button onClick={azalt}>Azalt</button>
      </div>
    </>
  );
}

export default App;
