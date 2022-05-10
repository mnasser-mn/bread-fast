import { Link } from "react-router-dom"
import './index.scss';
export const NotFound = ()=>{
    return <div className='container'>
        <h1>404</h1>
        <h3>Sorry, page not found!</h3>
        <p className="message">
            {`You can navigate to `}
            <Link to={`${process.env.PUBLIC_URL}/posts`}>
             home
            </Link>
        </p>
    </div>
}
