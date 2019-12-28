import React from 'react';
import AllPost from './AllPost';
import PostForm from './PostForm';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <h2 className="center ">Post It</h2>
      </div>
      <PostForm />
      <AllPost />
    </div>
  );
}

export default App;
