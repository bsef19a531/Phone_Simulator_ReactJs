import styles from "./DialerButton.module.css";

const DialerButton = (props) => {

    const onButtonTap = () => {
        if (!props.dialer) { props.getValue(props.value); }
    }

    let styledClass = styles.button;
    props.dialer ? props.cancel ? styledClass = styles.dialer_cancel_button : styledClass = styles.dialer_buton : styledClass = styles.button;
    return (
        <button className={styledClass} onClick={onButtonTap} value={props.value} > {props.children}</button >
    )
}

export default DialerButton; 