import styles from "./ButtonNav.module.css";

const ButtonNav = () => {



    return (
        <div className={styles.nav}>
            <div className={styles.nav_container}>
                <button id="keypad">Keypad</button>
                <button id="recents">Recents</button>
                <button id="contacts">Contacts</button>
            </div>
        </div>
    )
}

export default ButtonNav;