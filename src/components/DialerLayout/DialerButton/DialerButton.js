import styles from "./DialerButton.module.css";

const DialerButton = (props) => {
    let styledClass = styles.button;
    props.dialer ? styledClass = styles.dialer_buton : styledClass = styles.button;
    return (
        <button className={styledClass} > {props.children}</button >
    )
}

export default DialerButton; 