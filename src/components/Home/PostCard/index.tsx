import { useNavigate} from "react-router-dom"
import { PostType } from "../../../redux-setup/types"
import './index.scss'
type PostCardPropsType = {
    post:PostType
}
export const PostCard = ({post}:PostCardPropsType)=>{
    const navigate  = useNavigate();
    const handleEdit = ()=>{
        navigate(`${post.id}`)
    }
    const handleDelete = ()=>{

    }
    return (<div className="card">
        <h3 className="card-title">{post.title}</h3>
        <p className="card-body">{post.body}</p>
        <nav className="card-actions">
            <button onClick={handleEdit}>
                Edit
            </button>
            <button onClick={handleDelete}>
                Delete
            </button>
        </nav>
    </div>)
}