import { useEffect } from "react";
import "./App.css";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

function App() {
  // const getAllUser = async () => {
  //   const response = await axios.get(BASE_URL + "/users");
  //   console.log(response.data);
  // };

  // const getUserById = async (userId) => {
  //   const response = await axios.get(`${BASE_URL}/users/${userId}`);
  //   console.log(response.data);
  // };

  // const createNewUser = async (newUser) => {
  //   //POST : Veri çekmek için kulalnılır
  //   const response = await axios.post(`${BASE_URL}/users`, newUser);
  //   console.log(response.data);
  // };

  // const updateUserInfo = async (userId, updatedUser) => {
  //   //PUT Güncelleme işlemi yapar
  //   const response = await axios.put(
  //     `${BASE_URL}/users/${userId}`,
  //     updatedUser
  //   );
  //   console.log("response", response.data);
  // };

  // const deleteUser = async (userId) => {
  //   const response = await axios.delete(`${BASE_URL}/users/${userId}`);
  //   console.log("Silinen Kullanıcı", response.data, { userId });
  // };

  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    return response;
  };

  const getUserPostId = async (postId) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + postId
    );
    return response.data.postId;
  };

  const getPost = async () => {
    const postId = await getUserById(1); // 1
    const postData = await getUserPostId(postId);
    console.log(postData);
  };

  useEffect(() => {
    getPost();
    // getAllUser
    // getUserById(2);
    // const newUsers = {
    //   username: "ridvanguzel",
    //   email: "ridvanguzel@example.com",
    //   age: 19,
    //   isActive: true,
    //   role: "user",
    // };
    // createNewUser(newUsers);
    // updateUserInfo("39ba", {
    //   username: "ridvanguzelss",
    //   email: "ridvanguzelsss@admin.com",
    //   age: 32,
    //   isActive: false,
    //   role: "admin",
    // });
    // deleteUser(30);
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
