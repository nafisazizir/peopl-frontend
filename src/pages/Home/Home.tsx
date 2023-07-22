import React, { useEffect, useState } from "react";
import "./HomeStyle.css";
import CreatePostHome from "../../components/CreatePost/CreatePostHome";
import PostCard from "../../components/PostCard/PostCard";
import PostDataService, { Post } from "../../services/post";
import ScrollButton from "../../components/Button/ScrollButton/ScrollButton";
import NavigationBar from "../../components/Navigation/NavigationBar";


const Home = () => {
  document.body.style.backgroundColor = "var(--neutral-10)";
    document.body.style.margin = "0px 0px 0px 0px";

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await PostDataService.getPosts();
        setPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
      <>
          <NavigationBar/>
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
              <ScrollButton buttonText={"BackToTop"}/>
            </div>
      </>
  );
};

export default Home;
