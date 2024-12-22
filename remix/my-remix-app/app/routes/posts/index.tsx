import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
   return [
      { title: "Post Page" },
      { name: "description", content: "This is Post remix!" },
   ];
};

const PostsPage = () => {
   return <div>PostsPage</div>;
};

export default PostsPage;
