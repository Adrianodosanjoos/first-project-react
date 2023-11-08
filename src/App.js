import React, { useState, useRef } from "react";

import axios from 'axios'

import { Container, H1, Image, ContainerItens, InputLabel, Input, Button, User } from './styles'

import People from './assets/people.svg'

import Arrow from './assets/arrow.svg'

import trash from './assets/trash.svg'



function App() {
  const [users, setUsers] = useState([]);
  const InputName = useRef();
  const InputAge = useRef();


  async function addNewUser() {
    const data = await axios.post("http://localhost:3001/users, {name: InputName.current.value, age: InputAge.current.value}")
    //setUsers([...users, { id: Math.random(), name: InputName.current.value, age: InputAge.current.value }])
   console.log(data)

  }

  function deleteUser(userId) {
    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  return (
    <Container>

      <Image alt="logo-imagem" src={People} />

      <ContainerItens>
        <H1>Hello</H1>


        <InputLabel>Nome</InputLabel>
        <Input ref={InputName} placehoder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={InputAge} placehoder="Idade" />

        <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow} /></Button>


        <ul>

          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={trash} alt="Lata-de-lixo" /></button>
            </User>
          ))}
        </ul>
      </ContainerItens>

    </Container>
  );

}

export default App;