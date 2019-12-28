const postReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_POST':
            return state.concat([action.data]);
        case 'DELETE_POST':
            return state.filter((post)=> post.id !== action.id);
        case 'EDIT_POST':
            return state.map((post)=> post.id === action.id ? {...post,isEdit:!post.isEdit} : post);
        case 'UPDATE_POST':
            return state.map((post) => {
                if(post.id === action.id) {
                    return {
                        ...post,
                        title:action.data.title,
                        desc:action.data.desc,
                        isEdit: !post.isEdit
                    }
                }
                else 
                    return post;
            });
        default:
            return state;
    }
}

export default postReducer;