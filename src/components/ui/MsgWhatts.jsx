import styles from './MsgWhatts.module.css'

function MsgWhatts({textNotice, textButton }){
    return (
         <div className={styles.integrantes_cta}>
                <p className={styles.integrantes_cta_texto}>
                    {textNotice}
                </p>
                <a
                    href='https://wa.me/5527981226714?text=Ol%C3%A1!%20Gostaria%20de%20ser%20adicionado%20%C3%A0%20lista%20de%20integrantes%20do%20Bergfreunde.'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.integrantes_cta_btn}
                >
                    <i className='ti ti-brand-whatsapp'></i>
                    {textButton}
                </a>
            </div>
            

           
    )
}

export default MsgWhatts