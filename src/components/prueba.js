 //metodo que se ejecuta cuando se hace click en una opcion
 handleClick = (e) => {
    //traigo el id del boton que se hizo click
    const click = e.target.id;
    if (click === 'Volver' && this.state.counter === 0) {
      alert('No hay opciones anteriores.');
    }
    else if (this.state.counter >= 7 && click === 'A') {
      alert('Fin. Actualiza para jugar de nuevo.');
      document.getElementById('Volver').disabled = true;
    }
    else if (this.state.counter >= 8 && click === 'B') {
      alert('Fin. Actualiza para jugar de nuevo.');
      document.getElementById('Volver').disabled = true;
    } else if (click === 'A' && this.state.previusSelection !== 'A') {
      //actualizo el estado aumentando el contador y guardando la opcion elegida
      this.setState({
        counter: this.state.counter + 1,
        previusSelection: 'A',
      })
    } else if (click === 'Volver' && this.state.previusSelection === 'A' && this.state.counter === 1) {
      this.setState({
        counter: this.state.counterBackOption - 1,
        previusSelection: this.state.optionBack,
      });
    } else if (click === 'Volver' && this.state.previusSelection === 'B' && this.state.counter === 2) {
      this.setState({
        counter: this.state.counterBackOption - 2,
        previusSelection: this.state.optionBack,
      });
    } else if (click === 'Volver' && this.state.previusSelection === 'A' && this.state.counter === 3) {
      this.setState({
        counter: this.state.counter - 2,
        previusSelection: this.state.optionBack,
      });
    } else if (click === 'Volver' && this.state.previusSelection === 'B' && this.state.counter === 4) {
      this.setState({
        counter: this.state.counter - 2,
        previusSelection: this.state.optionBack,
      });
   } else if (click === 'Volver' && this.state.previusSelection === 'A' && this.state.counter === 5) {
      this.setState({
        counter: this.state.counter - 2,
        previusSelection: this.state.optionBack,
      });
    } else if (click === 'Volver' && this.state.previusSelection === 'B' && this.state.counter === 6) {
      this.setState({
        counter: this.state.counter - 2,
        previusSelection: this.state.optionBack,
      });
    } else if (click === 'Volver' && this.state.previusSelection === 'A' && this.state.counter === 7) {
      this.setState({
        counter: this.state.counter - 2,
        previusSelection: this.state.optionBack,
      });
    } else if (click === 'Volver' && this.state.previusSelection === 'B' && this.state.counter === 8) {
      this.setState({
        counter: this.state.counter - 2,
        previusSelection: this.state.optionBack,
      });
    } else if (click === 'A' && this.state.previusSelection === 'A') {
      this.setState({
        counter: this.state.counter + 2,
      });
    } else if (click === 'B' && this.state.previusSelection === 'A') {
      this.setState({
        counter: this.state.counter + 3,
        previusSelection: 'B',
      });
    } else if (click === 'B') {
      this.setState({
        counter: this.state.counter + 2,
        previusSelection: 'B',
      });
    }
  };