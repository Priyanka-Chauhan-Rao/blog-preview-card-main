import React from "react";
import BlogCard from "./component/BlogCard";

const App = () => {
  const blogPosts = [
    {
      title: "HTML & CSS foundations",
      image: "./src/assets/illustration-article.svg",

      date: "Published 21 Dec 2023",
      description:
        " These languages are the backbone of every website,defining structure, content, and presentation.",
      link: "https://www.frontendmentor.io/profile/Priyanka-Chauhan-Rao",
    },
  ];

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {blogPosts.map((post, index) => (
        <BlogCard
          key={index}
          title={post.title}
          image={post.image}
          date={post.date}
          description={post.description}
          link={post.link}
        />
      ))}
    </div>
  );
};

export default App;
