import React from "react";
import { CreatePostButton } from "../CreatePostButton";
import { UserPostSearch } from "../UserPostsSearch";
import { PostsList } from "../PostsList";
import { SinglePost } from "../SinglePost";
import { FilterPosts } from "../FilterPosts";
import { Header } from "../Header";
import { Modal } from "../Modal";
import { CreatePostForm } from "../CreatePostForm";

const AppUI = (data) => {

  const data2 = data.data
  const [searchedUser, setSearchedUser] = React.useState('')
  const [newData, setNewData] = React.useState(data2)
  const [openModal, setOpenModal] = React.useState(false)

  let serachedValue = []
  !searchedUser > 0 ? serachedValue = newData : serachedValue = newData.filter(post => post.userId == searchedUser)
  
  return(
    <React.Fragment>
      <Header />
      <CreatePostButton 
        setOpenModal={setOpenModal}
      />
      <UserPostSearch
        searchedUser={searchedUser}
        setSearchedUser={setSearchedUser}
      />
      <FilterPosts />
      <PostsList>
        {serachedValue.map(post =>
        <SinglePost 
          key={post.id}
          id={post.id}
          userId={post.userId}
          title={post.title}
          description={post.body}
        />
        )}
      </PostsList>
      {!!openModal &&
        <Modal>
          <CreatePostForm 
            setOpenModal={setOpenModal}
          />
        </Modal>
      }
    </React.Fragment>
  )
}

export { AppUI }