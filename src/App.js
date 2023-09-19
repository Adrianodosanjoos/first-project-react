import React from "react";

import { Container, H1, Image, ContainerItens, InputLabel, Input, Button } from './styles'

import People from './assets/people.svg'

import Arrow from './assets/arrow.svg'



function App() {

  return (
    <Container>

      <Image alt="logo-imagem" src={People}/>

      <ContainerItens>
        <H1>Hello</H1>
      </ContainerItens>

      <InputLabel>Nome</InputLabel>
      <Input placehoder="Nome" />

      <InputLabel>Idade</InputLabel>
      <Input placehoder="Idade" />

      <Button>Cadastrar <img alt="seta" src={Arrow}/></Button>


    </Container>
  );

}

export default App;