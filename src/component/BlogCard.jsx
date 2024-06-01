import React from "react";
import styles from "./BlogCard.module.css"; // Assuming you will style the component with CSS

const BlogCard = ({ title, image, date, description, link }) => {
  return (
    <div className={styles.blog_card}>
      <img src={image} alt={title} className={styles.blog_card_image} />
      <a href={link} className={styles.tag}>
        Learning
      </a>
      <p className={styles.date}>{date}</p>
      <div className={styles.blog_card_content}>
        <h2 className={styles.blog_card_title}>{title}</h2>
        <p className={styles.blog_card_description}>{description}</p>
        <div className={styles.author_img}>
          <img
            className={styles.avatar}
            src="./src/assets/image-avatar.png"
            alt="Author"
          />
          <a href={link} className={styles.blog_card_link}>
            <span className={styles.name}>Greg Hoper</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
