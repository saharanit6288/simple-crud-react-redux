import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addPost} from './actionTypes';

class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: new Date(),
            title: this.title.value,
            desc: this.desc.value,
            isEdit:false
        };
        //console.log(data); 

        this.props.dispatch(addPost(data));

        this.title.value='';
        this.desc.value='';
    }

    render () {
        return (
            <div className="post-container">
                <h1 className="post_heading">Create Post</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input type="text" required placeholder="Enter post title"
                        ref={(input)=>this.title = input} />
                    <br />
                    <textarea rows="5" cols="10" required placeholder="Enter description"
                        ref={(input)=>this.desc=input} />
                    <br />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}

export default connect()(PostForm);
