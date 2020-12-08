<h1 align="center">
    <img alt="Image Trybe" src="https://i.ibb.co/d4W2x4g/trybe.png" width="400px" />
</h1>

<h3 align="center">
  Exercício 16-2: Usando o Redux no React--part-1 - Concluído o/ o/ o/ :star:
</h3>

<blockquote align="center">“Quanto mais você estuda, mais aprende e se aproxima de realizar seu sonhos!”</blockquote>

<h1></h1>

<p align="center">

  <a href="https://www.linkedin.com/in/eduardosouzaprogrammer/">
    <img alt="Made by Eduardo Souza" src="https://img.shields.io/badge/made%20by-Edu%20Souza-%23F8952D">
  </a>&nbsp;

 <a href="https://edusouza-programmer.github.io/">
<img alt="Github page Edu Souza " src="https://img.shields.io/badge/Github%20page-Edu_Souza-orange">
</a>&nbsp;

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

</p>

<p align="center">
  <a href="#rocket-Sobre-o-Exercício">Sobre o Exercício</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#postbox-Entrega">Entrega</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#unlock-Licença">Licença</a>
</p>

# :rocket: Sobre o Exercício

Redux é uma ferramenta para gerenciar o estado de uma aplicação JavaScript . Antes de entender o porquê de utilizar React com Redux , deve-se entender o porquê de utilizarmos uma biblioteca externa para controlar e gerenciar o estado de uma aplicação.
A maioria das bibliotecas, como React , Angular etc, possuem uma forma interna de gerenciar o estado da aplicação sem o auxílio ou necessidade de uma ferramenta externa. Isto funciona bem para aplicações que possuem poucos componentes mas, à medida que a aplicação cresce, o gerenciamento de estados compartilhados entre componentes torna-se uma tarefa complicada e desgastante.

# :postbox: Entrega

Você irá desenvolver 3 exercícios para solidificar seus conhecimentos de Redux com React.

- No primeiro exercício, desenvolveremos um semáforo simples.
- No segundo trabalharemos com mais estados aplicando movimento em 3 carros, [veja parte 2.](https://github.com/EduSouza-programmer/Trybe_Exercicio_16-2_Edu_Souza--part-2)
- E para finalizar iremos combinar ambos os exercícios em um só, utilizando o combineReducers, [veja parte 3.](https://github.com/EduSouza-programmer/Trybe_Exercicio_16-2_Edu_Souza--part-3-final)

### :clipboard: Sumário

- <p><a href="#1"> :pushpin: 1.</a> Primeiro exercício, desenvolveremos um semáforo simples;</p>

## :books: Exercícios

### 1°

Como primeira tarefa, você deve usar o **Redux** para gerenciar o estado do componente `TrafficSignal`. As funções `mapStateToProps` e `mapDispatchToProps` devem ser usadas para conectar o componente ao estado do **Redux**.

A função `renderSignal` retorna o src da imagem do sinal de trânsito e recebe como parâmetro uma string que deve vir da store.

O componente `TrafficSignal` tem três botões e ao clique de cada um deles, a sua respectiva luz deve acender.

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

/* ----------- */

// src/app.jsx
import React from "react";
import TrafficSignal from "./TrafficSignal";
import "./App.css";

export default function App() {
  return <TrafficSignal />;
}

/* ----------- */

// redux/actionCreators.js
export const CHANGE_SIGNAL = "CHANGE_SIGNAL";

export const changeSignal = (payload) => ({
  type: CHANGE_SIGNAL,
  payload,
});

/* ----------- */

// redux/index.js
import { createStore } from "redux";
import { CHANGE_SIGNAL } from "./actionCreators";

const initialState = {
  signal: {
    color: "red",
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SIGNAL:
      return { ...state, signal: { ...state.signal, color: action.payload } };
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

/* ----------- */

// src/TrafficSignal.jsx
import React from "react";
import { func, string } from "prop-types";
import { connect } from "react-redux";
import { changeSignal } from "./redux/actionCreators";
import redSignal from "./images/redSignal.jpeg";
import greenSignal from "./images/greenSignal.jpeg";
import yellowSignal from "./images/yellowSignal.jpeg";

const renderSignal = (signalColor) => {
  if (signalColor === "red") {
    return redSignal;
  }
  if (signalColor === "green") {
    return greenSignal;
  }
  if (signalColor === "yellow") {
    return yellowSignal;
  }
  return null;
};

function TrafficSignal({ signalColor, changeSignal }) {
  return (
    <div className="ctn">
      <div className="button-container">
        <button onClick={() => changeSignal("red")} type="button">
          Red
        </button>
        <button onClick={() => changeSignal("yellow")} type="button">
          Yellow
        </button>
        <button onClick={() => changeSignal("green")} type="button">
          Green
        </button>
      </div>
      <img className="signal" src={renderSignal(signalColor)} alt="sinal" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  signalColor: state.signal.color,
});

const mapDispatchToProps = (dispatch) => ({
  changeSignal: (color) => dispatch(changeSignal(color)),
});

TrafficSignal.propTypes = {
  signalColor: string.isRequired,
  changeSignal: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);
```

</details>

<p align="right">
   <a href="https://edusouza-programmer.github.io/Trybe_Exercicio_16-2_Edu_Souza--part-1/">
    <img alt="Go index.html" src="https://img.shields.io/badge/Go-app_react-orange">
    </a>&nbsp;
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

## :unlock: Licença

Este projeto está licenciado sob a Licença MIT - consulte [LICENSE](https://opensource.org/licenses/MIT) para maiores detalhes.
