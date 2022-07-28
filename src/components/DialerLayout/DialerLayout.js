import DialerButton from "./DialerButton/DialerButton";
import styles from "./DialerLayout.module.css";
import Card from "../Card/Card";
// import { useState } from 'react';


const DialerLayout = () => {

    return (
        <div className={styles.dialer_container}>
            <Card>
                <input type="tel" className={styles.dialer_screen}></input>
                <div className={styles.button_container}>
                    <DialerButton>1</DialerButton>
                    <DialerButton>2</DialerButton>
                    <DialerButton>3</DialerButton>
                </div>
                <div className={styles.button_container}>
                    <DialerButton>4</DialerButton>
                    <DialerButton>5</DialerButton>
                    <DialerButton>6</DialerButton>
                </div>
                <div className={styles.button_container}>
                    <DialerButton>7</DialerButton>
                    <DialerButton>8</DialerButton>
                    <DialerButton>9</DialerButton>
                </div>
                <div className={styles.button_container}>
                    <DialerButton>*</DialerButton>
                    <DialerButton>0</DialerButton>
                    <DialerButton>#</DialerButton>
                </div>
                <div className={styles.button_container}>
                    <DialerButton dialer={true}>
                        <img className={styles.dialer_image} src="images/dialer-icon.png" alt="dialer"></img>
                    </DialerButton>
                </div>
            </Card>
        </div>
    )
}

export default DialerLayout; 