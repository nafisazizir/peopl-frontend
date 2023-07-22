import React, { useEffect, useState } from "react";
import "./CommunityStyle.css";
import HeaderCommunity from "../../components/Header/HeaderCommunity";
import CreatePostHome from "../../components/CreatePost/CreatePostHome";
import PostCard from "../../components/PostCard/PostCard";
import PostDataService, { Post } from "../../services/post";
import NavigationBar from "../../components/Navigation/NavigationBar";
import ScrollButton from "../../components/Button/ScrollButton/ScrollButton";

const Community = () => {
    document.body.style.backgroundColor = "var(--neutral-10)";
    document.body.style.margin = "0px 0px 0px 0px";

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
        <div className="community-layout">
            <NavigationBar />
            <HeaderCommunity />
            <div className="community-post-layout">
                <CreatePostHome />
                <div className="posts">
                    <PostCard
                    title={"Ash & Pikachu actually left the Pokemon anime"}
                    content={"After tons of speculations of what will happen to Ash and Pikachu " +
                        "after Pokemon Journey's ended, it is finally confirmed by The Official " +
                        "Pokemon Youtube Channel that they have finally reached the final chapter " +
                        "of their journey and they'll be replaced by the new protagonists(Liko - " +
                        "{which has some of ash's traits and a hairpin that resembles the logo on ash's hat, " +
                        "do you think she is his daughter?} and Roy) in the upcoming series.\n" +
                        "I thought of the possibilities, but this is the one i never thought " +
                        "would actually happen, Ash and Pikachu actually leaving the Pokemon anime after 25 years, " +
                        "this is truly the end of an era. What are you thoughts and opinions about this news, " +
                        "and what is in store for the future of Pokemon anime?\nAfter tons of speculations of what will happen to Ash and Pikachu " +
                        "after Pokemon Journey's ended, it is finally confirmed by The Official " +
                        "Pokemon Youtube Channel that they have finally reached the final chapter " +
                        "of their journey and they'll be replaced by the new protagonists(Liko - " +
                        "{which has some of ash's traits and a hairpin that resembles the logo on ash's hat, " +
                        "do you think she is his daughter?} and Roy) in the upcoming series.\n" +
                        "I thought of the possibilities, but this is the one i never thought " +
                        "would actually happen, Ash and Pikachu actually leaving the Pokemon anime after 25 years, " +
                        "this is truly the end of an era. What are you thoughts and opinions about this news, " +
                        "and what is in store for the future of Pokemon anime?\nAfter tons of speculations of what will happen to Ash and Pikachu " +
                        "after Pokemon Journey's ended, it is finally confirmed by The Official " +
                        "Pokemon Youtube Channel that they have finally reached the final chapter " +
                        "of their journey and they'll be replaced by the new protagonists(Liko - " +
                        "{which has some of ash's traits and a hairpin that resembles the logo on ash's hat, " +
                        "do you think she is his daughter?} and Roy) in the upcoming series.\n" +
                        "I thought of the possibilities, but this is the one i never thought " +
                        "would actually happen, Ash and Pikachu actually leaving the Pokemon anime after 25 years, " +
                        "this is truly the end of an era. What are you thoughts and opinions about this news, " +
                        "and what is in store for the future of Pokemon anime?"}
                    author={"u/pikachupika2424"}
                    community={"c/pecintapikachu"}
                    totalComments={12}
                    createdAt={new Date()}
                    />
                    {/*{posts.map((post) => (*/}
                    {/*    <PostCard*/}
                    {/*        title={post.title}*/}
                    {/*        content={post.content}*/}
                    {/*        author={post.author}*/}
                    {/*        community={post.community}*/}
                    {/*        totalComments={post.totalComments}*/}
                    {/*        createdAt={post.createdAt}*/}
                    {/*    />*/}
                    {/*))}*/}
                </div>

            </div>
            <ScrollButton buttonText={"BackToTop"}/>
        </div>
    );
};

export default Community;