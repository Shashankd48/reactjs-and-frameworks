import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
   return [
      { title: "PostsList Page" },
      { name: "description", content: "This is PostsList remix!" },
   ];
};

const PostsListPage = () => {
   return <div>PostsListPage</div>;
};

export default PostsListPage;
