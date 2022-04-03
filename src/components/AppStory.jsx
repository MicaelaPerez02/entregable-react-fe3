import { Component } from "react";
import data from "./data";
import OptionHistory from "./OptionHistory";
import Options from "./Options";
import Swal from "sweetalert";

class AppStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0, //contador
      previusSelection: '', //a o b
      chosenOptions: [], //array de las opciones elegidas
      firstSelection: '', //contador de opciones atras
    };
  }

  //metodo que se ejecuta cuando queremos actualizar el componente
  componentDidUpdate(prevState) {
    if (prevState.counter !== this.state.counter) { //si el contador previo es diferente al contador actual
      this.state.chosenOptions.push(this.state.previusSelection); //agrega al array de opciones elegidas la opcion elegida
    };
  }

  refreshPage() {
    window.location.reload(false);
  }

  handleClick = (e) => {
    //traigo el id del boton que se hizo click
    const click = e.target.id;
    if (click === 'Volver' && this.state.counter === 0) {
      Swal({
        title: "Ups",
        text: "No hay opciones anteriores",
        icon: "warning",
        button: "Volver",
      })
    }
    if (this.state.counter >= 7 && (click === 'A' || click === 'B')) {
      Swal({
        title: "Has terminado el juego",
        text: "La página se reacargará en 5 segundos",
        icon: "success",
        button: "Ok",
        timer: 5000,
      });

      document.getElementById('A').disabled = true;
      document.getElementById('B').disabled = true;
      document.getElementById('Volver').disabled = true;
      setTimeout(this.refreshPage, 5000);
    }
    else if (click === 'A' && this.state.firstSelection === '') {
      //actualizo el estado aumentando el contador y guardando la opcion elegida
      this.setState({
        counter: +1,
        previusSelection: 'A',
        firstSelection: 'A',
      });
    }
    else if (click === 'B' && this.state.firstSelection === '') {
      this.setState({
        counter: +2,
        previusSelection: 'B',
        firstSelection: 'B',
      });
    }
    else if (click === 'A') {
      this.setState({
        counter: this.state.counter + 2,
        previusSelection: 'A',
      });
    }
    else if (click === 'B') {
      this.setState({
        counter: this.state.counter + 2,
        previusSelection: 'B',
      });
    }
    else if (click === 'Volver' && this.state.counter === 1) {
      this.setState({
        counter: this.state.counter - 1,
        previusSelection: 'Volver',
      });
    }
    else if (click === 'Volver' && this.state.counter >= 2) {
      this.setState({
        counter: this.state.counter - 2,
        previusSelection: 'Volver',
      });
    }
  };

  render() {
    return (
      <div className="layout">
        <h1 className="story">{data[this.state.counter].historia}</h1>
        <Options
          handleClick={this.handleClick}
          optionA={data[this.state.counter].opciones.a}
          optionB={data[this.state.counter].opciones.b}
        />
        <OptionHistory
          previusSelection={this.state.previusSelection}
          chosenOptions=
          {this.state.chosenOptions.map(
            (e, index) => (
              <li key={index}>{e}</li>
            ),
            data[this.state.counter].id
          )}
        />
      </div>
    );
  }
}
export default AppStory;