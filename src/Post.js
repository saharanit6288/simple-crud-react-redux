import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deletePost, editPost} from './actionTypes';

class Post extends Component {
    handleDelete = (e) => {
        e.preventDefault();
        this.props.dispatch(deletePost(this.props.post.id));
    }

    handleEdit = (e) => {
        e.preventDefault();
        this.props.dispatch(editPost(this.props.post.id));
    }

    render() {
        return (
            <div className="post">
                <h2 className="post_title">{this.props.post.title}</h2>
                <p className="post_message">{this.props.post.desc}</p>
                <div className="control-buttons">
                    <button className="edit" onClick={this.handleEdit}>Edit</button>
                    <button className="delete" onClick={this.handleDelete}>Delete</button>
                </div>
            </div>
        )
    }
}

export default connect()(Post);