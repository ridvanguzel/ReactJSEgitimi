// import { useState } from 'react'

import './App.css'

function App() {

  let a = 15;
  const firstName = "Rıdvan";
  let vize1 = 65;
  let vize2 = 80;
  let sonuc = true;
  let isimler = [
    "rıdvan",
    "iclal",
    "mehmet",
    "taha"
  ]
  return (
    <>
    <div>
      <h1>a değişkenin değeri : {a}</h1>
      <p>Müşteri Adı : {firstName}</p>
      <p>{(vize1 + vize2) / 2}</p>
      {sonuc ? <p>Hadi iyisin yine Ternary operatörü çalışıyor</p> : <p>Ternary Operatoru çalısmıyor bro</p>}       {/* <>Ternary Operatörü */}
      {( vize1 + vize2 / 2 >= 50 ? <p>Geçtin tebrikler</p> : <p>Geçemedin maalesef</p> )}
      {isimler.map((isim, index) =>(
        <div style={{color:'red', fontSize:'40px'}} key={index}>{isim}</div>
      ))}
    </div>
    </>
  )
}

export default App
