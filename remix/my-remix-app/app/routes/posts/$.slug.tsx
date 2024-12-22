import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
   return [
      { title: "Post Page" },
      { name: "description", content: "This is Post remix!" },
   ];
};

const PostInfoPage = () => {
   return <div>PostInfoPage</div>;
};

export default PostInfoPage;
