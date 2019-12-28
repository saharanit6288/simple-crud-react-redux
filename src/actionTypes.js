export function addPost(data) {
    return {
        type: 'ADD_POST',
        data
    }
}

export function deletePost(id) {
    return {
        type: 'DELETE_POST',
        id
    }
}

export function editPost(id) {
    return {
        type: 'EDIT_POST',
        id
    }
}

export function updatePost(id, data) {
    return {
        type: 'UPDATE_POST',
        id,
        data
    }
}