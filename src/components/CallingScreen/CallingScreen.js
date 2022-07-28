import styles from "./CallingScreen.module.css";
import Card from "../Card/Card";
import DialerButton from "../DialerLayout/DialerButton/DialerButton";

const CallingScreen = () => {
    return (
        <div className={styles.calling_container}>
            <Card type="calling">
                <div className={styles.calling_text}>
                    <p>Calling...</p>
                </div>
                <div className={styles.calling_subcontainer}>
                    <h1>Unknown</h1>
                    <h4>03334281605</h4>
                </div>
                <DialerButton dialer={true} cancel={true}>
                    <img className={styles.dialer_image} src="images/dialer-icon.png" alt="dialer"></img>
                </DialerButton>
            </Card>
        </div>
    )
}

export default CallingScreen; 