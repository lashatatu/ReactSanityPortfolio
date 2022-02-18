import React from "react";
import Link from "next/link";
import styles from "./blogComponent.module.css";

const BlogComponent = ({posts}) => {
	return (
		 <div>
			 <h1>Welcome to a blog!</h1>
			 {posts.length > 0 && posts.map(({_id, title = "", slug = "", publishedAt = "", imgUrl}) => slug && (
					<li className={styles.card} key={_id}>
						<Link href={"/post/[slug]"} as={`/post/${slug.current}`}>
							<a>{title}, {imgUrl}</a>
						</Link>{" "}
						<p>({new Date(publishedAt).toDateString()})</p>

					</li>))}
		 </div>);
};

export default BlogComponent;