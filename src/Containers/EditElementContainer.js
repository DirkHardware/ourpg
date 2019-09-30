import React from 'react'

class EditElementContainer extends React.Component {

    state = {
        title: this.props.title,
        description: this.props.description,
        content: this.props.content,
        game_id: this.props.game_id,
        // element_id: this.props.element_id,
        order: this.props.order,
        kind: this.props.kind
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        let editedElement = {title: this.state.title, description: this.state.description, kind: 'text', content: this.state.content, order: this.state.order, game_id: this.state.id}
        console.log(editedElement);
        fetch(`http://localhost:3000/elements/${this.props.element_id}/update`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                Accepts: "application/json"
            },
            body: JSON.stringify(editedElement)
        })
            .then(resp => resp.json())
            .then(json => {
                this.props.history.push(`/usergames/${this.state.game_id}`);
            });
    };

    render(){
        return(
            <div className='edit-container'>
                <p>{this.props.title}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                    <label>Description: </label>
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
                    <label>Content</label>
                    <input type="text" name="content" value={this.state.content} onChange={this.handleChange}/>
                    <button>Commit Change</button>
                </form>
            </div>
    )}
}

export default EditElementContainer