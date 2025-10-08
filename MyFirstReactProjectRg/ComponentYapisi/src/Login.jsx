import React from 'react'

function Login() {
  return (
    <>
       <div>

        <p>Login</p>
        <div>
            <label htmlFor="">Kullanıcı Adınız</label>
            <input type='text'></input>
        </div>
         <div>
            <label htmlFor="">Şifre Adınız</label>
            <input type='text'></input>
        </div>
         <div>
          <button>Giriş Yap</button>
        </div>

       </div>
    </>
 
  )
}

export default Login