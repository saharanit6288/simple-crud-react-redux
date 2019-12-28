import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editPost, updatePost} from './actionTypes';

class EditPost extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const id = this.props.post.id;
        const data = {
            title: this.title.value,
            desc: this.desc.value
        };
        //console.log(data); 

        this.props.dispatch(updatePost(id,data));

        this.title.value='';
        this.desc.value='';
    }

    handleCancel = (e) => {
        e.preventDefault();
        this.props.dispatch(editPost(this.props.post.id));
    }

    render () {
        return (
            <div className="post">
                <form className="form" onSubmit={this.handleEdit}>
                    <input type="text" required placeholder="Enter post title"
                        ref={(input)=>this.title = input}
                        defaultValue={this.props.post.title} />
                    <br />
                    <textarea rows="5" cols="10" required placeholder="Enter description"
                        ref={(input)=>this.desc=input}
                        defaultValue={this.props.post.desc} />
                    <br />
                    <button>Save</button>
                    <button className="cancel" onClick={this.handleCancel}>Cancel</button>
                </form>
            </div>
        );
    }
}

export default connect()(EditPost);
