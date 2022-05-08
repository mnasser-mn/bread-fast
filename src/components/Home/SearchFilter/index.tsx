import { useState } from "react"
import './index.scss'

type SearchFilterPropType = {
    onKeywordsChange:(keywords:string)=>void
}
export const SearchFilter = ({onKeywordsChange}:SearchFilterPropType)=>{
    const [keywords,setKeywords] = useState('')
    const handleReset = ()=>{
        setKeywords('')
        onKeywordsChange('')

    }
    const handleChange = (e:any)=>{
        setKeywords(e.target.value)
        onKeywordsChange(e.target.value)
    }
    
    return (
        <div className="search-container">
            <input type="text" placeholder="Filter By Title..." 
            value={keywords}
            onChange={handleChange}/>
            <button 
                onClick={handleReset}
            >Reset Search</button>
        </div>
    )
}