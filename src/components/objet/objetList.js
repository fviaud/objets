import React, { Component } from "react";
import { connect } from "react-redux";

import ObjetElement from "./objetElement";
import { TryDelObjet, fetchObjet } from "../../store/actions";
import { Loading } from "../../components";

class ObjetList extends Component {
  constructor(props) {
    super(props);
    props.fetchObjet();
  }
  render() {
    const { objets, Isloading, TryDelObjet, IsError } = this.props;
    return (
      <>
        {Isloading ? (
          IsError ? (
            <div>{IsError.message}</div>
          ) : (
            <Loading />
          )
        ) : (
          <ul className="list-group">
            {objets &&
              objets.map((o, i) => (
                <ObjetElement
                  key={i}
                  objet={o}
                  deleteObjet={() => TryDelObjet(i)}
                />
              ))}
          </ul>
        )}
      </>
    );
  }
}
export default connect(
  state => {
    let objets = state.objets.data;
    let Isloading = state.objets.loading;
    let IsError = state.objets.error;
    return { objets, Isloading, IsError };
  },
  { TryDelObjet, fetchObjet }
)(ObjetList);
