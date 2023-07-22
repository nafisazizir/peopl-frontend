import { useEffect, useState } from "react";
import "./SearchStyle.css";
import PostCard from "../../components/PostCard/PostCard";
import { Post } from "../../services/post";
import SearchDataService, { Community, User } from "../../services/search";
import ScrollButton from "../../components/Button/ScrollButton/ScrollButton";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { TabList, Tabs, Tab, TabPanel } from "react-tabs";
import CommunityCard from "../../components/CommunityCard/CommunityCard";
import PeopleCard from "../../components/PeopleCard/PeopleCard";
import EmptyState from "../../components/EmptyState/EmptyState";
import NavigationBar from "../../components/Navigation/NavigationBar";

type Props = {};

export default function Search({}: Props) {
  document.body.style.backgroundColor = "var(--neutral-10)";
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const keyword = queryParams.keyword;
  document.body.style.margin = "0px 0px 0px 0px";
  const [posts, setPosts] = useState<Post[]>([]);
  const [communities, setCommunities] = useState<Community[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const response = await SearchDataService.search({
          keyword: keyword,
        });
        setPosts(response.data.posts);
        setCommunities(response.data.communities);
        setUsers(response.data.users);
      } catch (error) {
        console.error("Failed to fetch:", error);
      }
    };

    fetchSearch();
  }, []);

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const response = await SearchDataService.search({
          keyword: keyword,
        });
        setPosts(response.data.posts);
        setCommunities(response.data.communities);
        setUsers(response.data.users);
      } catch (error) {
        console.error("Failed to fetch:", error);
      }
    };

    fetchSearch();
  }, [keyword]);
  return (
    <>
      <NavigationBar />
      <div className="home-layout">
        <div className="tab-container">
          <Tabs defaultIndex={0} selectedTabClassName="tab-button-active-style">
            <TabList className={"tab-list"}>
              <Tab className={"tab-button tab-button-style"}>Posts</Tab>
              <Tab className={"tab-button tab-button-style"}>Communities</Tab>
              <Tab className={"tab-button tab-button-style"}>Peopls</Tab>
            </TabList>

            <TabPanel>
              <div className="posts">
                {posts.length > 0 ? (
                  posts.map((post) => (
                    <PostCard
                      title={post.title}
                      content={post.content}
                      author={post.author}
                      community={post.community}
                      totalComments={post.totalComments}
                      createdAt={post.createdAt}
                      withFooter={true}
                      id={post._id}
                    />
                  ))
                ) : (
                  <EmptyState />
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="communities">
                {communities.length > 0 ? (
                  communities.map((community) => (
                    <CommunityCard
                      community={community.name}
                      numOfMem={community.members.length}
                      description={community.description}
                    />
                  ))
                ) : (
                  <EmptyState />
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="peoples">
                {users.length > 0 ? (
                  users.map((user) => (
                    <PeopleCard
                      user={user.username}
                      totalCommunities={user.followedCommunities.length}
                    />
                  ))
                ) : (
                  <EmptyState />
                )}
              </div>
            </TabPanel>
          </Tabs>
        </div>

        <ScrollButton buttonText={"Back to Top"} />
      </div>
    </>
  );
}
