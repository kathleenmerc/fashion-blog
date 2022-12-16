import { Link } from 'react-router-dom'

export default function Footer (props) {
    return(
        <footer>
            <nav aria-label="Footer Navigation" role="navigation" className="bottom-nav">
                <ul>
                    <Link to={'#'} className='bottom-links'><li className="bottom-nav">Home</li></Link>
                    <Link to={'#'} className='bottom-links'><li className="bottom-nav">Women's</li></Link>
                    <Link to={'#'} className='bottom-links'><li className="bottom-nav">Men's</li></Link>
                    <Link to={'#'} className='bottom-links'><li className="bottom-nav">On the Street</li></Link>
                    <Link to={'#'} className='bottom-links'><li className="bottom-nav">The Catwalk</li></Link>
                    <Link to={'#'} className='bottom-links'><li className="bottom-nav">AdWatch</li></Link>
                    <Link to={'#'} className='bottom-links'><li className="bottom-nav">About</li></Link>
                    <Link to={'#'} className='bottom-links'><li className="bottom-nav">Tips</li></Link>
                </ul>
            </nav>
        <div className="copyright">
            &copy; 2013 Valet Industries,Inc
        </div>
    </footer>
    )
}