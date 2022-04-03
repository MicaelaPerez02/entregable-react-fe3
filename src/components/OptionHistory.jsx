import { Component } from "react";

class Historial extends Component {
  render() {
    return (
      <div className="recordatorio">
        <h3>Selección previa: {this.props.previusSelection}</h3>
        <h4>Anteriormente seleccionado</h4>
        <ul>{this.props.chosenOptions}</ul> 
      </div>
    );
  }
}

export default Historial;