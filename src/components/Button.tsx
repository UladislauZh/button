import React from "react";

type PropsButtonType = {
  name: string;
  callBack: () => void;
};

export const Button = (props: PropsButtonType) => {
  const onClickHandler = () => {
    props.callBack();
  };
  return <button onClick={onClickHandler}>{props.name}</button>;
};
