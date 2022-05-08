import { Link } from "react-router-dom"
import './index.scss';
export const NotFound = ()=>{
    return <div className='container'>
        <h1>404</h1>
        <h3>Sorry, Page Not Found!</h3>
        <p className="message">
            {`You can navigate to `}
            <Link to="/posts">
             home
            </Link>
        </p>
    </div>
}
