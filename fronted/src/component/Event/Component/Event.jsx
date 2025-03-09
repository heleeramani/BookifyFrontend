import React from 'react';
import '../Style/Event.css';
import Event1 from "../Images/event.jpg";
const events = [
  {
    id: 1,
    date: 'Jun 12, 2025, 1:30 pm - Aug 28, 2026, 5:00 pm',
    day: '12',
    month: 'June 2025',
    title: 'Sunday evening poetry',
    location: 'Manhattan Club 350 5th Ave, New York, NY, United States',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$85',
    image: Event1,
  },
  {
    id: 2,
    date: 'Mar 28, 2026, 10:00 am - Apr 5, 2028, 5:00 pm',
    day: '28',
    month: 'March 2026',
    title: 'Day of classic literature',
    location: 'Manhattan Club 350 5th Ave, New York, NY, United States',
    description: 'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    price: '$105',
    image: Event1,
  },
  {
    id: 3,
    date: 'Apr 6, 2026, 3:30 pm - Apr 18, 2027, 7:00 pm',
    day: '6',
    month: 'April 2026',
    title: 'History of English literature',
    location: 'Manhattan Club 350 5th Ave, New York, NY, United States',
    description: 'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    price: '$90',
    image: Event1,
  },
  {
    id: 4,
    date: 'Jul 2, 2025, 11:00 am - Jul 10, 2026, 5:00 pm',
    day: '2',
    month: 'July 2025',
    title: 'Food art seminar series - Joe Cook',
    location: 'Manhattan Club 350 5th Ave, New York, NY, United States',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$180',
    image: Event1,
  },
  {
    id: 5,
    date: 'Jan 10, 2028, 10:00 am - Feb 10, 2028, 1:30 pm',
    day: '10',
    month: 'January 2028',
    title: 'Romance and drama in 2021',
    location: 'Manhattan Club 350 5th Ave, New York, NY, United States',
    description: 'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    price: '$75',
    image: Event1,
  },
  {
    id: 6,
    date: 'Mar 13, 2028, 11:00 am - Apr 14, 2028, 5:00 pm',
    day: '13',
    month: 'March 2028',
    title: 'French classics seminars',
    location: 'Manhattan Club 350 5th Ave, New York, NY, United States',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 'Free',
    image: Event1,
  },
  {
    id: 7,
    date: 'Mar 15, 2028, 10:30 am - Mar 24, 2028, 5:00 pm',
    day: '15',
    month: 'March 2028',
    title: 'Novel analysis courses',
    location: 'Manhattan Club 350 5th Ave, New York, NY, United States',
    description:
      'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    price: '$285',
    image: Event1,
  },
];

const Event = () => {
  return (
    <div className="event-list">
      {events.map((event, index) => (
        <div key={event.id} className="event">
          {/* Month/Year Header */}
          {index === 0 || events[index - 1].month !== event.month ? (
            <h3 className="event-month">{event.month}</h3>
          ) : null}

          <div className="event-item">
            {/* Date Section */}
            <div className="event-date">
              <span className="event-day">{event.day}</span>
            </div>

            {/* Event Details */}
            <div className="event-details">
              <p className="event-time">{event.date}</p>
              <h4 className="event-title">{event.title}</h4>
              <p className="event-location">{event.location}</p>
              <p className="event-description">{event.description}</p>
              <p className="event-price">{event.price}</p>
            </div>

            {/* Event Image */}
            <div className="event-image">
              <img src={event.image} alt={event.title} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Event;
