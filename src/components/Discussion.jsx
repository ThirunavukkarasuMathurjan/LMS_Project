import React, { useState } from 'react';

function Discussion() {
  const [posts, setPosts] = useState([
    { id: 1, content: "What is the due date for Assignment 1?", replies: [] },
    { id: 2, content: "Can someone explain the concept of closures?", replies: [] },
  ]);

  const [newPost, setNewPost] = useState('');
  const [replies, setReplies] = useState({});

  const handleAddPost = () => {
    if (newPost.trim()) {
      setPosts([...posts, { id: posts.length + 1, content: newPost, replies: [] }]);
      setNewPost('');
    }
  };

  const handleAddReply = (postId) => {
    const replyContent = replies[postId] || '';
    if (replyContent.trim()) {
      const updatedPosts = posts.map((post) => {
        if (post.id === postId) {
          return { ...post, replies: [...post.replies, replyContent] };
        }
        return post;
      });
      setPosts(updatedPosts);
      setReplies({ ...replies, [postId]: '' }); // Clear the reply field for this post
    }
  };

  const handleReplyChange = (postId, value) => {
    setReplies({ ...replies, [postId]: value });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Discussion Portal</h1>

      {/* Post a new discussion */}
      <div className="mb-6">
        <textarea
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          placeholder="Post your question or comment..."
          rows="4"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button
          onClick={handleAddPost}
          className="bg-blue-500 text-white p-2 rounded-lg w-full hover:bg-blue-600 transition duration-200"
        >
          Post Discussion
        </button>
      </div>

      {/* List of Posts */}
      <div>
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-100 p-4 mb-4 rounded-lg shadow-sm">
            <p className="text-gray-800 font-semibold mb-2">{post.content}</p>

            {/* Display replies */}
            {post.replies.length > 0 && (
              <div className="pl-6 space-y-2">
                {post.replies.map((reply, index) => (
                  <p key={index} className="text-gray-600 text-sm">{`- ${reply}`}</p>
                ))}
              </div>
            )}

            {/* Add a reply */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Reply..."
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={replies[post.id] || ''}
                onChange={(e) => handleReplyChange(post.id, e.target.value)}
              />
              <button
                onClick={() => handleAddReply(post.id)}
                className="bg-green-500 text-white p-2 rounded-lg w-full mt-2 hover:bg-green-600 transition duration-200"
              >
                Post Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discussion;
