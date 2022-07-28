import DialerButton from "./DialerButton/DialerButton";
import styles from "./DialerLayout.module.css";
import Card from "../Card/Card";
import { useState } from 'react';

let dialerValue = "";

const DialerLayout = () => {


    const [newDialerValue, setDialerValue] = useState('');
    const getButtonValue = (buttonValue) => {
        dialerValue += buttonValue;

        setDialerValue(dialerValue);
    }

    const backSpaceValue = () => {
        dialerValue = dialerValue.slice(0, -1);
        setDialerValue(dialerValue);
    }

    return (
        <div className={styles.dialer_container}>
            <Card>
                <div>
                    <input type="tel" value={newDialerValue} className={styles.dialer_screen}></input>
                </div>

                <div className={styles.button_container}>
                    <DialerButton value="1" getValue={getButtonValue}>1</DialerButton>
                    <DialerButton value="2" getValue={getButtonValue}>2</DialerButton>
                    <DialerButton value="3" getValue={getButtonValue}>3</DialerButton>
                </div>
                <div className={styles.button_container}>
                    <DialerButton value="4" getValue={getButtonValue}>4</DialerButton>
                    <DialerButton value="5" getValue={getButtonValue}>5</DialerButton>
                    <DialerButton value="6" getValue={getButtonValue}>6</DialerButton>
                </div>
                <div className={styles.button_container}>
                    <DialerButton value="7" getValue={getButtonValue}>7</DialerButton>
                    <DialerButton value="8" getValue={getButtonValue}>8</DialerButton>
                    <DialerButton value="9" getValue={getButtonValue}>9</DialerButton>
                </div>
                <div className={styles.button_container}>
                    <DialerButton value="*" getValue={getButtonValue}>*</DialerButton>
                    <DialerButton value="0" getValue={getButtonValue}>0</DialerButton>
                    <DialerButton value="#" getValue={getButtonValue}>#</DialerButton>
                </div>
                <div className={styles.button_container}>
                    <DialerButton dialer={true}>
                        <img className={styles.dialer_image} src="images/dialer-icon.png" alt="dialer"></img>
                    </DialerButton>
                    <button className={styles.dialer_clear_button} onClick={backSpaceValue}>⌫</button>
                </div >
            </Card >
        </div >
    )
}

export default DialerLayout; 