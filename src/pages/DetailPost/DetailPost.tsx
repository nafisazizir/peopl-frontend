import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonNormal from "../../components/Button/Normal/ButtonNormal";
import PostCard from "../../components/PostCard/PostCard";
import CommentInput from "../../components/CommentInput/CommentInput";
import "./DetailPostStyle.css";
import CommentCard, { Comment } from "../../components/CommentCard/CommentCard";

export const commentDummy: Array<Comment> = [
  {
    createdAt: new Date().toLocaleString(),
    content: "This is comment 1",
    author: " u/PokemonAir77",
    replies: [
      {
        createdAt: new Date().toLocaleString(),
        content: "This is child of pokemon 1",
        author: " u/nama user 1",
        replies: [
          {
            createdAt: new Date().toLocaleString(),
            content: "This is child of child of pokemon 1",
            author: " u/nama user 5",
            replies: [],
          },
        ],
      },
      {
        createdAt: new Date().toLocaleString(),
        content: "This is child of pokemon 1",
        author: " u/nama user 2",
        replies: [],
      },
      {
        createdAt: new Date().toLocaleString(),
        content: "This is child of pokemon 1",
        author: " u/nama user 3",
        replies: [],
      },
    ],
  },
  {
    createdAt: new Date().toLocaleString(),
    content: "This is comment 2",
    author: " u/PokemonAir66",
    replies: [],
  },
];

export default function DetailPost({}) {
  document.body.style.backgroundColor = "var(--neutral-10)";
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

  const [comments, setComments] = useState(commentDummy);
  const onComment = (newComment: Comment) => {
    setComments((prev) => [newComment, ...prev]);
  };
  return (
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
        <PostCard
          title={"Dummy Title Post"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          author={"u/PokemonAir77"}
          community={"c/pecintapikachu"}
          totalComments={5}
          createdAt={new Date()}
        />
        <CommentInput onComment={onComment} />
        {comments.map((comment) => (
          <CommentCard comment={comment} />
        ))}
      </div>
    </div>
  );
}
