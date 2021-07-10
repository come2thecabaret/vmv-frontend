import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/features/Hero";
import WineExperienceFeature from "../components/features/WineExperience";
import Launchbar from "../components/features/Launchbar";
import ToursFeature from "../components/features/Tours";
import WeddingsFeature from "../components/features/Weddings";
import ViewsFeature from "../components/features/Views";
import EventsFeature from "../components/features/Events";

const IndexPage = (props) => {
  return (
    <>
      <title>Home Page</title>
      <Hero></Hero>
      <WineExperienceFeature></WineExperienceFeature>
      <Launchbar></Launchbar>
      <ToursFeature></ToursFeature>
      <WeddingsFeature></WeddingsFeature>
      <EventsFeature></EventsFeature>
      <ViewsFeature></ViewsFeature>
    </>
  )
}

export default IndexPage
