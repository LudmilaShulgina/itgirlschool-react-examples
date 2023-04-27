import React from "react";
import styles from "./button.module.css";
import * as classnames from "classnames";

export default function Button() {
  const className = classnames(styles.button, {
    [styles.button__success]: this.props.success,
  });

  return <button className={className}>Нажми меня</button>;
}
