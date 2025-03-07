import React from "react";
import { PageTitle } from "ui";

const Profile = () => {
  return (
    <div>
      <PageTitle title="Settings" />

      <BreadCrumb items={["Settings", "Profile"]} />
      <SaujiLayout>
        {" "}
        <h1>This is profile page</h1>
      </SaujiLayout>
    </div>
  );
};

export default Profile;
