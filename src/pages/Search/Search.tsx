import React, { useEffect, useState } from "react";
import "./SearchStyle.css";
import PostCard from "../../components/PostCard/PostCard";
import PostDataService, { Post } from "../../services/post";
import ScrollButton from "../../components/Button/ScrollButton/ScrollButton";

import { useNavigate } from "react-router-dom";
import { TabList, Tabs, Tab, TabPanel } from "react-tabs";
import CommunityCard from "../../components/CommunityCard/CommunityCard";
import PeopleCard from "../../components/PeopleCard/PeopleCard";

type Props = {};

export default function Search({}: Props) {
  document.body.style.backgroundColor = "var(--neutral-10)";
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

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
  return (
    <>
      <div className="home-layout">
        <div className="tab-container">
          <Tabs defaultIndex={1} selectedTabClassName="tab-button-active-style">
            <TabList className={"tab-list"}>
              <Tab className={"tab-button tab-button-style"}>Posts</Tab>
              <Tab className={"tab-button tab-button-style"}>Communities</Tab>
              <Tab className={"tab-button tab-button-style"}>Peopls</Tab>
            </TabList>

            <TabPanel>
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
            </TabPanel>
            <TabPanel>
              <div className="communities">
                <CommunityCard
                  community={"testing"}
                  numOfMem={0}
                  numOfPost={0}
                  description={"testingdescription"}
                />
                {/* {community.map((community, description) => (
            <CommunityCard
              community={"testing"}
              numOfMem={0}
              numOfPost={0}
              description={"testingdescription"}
            /> */}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="peoples">
                <PeopleCard user={"nama user"} numOfPost={10} />
              </div>
            </TabPanel>
          </Tabs>
          {/* <Tab
            buttonText={"Posts"}
            isDefault={true}
            onClick={() => {
              navigate("/search/posts");
            }}
          />
          <Tab
            buttonText={"Communities"}
            onClick={() => {
              navigate("/search/communities");
            }}
          />
          <Tab
            buttonText={"Peoples"}
            onClick={() => {
              navigate("/search/peoples");
            }}
          /> */}
        </div>

        <ScrollButton buttonText={"Back To Top"} />
      </div>
    </>
  );
}
