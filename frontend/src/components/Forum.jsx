import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase/firebaseConfig";
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const Forum = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, []);

  const createPost = async () => {
    if (!user) return alert("You must be logged in to post");
    if (!title.trim() || !content.trim()) return alert("Title and Content required");
    
    await addDoc(collection(db, "posts"), {
      title,
      content,
      author: user.displayName || "Anonymous",
      timestamp: new Date(),
    });
    setTitle("");
    setContent("");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Community Forum</h2>
      {user ? (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Post Title"
            className="w-full p-2 border rounded mb-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Write something..."
            className="w-full p-2 border rounded mb-2"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button
            onClick={createPost}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Post
          </button>
        </div>
      ) : (
        <p className="text-gray-600">Log in to post and comment.</p>
      )}
      <div className="mt-6">
        {posts.map((post) => (
          <div key={post.id} className="mb-4 p-4 border rounded-lg">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-700">{post.content}</p>
            <p className="text-sm text-gray-500">Posted by {post.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;