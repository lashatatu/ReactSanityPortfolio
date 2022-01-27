import groq from "groq";
import client from "../client";
import BlogComponent from "../components/blogComponent";

const Index = ({posts}) => {
	return (
		 <div>
			 <BlogComponent posts={posts}/>
		 </div>
	);
};

export async function getStaticProps () {
	const posts = await client.fetch(groq`
	*[_type=="post" && publishedAt < now()] | order(publishedAt desc)
	`);
	return {
		props: {
			posts,
		},
	};
}

export default Index;