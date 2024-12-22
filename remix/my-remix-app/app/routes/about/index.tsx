import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
   return [
      { title: "About Page" },
      { name: "description", content: "This is about remix!" },
   ];
};

const AboutPage = () => {
   return <div>AboutPage</div>;
};

export default AboutPage;
