import { Fragment } from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  if (true) {
    throw new Error("NOOOOOOOOOOOO");
  }
  return (
    <Fragment>
      {robots.map(({ id, name, email }, i) => {
        return <Card key={i} id={id} name={name} email={email} />;
      })}
    </Fragment>
  );
};

export default CardList;
