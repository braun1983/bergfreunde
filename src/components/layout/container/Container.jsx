import styles from './Container.module.css'

function Container(props){
    return (
        <main className={`${styles.container} ${styles[props.customClass]}`}>
           {props.children}
        </main>
    )
}

export default Container