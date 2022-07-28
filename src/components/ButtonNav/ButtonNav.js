import styles from "./ButtonNav.module.css";

const ButtonNav = () => {

    const navButtonClickHandler = (id) => {

        if (id === "keypad") {
            document.getElementById("recents").classList.remove(styles.active_button);
            document.getElementById("contacts").classList.remove(styles.active_button);
        }
        else if (id === "recents") {
            document.getElementById("keypad").classList.remove(styles.active_button);
            document.getElementById("contacts").classList.remove(styles.active_button);
        }
        else {
            document.getElementById("recents").classList.remove(styles.active_button);
            document.getElementById("keypad").classList.remove(styles.active_button);
        }

        const elem = document.getElementById(id);
        elem.classList.add(styles.active_button);

    }

    return (
        <div className={styles.nav}>
            <div className={styles.nav_container}>
                <button className={styles.nav_container_button} id="keypad" onClick={() => { navButtonClickHandler("keypad") }}>Keypad</button>
                <button className={styles.nav_container_button} id="recents" onClick={() => { navButtonClickHandler("recents") }}>Recents</button>
                <button className={styles.nav_container_button} id="contacts" onClick={() => { navButtonClickHandler("contacts") }}>Contacts</button>
            </div>
        </div>
    )
}

export default ButtonNav;