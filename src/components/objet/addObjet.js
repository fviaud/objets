import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TryAddObjet } from './../../store/actions';

class AddObjet extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  submitObjet = () => {
    this.props.TryAddObjet({
      name: this.input.current.value,
    });
    this.input.current.value = '';
  }

  render() {
    return (
      <div className="d-flex mb-4">
      <input ref={this.input} type="text" className="form-control mr-5" />
      <button onClick={ this.submitObjet } className="btn btn-success btn-sm"> Ajouter </button>
    </div>
    )
  }
}

export default connect(null, {TryAddObjet})(AddObjet);
