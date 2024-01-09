import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import BlogCategoryScreen from "../Components/Blog/BlogCategoryScreen";
import Navbar from "../Components/Navbar";
import RandomBlogCard from "../Components/Blog/RandomBlogCard";
import SubscribeContent from "../Components/Blog/SubscribeContent";

const BlogCategory = () => {
  const { blogName } = useParams();

  return (
    <>
      <Navbar />
      <BlogCategoryScreen urlName={blogName} />
      <RandomBlogCard />
      <SubscribeContent />
      <Footer />
    </>
  );
};

export default BlogCategory;
