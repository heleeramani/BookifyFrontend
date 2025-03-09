import React from "react";
import Blog from "../component/blog/component/Blog";
import PageTile from "../component/pageTile/PageTile";
const MainBlog = () => {
  return (
    <div>
      <PageTile
        title="Blog"
        breadcrumbs={[
          { label: "Home", link: "/", active: false },
          { label: "Blog", active: true },
        ]}
      />
      <Blog />
    </div>
  );
};

export default MainBlog;
