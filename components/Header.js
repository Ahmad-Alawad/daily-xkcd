import Link from 'next/link'


export default function Header(props){
    return(
        <nav>
            <Link href='/'>
                <a style={{textDecoration:'none', color:"black",margin: "10px"}}><h2>Home</h2></a>
            </Link>
            <Link href='/about'>
                <a style={{textDecoration:'none', color:"black",margin: "10px"}}><h2>About</h2></a>
            </Link>
            
        </nav>
    )
}