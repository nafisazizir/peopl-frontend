import { useEffect, useState } from "react";
import "./ProfileStyle.css";
import HeaderProfile from "../../components/Header/HeaderProfile";
import PostCard from "../../components/PostCard/PostCard";
import { Post } from "../../services/post";
import UserDataService, { UserDetails } from "../../services/user";
import { useParams } from "react-router-dom";
import NavigationBar from "../../components/Navigation/NavigationBar";

const ProfileOther = () => {
  document.body.style.backgroundColor = "var(--neutral-10)";
  document.body.style.margin = "0px 0px 0px 0px";
  const { username } = useParams();
  const [posts, setPosts] = useState<Post[]>([]);
  const [userDetails, setUserDetails] = useState<UserDetails>({
    username: "john.doe",
    email: "john.doe@gmail.com",
    followedCommunities: [],
    posts: [],
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await UserDataService.getUserDetails(
          username ? username : "john.doe"
        );
        console.log(response.data);
        setUserDetails(response.data);
        setPosts(response.data.posts);
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="profile-layout">
        <HeaderProfile
          username={userDetails.username}
          totalfollowedCommunities={userDetails.followedCommunities.length}
          totalPosts={posts.length}
        />

        <div className="profile-post-layout">
          <div className="posts">
            {posts.map((post) => (
              <PostCard
                title={post.title}
                content={post.content}
                author={post.author}
                community={post.community}
                totalComments={post.totalComments}
                createdAt={post.createdAt}
                id={post._id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileOther;
