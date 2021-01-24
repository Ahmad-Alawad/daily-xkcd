import Header from '../components/Header'
import styles from '../styles.module.css'
export default function MyLayout(props){
    return(
            <div className={styles.hello}>
                <Header />
                {props.children}
                <style jsx>{`
                    background: gray;
                    color: goldenrod;
                    display: inline-block;
                `}

                </style>
            </div>

    )
}