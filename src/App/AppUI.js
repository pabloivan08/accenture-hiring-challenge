import React from "react";
import { CreatePostButton } from "../CreatePostButton";
import { UserPostSearch } from "../UserPostsSearch";
import { PostsList } from "../PostsList";
import { SinglePost } from "../SinglePost";
import { FilterPosts } from "../FilterPosts";
import { Header } from "../Header";

const AppUI = (data) => {

  const data2 = data.data
  const [searchedUser, setSearchedUser] = React.useState('')
  const [newData, setNewData] = React.useState(data2)

  let serachedValue = []
  !searchedUser > 0 ? serachedValue = newData : serachedValue = newData.filter(post => post.userId == searchedUser)
 
  const imageAPI = 'url("https://source.unsplash.com/random")'

  
  return(
    <React.Fragment>
      <Header />
      <CreatePostButton />
      <UserPostSearch
        searchedUser={searchedUser}
        setSearchedUser={setSearchedUser}
      />
      <FilterPosts />
      <PostsList>
        {serachedValue.map(post =>
        <SinglePost 
          key={post.id}
          userId={post.userId}
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