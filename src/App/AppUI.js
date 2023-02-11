import React from "react";
import { CreatePostButton } from "../CreatePostButton";
import { UserPostSearch } from "../UserPostsSearch";
import { PostsList } from "../PostsList";
import { SinglePost } from "../SinglePost";
import { FilterPosts } from "../FilterPosts";
import { Header } from "../Header";

const AppUI = (data) => {

  const data2 = data.data
  const imageAPI = 'url("https://source.unsplash.com/random")'

  return(
    <React.Fragment>
      {console.log(data2)}
      <Header />
      <CreatePostButton />
      <UserPostSearch />
      <FilterPosts />
      <PostsList>
        {data2.map(post =>
        <SinglePost 
          key={post.id}
          title={post.title}
          description={post.body}
          image={imageAPI}
        />
        )}
      </PostsList>
    </React.Fragment>
  )
}

export { AppUI }