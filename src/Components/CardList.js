import React, { Component } from "react";
import Card from "./Card";

class CardList extends Component {
  render() {
    const { robots } = this.props;
    const cardComponent = robots.map((user, i) => {
      return <Card key={i} id={user.id} name={user.name} email={user.email} />;
    });
    return <div>{cardComponent}</div>;
  }
}

export default CardList;
