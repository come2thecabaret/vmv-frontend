import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/features/Hero";
import WineExperienceFeature from "../components/features/WineExperience";
import Launchbar from "../components/features/Launchbar";
import ToursFeature from "../components/features/Tours";
import WeddingsFeature from "../components/features/Weddings";
import ViewsFeature from "../components/features/Views";

const IndexPage = (props) => {
  return (
    <>
      <title>Home Page</title>
      {/* <Layout location={props.path} headerType="floating"> */}
      <Hero></Hero>
      <WineExperienceFeature></WineExperienceFeature>
      <Launchbar></Launchbar>
      <ToursFeature></ToursFeature>
      <WeddingsFeature></WeddingsFeature>
      <ViewsFeature></ViewsFeature>
      {/* </Layout> */}
    </>
  )
}

export default IndexPage
