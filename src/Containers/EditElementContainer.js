import React from 'react'

class EditElementContainer extends React.Component {
    render(){
        return(
            <div className='edit-container'>
            <p>{this.props.title}</p>
            <form>
                <label>Title</label>
                <input type="text" name="title" value={this.props.title} onChange={this.handleChange}/>
                <label>Description: </label>
                <input type="text" name="description" value={this.props.description} onChange={this.handleChange}/>
                <label>Content</label>
                <input type="text" name="content" value={this.props.content} onChange={this.handleChange}/>
            </form>
            </div>
    )}
}

export default EditElementContainer