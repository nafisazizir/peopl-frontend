import { useEffect, useState } from "react";
import "./CommunityStyle.css";
import HeaderCommunity from "../../components/Header/HeaderCommunity";
import CreatePostHome from "../../components/CreatePost/CreatePostHome";
import PostCard from "../../components/PostCard/PostCard";
import { Post } from "../../services/post";
import CommunityDataService, {
  CommunityDetails,
} from "../../services/communitites";
import { useParams } from "react-router-dom";

const Community = () => {
  document.body.style.backgroundColor = "var(--neutral-10)";
  document.body.style.margin = "0px 0px 0px 0px";

  const [posts, setPosts] = useState<Post[]>([]);
  const [communityDetails, setCommunityDetails] = useState<CommunityDetails>({
    name: "community",
    description:
      "a place to talk about everything, a place to grow and be yourself",
    isMember: false,
    createdAt: new Date(),
    posts: [],
    totalMembers: 0,
  });
  const { communityName } = useParams();
  const [isMember, setIsMember] = useState(false);

  useEffect(() => {
    const fetchCommunityDetails = async () => {
      try {
        const response = await CommunityDataService.getCommunityDetails(
          communityName ? communityName : "csMajor"
        );
        setCommunityDetails(response.data);
        setPosts(response.data.posts);
        setIsMember(response.data.isMember);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchCommunityDetails();
  }, []);

  useEffect(() => {
    const fetchCommunityDetails = async () => {
      try {
        const response = await CommunityDataService.getCommunityDetails(
          communityName ? communityName : "csMajor"
        );
        setCommunityDetails(response.data);
        setPosts(response.data.posts);
        setIsMember(response.data.isMember);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchCommunityDetails();
  }, [isMember]);

  const handleClickJoinOrLeave = () => {
    if (communityName) {
      if (communityDetails.isMember === false) {
        CommunityDataService.joinCommunity(communityName);
        setIsMember(!!!isMember);
      } else {
        CommunityDataService.leaveCommunity(communityName);
        setIsMember(!!!isMember);
      }
    }
  };

  return (
    <div className="community-layout">
      <HeaderCommunity
        name={communityDetails.name}
        description={communityDetails.description}
        totalMembers={communityDetails.totalMembers}
        totalPosts={posts.length}
        isMember={isMember}
        joinOrLeaveClick={handleClickJoinOrLeave}
      />
      <div className="community-post-layout">
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
    </div>
  );
};

export default Community;
