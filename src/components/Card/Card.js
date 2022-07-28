import { useState } from "react";
import styles from "./Card.module.css";

const Card = (props) => {


    let styleVal = styles.card;

    if (props.type === "keypad") {
        styleVal = `${styles.card} ${styles.dialer_card}`;
    }
    else if (props.type === "calling") {
        styleVal = `${styles.card} ${styles.calling_card}`;
    }

    return (
        <div className={styleVal}>{props.children}</div>
    )

}

export default Card;