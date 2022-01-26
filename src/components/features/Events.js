import * as React from "react"
import Button from "../Button";
import { Link } from "gatsby"

const EventsFeature = (props) => {
  const events = [
    {
      title: 'Yultide Market 1',
      date: new Date(),
      description: "Join us for a merry blah blah blah this is jusy placeholder text so it doesn’t matter what this says….",
      link: "https://www.google.com"
    },
    {
      title: 'Yultide Market 2',
      date: new Date(),
      description: "Join us for a merry blah blah blah this is jusy placeholder text so it doesn’t matter what this says….",
      link: "https://www.google.com"
    },
    {
      title: 'Yultide Market 3',
      date: new Date(),
      description: "Join us for a merry blah blah blah this is jusy placeholder text so it doesn’t matter what this says….",
      link: "https://www.google.com"
    },
    {
      title: 'Yultide Market 4',
      date: new Date(),
      description: "Join us for a merry blah blah blah this is jusy placeholder text so it doesn’t matter what this says….",
      link: "https://www.google.com"
    },
    {
      title: 'Yultide Market 5',
      date: new Date(),
      description: "Join us for a merry blah blah blah this is jusy placeholder text so it doesn’t matter what this says….",
      link: "https://www.google.com"
    },
  ]
  const eventsList = events.map((event, index) => {
    let options = { month: 'short'};
    let month = new Intl.DateTimeFormat('en-US', options).format(event.date).toUpperCase()
    return (
      <div className={'events__item'} key={index}>
        <div className={'events__item-date'}>
        <div className={'events__item-date-month'}>{month}</div>
        <div className={'events__item-date-day'}>{event.date.getDate()}</div>
        </div>
        <div className={'events__item-info'}>
          <div className={'events__item-info-title'}>{event.title}</div>
          <div className={'events__item-info-description'}>{event.description}</div>
          <a className={'events__item-info-link'}>Event Details  &gt;</a>
        </div>
      </div>
    )
  })
  return (
    <section className={'c-EventsFeature'}>
      <div className={'o-flexObject--50 c-EventsFeature-section upcoming-events'}>
        <h2 className={'c-EventsFeature-header spaced-bottom shadow'}>Upcoming Events</h2>
        {eventsList}
      </div>
      <div className={'o-flexObject--50 c-EventsFeature-section private-gatherings'}>
        <h2 className={'c-EventsFeature-header spaced-bottom shadow'}>Private Gatherings</h2>
        <div className={'c-EventsFeature-blurb'}>
          <p>
            Thrill your guests with your private gathering or special event at
            Virginia Mountain Vineyards! Panoramic mountain views and lush grapevines
            provide the stunning backdrop whether you are hosting a small group for
            that special dinner or a large party or corporate event.
          </p>
          <p>
            Virginia Mountain Vineyards has the facilities and staff to make your
            private gathering a special memory for everyone.
          </p>
        </div>

      </div>
    </section>)
}
export default EventsFeature


