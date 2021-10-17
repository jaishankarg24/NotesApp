import React from 'react'
import { Link } from 'react-router-dom'

let getTime = (note) => {
    return new Date(note.updated).toLocaleDateString()
}


let getTitle = (note) => {
    //spit by new lines and just get the first line
    //split will make a list of each line and will only pull on the first line by index zero
    const title = note.body.split('\n')[0]
    if (title.length > 45) {
        return title.slice(0, 45)
    }
    return title
}


let getContent = (note) => {
    //Get content after title
    let title = getTitle(note)
    let content = note.body.replaceAll('\n', '')
    content = content.replaceAll(title, '')

    //Slice content and add three dots in over 45 characters to show there is more
    if (content.length > 45) {
        return content.slice(0, 45) + '...'
    } else {
        return content
    }

}


const ListItem = ({ note }) => {
    return (
        <Link to={`/note/${note.id}`}>
            <div className="notes-list-item">
                <h3>{getTitle(note)}</h3>
                <p><span>{getTime(note)}</span>{getContent(note)}</p>
            </div>
        </Link>
    )
}
/*
const ListItem = ({note}) => {


    return (
        <Link to={`/note/${note.id}`}>
            <div className="notes-list-item">
                 <h1>{note.body}</h1>
            
            </div>
        </Link>
    )
}
*/

/*
const ListItem = (props) => {

    console.log("PROPS:", props.note);
    return (
        <div key={props.note.id}>
            <h1>{props.note.body}</h1>
            
        </div>
    )
}
*/
export default ListItem
