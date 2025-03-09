import React from "react";
import ContactUs from "../component/contact/component/Contact";
import PageTile from "../component/pageTile/PageTile";
const MainContactUs = () => {
  return (
    <div>
       <PageTile
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", link: "/", active: false },
          { label: "Contact Us", active: true },
        ]}
      />
      <ContactUs />
    </div>
  );
};

export default MainContactUs;
