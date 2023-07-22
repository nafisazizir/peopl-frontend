import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonNormal from "../../components/Button/Normal/ButtonNormal";
import PostCard from "../../components/PostCard/PostCard";
import CommentInput from "../../components/CommentInput/CommentInput";
import "./DetailPostStyle.css";
import PostDataService, { Post } from "../../services/post";
import CommentCard from "../../components/CommentCard/CommentCard";
import NavigationBar from "../../components/Navigation/NavigationBar";

export default function DetailPost() {
  document.body.style.backgroundColor = "var(--neutral-10)";
  document.body.style.margin = "0px 0px 0px 0px";
  const navigate = useNavigate();
  const iconBack = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 10C17 10.4142 16.6642 10.75 16.25 10.75L5.61208 10.75L9.76983 14.7094C10.0684 14.9965 10.0777 15.4713 9.79062 15.7698C9.50353 16.0684 9.02875 16.0777 8.73017 15.7906L3.23017 10.5406C3.08311 10.3992 3 10.204 3 10C3 9.79599 3.08311 9.60078 3.23017 9.45938L8.73017 4.20938C9.02875 3.92228 9.50353 3.93159 9.79062 4.23017C10.0777 4.52875 10.0684 5.00353 9.76983 5.29063L5.61208 9.25L16.25 9.25C16.6642 9.25 17 9.58579 17 10Z"
        fill="#FC7201"
      />
    </svg>
  );
  function getRelativeTime(createdAt: Date): string {
    const now = new Date();
    const diffInSeconds = Math.floor(
      (now.getTime() - createdAt.getTime()) / 1000
    );

    const timeUnits: { [unit: string]: number } = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
    };

    for (const unit in timeUnits) {
      const seconds = timeUnits[unit as keyof typeof timeUnits];
      const interval = Math.floor(diffInSeconds / seconds);

      if (interval >= 1) {
        return `${interval}${unit.charAt(0)}`;
      }
    }

    return "now";
  }

  const [post, setPost] = useState<Post>();
  const [comments, setComments] = useState(post?.comments);
  const { id } = useParams();

  const onComment = (newComment: Comment) => {
    if (comments) {
      setComments([...comments]);
    }
  };

  useEffect(() => {
    const fetchDetailPost = async () => {
      try {
        console.log(id);
        const response = await PostDataService.getPostDetails(id ? id : "0");
        setPost(response.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchDetailPost();
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="home-layout">
        <div className="tab-navigator">
          <ButtonNormal
            iconLeft={iconBack}
            buttonText={"Back to Previous Page"}
            isSecondary={false}
            isGhost={true}
            onClick={() => {
              navigate(-1);
            }}
          />
        </div>
        <div className="post-container">
          {post && (
            <PostCard
              title={post.title}
              content={post.content}
              author={post.author}
              community={post.community}
              totalComments={post.totalComments}
              createdAt={post.createdAt}
              id={post._id}
            />
          )}

          {post && <CommentInput onComment={onComment} parentID={post._id} />}
          {post &&
            post.comments.map((comment) => <CommentCard comment={comment} />)}
        </div>
      </div>
    </>
  );
}
