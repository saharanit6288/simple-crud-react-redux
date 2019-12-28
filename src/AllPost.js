import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import EditPost from './EditPost';

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

class AllPost extends Component {
    render () {
        return (
            <div>
                <h1 className="post_heading">All Post</h1>
                {
                this.props.posts.map(
                    (post) => 
                        <div key={post.id}>
                            {
                                post.isEdit ?
                                <EditPost key={post.id} post={post} /> 
                                : <Post key={post.id} post={post} />
                            }
                        </div>
                    )
                }
            </div>
        );
    }
}

export default connect(mapStateToProps)(AllPost);
