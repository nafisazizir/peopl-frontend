import React, { useEffect, useState } from "react";
import "./ProfileStyle.css";
import HeaderProfile from "../../components/Header/HeaderProfile";
import CreatePostHome from "../../components/CreatePost/CreatePostHome";
import PostCard from "../../components/PostCard/PostCard";
import PostDataService, { Post } from "../../services/post";
import NavigationBar from "../../components/Navigation/NavigationBar";
import ScrollButton from "../../components/Button/ScrollButton/ScrollButton";

const ProfileOther = () => {
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
        <div className="profile-layout">
            <NavigationBar />
            <HeaderProfile />
            <div className="profile-post-layout">
                <CreatePostHome />
                <div className="posts">
                    <PostCard
                        title={"Digimon Adventure (1999) is arguably the best isekai ever made"}
                        content={"I'm not joking, I'm 100% serious. I was thinking about it today and came to the conclusion that I judge all isekai next to Digimon Adventure. Think about what Digimon Adventure brings to the table that other series can only dream of\n" +
                            "\n" +
                            "-An ongoing narrative cleanly separated into arcs and has a fantastic emotional ending that makes you feel like everybody went through an experience-An unbelievable OST. Honestly, the OST is a standout for the show. If you haven't watched the Japanese version with the music here, it is a selling point, along with Wada Kouji's vocals for the important songs-7+1 characters, all developed along their monster friends with their own subplots (okay Hikari gets shafted a bit) that go over the course of the series. Some of the monster friends even have development. \n" +
                            "\n" +
                            "Many isekai can't even get the main character right.\n" +
                            "-Special mention to said lead character Taichi, who experiences moments of weakness, screwups, gets taken to low points and manages to better himself through the experience\n" +
                            "\n" +
                            "-The humor is actually not that bad despite it being for kids with multiple jokes for an older audience-We get to meet all these characters' parents and most of the kids have a part of their development related to their parents which is a rarity in anime in general. And it's able to do this because..."}
                        author={"u/pikachupika"}
                        community={""}
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

export default ProfileOther;