import React from "react";
import SectionProfile from "./profile";
import PageTitle from "../component/PageTitle";

export default function SettingsPage() {
  return (
    <div>
      <PageTitle title={"Settings"} />
      <SectionProfile />
    </div>
  );
}
