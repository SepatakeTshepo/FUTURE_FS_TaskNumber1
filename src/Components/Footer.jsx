const Footer = () =>{
    
    return (

    <footer className = {styles.footer}>
        <p className={styles.text}>   
            Built with <span className={styles.highlight} >React</span>
            {""}{""}
            <span className={styles.highlight}>{new Date().getFullYear()}</span>
        </p>

        <div className="{styles.ticker}">
            <div className="styles.track">
                <span> HTML . CSS . JAVASCRIPT . REACT </span>
                <span> HTML . CSS . JAVASCRIPT . REACT </span>



            </div>



        </div>

    </footer>


    )
}

export default Footer;