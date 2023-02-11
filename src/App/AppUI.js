import React from "react";
import { CreatePostButton } from "../CreatePostButton";
import { UserPostSearch } from "../UserPostsSearch";
import { PostsList } from "../PostsList";
import { SinglePost } from "../SinglePost";
import { FilterPosts } from "../FilterPosts";
import { Header } from "../Header";

const AppUI = () => {
 return(
  <React.Fragment>
    <Header />
    <CreatePostButton />
    <UserPostSearch />
    <FilterPosts />
    <PostsList>
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
    </PostsList>
  </React.Fragment>
 )
}

export { AppUI }