import { createContext } from "react";
import { usePosts } from "../hooks/use-posts";
import PropTypes from "prop-types";

export const PostContext = createContext({});

export const PostContextProvider = ({ children }) => {
  const [posts] = usePosts();
  // console.log(posts);

  return <PostContext.Provider value={posts}>{children}</PostContext.Provider>;
};

PostContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
