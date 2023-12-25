import styles from "../styles/Post.module.css";
import avatar from "@/static/avatar.jpg";
import Image from "next/image";
import heart from "@/static/heart.png";
import { FC } from "react";
interface PostItemProps {
  title: string;
  description: string;
  date: string;
  name: string;
}

const PostItem: FC<PostItemProps> = ({ title, description, name, date }) => {
  return (
    <div className={styles.post}>
      <div className={styles.postInfo}>
        <div className={styles.userInfo}>
          <Image src={avatar} alt='avatar' className={styles.avatar} />
          <p className={styles.name}>{name}</p>
        </div>
        <p className={styles.date}>{date}</p>
      </div>
      <div className={styles.postData}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.main}>{description}</div>
      </div>
      <div className={styles.postReactions}>
        <div className={styles.likeCont}>
        <Image src={heart} alt="fhf" className={styles.like}/>
        <p className={styles.date}>{"999"}</p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
