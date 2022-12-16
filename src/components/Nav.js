import { Link } from 'react-router-dom'

export default function Nav(props) {
    return (
        <nav aria-label="Main Navigation" role="navigation" className="top-nav">
            <ul>
                <Link to={'/#'}><li className="top-nav">Women's</li></Link>
                <Link to={'/#'}> <li className="top-nav">Men's</li></Link>
                <Link to={'/#'}><li className="top-nav">On the Street</li></Link>
                <Link to={'/#'}><li className="top-nav">The Catwalk</li></Link>
                <Link to={'/#'}> <li className="top-nav">AdWatch</li></Link>
                <Link to={'/#'}><li className="top-nav">About</li></Link>
            </ul>
        </nav>
    )
}
