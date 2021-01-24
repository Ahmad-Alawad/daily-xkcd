import Link from 'next/link'
import styles from '../styles.module.css'
export default function Footer(props){
    return(

        <footer>
            <h1>Previous {props.data.length}</h1>
            {props.data.map(data =>{
               return( <Link href ="/comics/[num].js" as ={`/comics/${data.num}`} key={data.num}>
                            <a className={styles.comics}>#{data.num}</a>
                        </Link>)
            })}
            <h3>@copyright Ahmad</h3>
        </footer>
    )
}