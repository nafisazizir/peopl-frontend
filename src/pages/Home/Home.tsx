import React, { useEffect, useState } from "react";
import "./HomeStyle.css";
import CreatePostHome from "../../components/CreatePost/CreatePostHome";
import PostCard from "../../components/PostCard/PostCard";
import PostDataService, { Post } from "../../services/post";

const Home = () => {
  document.body.style.backgroundColor = "var(--neutral-10)";

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await PostDataService.getPosts();
        console.log(response.data);
        setPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <div className="home-layout">
      <CreatePostHome />
      <div className="posts">
        {posts.map((post) => (
          <PostCard
            title={post.title}
            content={post.content}
            author={post.author}
            community={post.community}
            totalComments={post.totalComments}
            createdAt={post.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
