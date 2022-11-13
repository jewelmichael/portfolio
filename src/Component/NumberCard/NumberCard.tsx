import React from 'react';
import s from "./NumberCard.module.scss";

function NumberCard(props: { count: string; value: String }) {
  return (
    <div className={s.Contain}>
      <h3 className={s.Count}>{props.count}</h3>
      <p className={s.Value}>{props.value}</p>
    </div>
  );
}

export default NumberCard;