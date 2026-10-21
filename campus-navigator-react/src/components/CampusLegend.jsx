
import { useState } from "react";
import "./CampusLegend.css";

function CampusLegend() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const legendItems = [
    {
      title: "Academic",
      description: "Classrooms, lecture halls and labs",
      info: "Academic areas include classrooms, lecture halls, laboratories and other learning spaces."
    },
    {
      title: "Administration",
      description: "Offices and administrative buildings",
      info: "Administration buildings contain university offices and services for students and staff."
    },
    {
      title: "Food",
      description: "Cafeterias and food areas",
      info: "Food areas include cafeterias, canteens and places where students can have meals and snacks."
    },
    {
      title: "Hostels",
      description: "Student accommodation",
      info: "Hostels provide accommodation and residential facilities for students."
    },
    {
      title: "Parking",
      description: "Parking and vehicle areas",
      info: "Parking areas are designated spaces for students, faculty and visitors to park their vehicles."
    },
    {
      title: "Emergency",
      description: "Medical and emergency facilities",
      info: "Emergency facilities help students and staff access medical assistance and other emergency services."
    },
    {
      title: "Outdoor",
      description: "Grounds and open spaces",
      info: "Outdoor areas include gardens, lawns, grounds and open spaces around the campus."
    },
    {
      title: "Landmark",
      description: "Important campus locations",
      info: "Landmarks are easily recognizable places that help students and visitors navigate the campus."
    }
  ];

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const feedback = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message")
    };

    console.log("Campus Feedback:", feedback);

    setFeedbackSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <div className="campus-legend">
      <div className="legend-header">
        <h2>Campus Legend</h2>
        <p>
          Explore the different places around the campus.
        </p>
      </div>

      <div className="legend-grid">
        {legendItems.map((item) => (
          <button
            type="button"
            className="legend-item"
            key={item.title}
            onClick={() => setSelectedCategory(item)}
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="legend-details">
          <h3>{selectedCategory.title}</h3>

          <p>{selectedCategory.info}</p>

          <button
            type="button"
            className="legend-back-btn"
            onClick={() => setSelectedCategory(null)}
          >
            Back to Categories
          </button>
        </div>
      )}

      <div className="legend-feedback">
        <h3>Missing a Location?</h3>

        <p>
          Tell us about a missing location or share your
          feedback to help improve the campus map.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="feedback-name">Name</label>
          <input
            type="text"
            id="feedback-name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="feedback-email">Email</label>
          <input
            type="email"
            id="feedback-email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="feedback-message">
            Missing Location / Feedback
          </label>
          <textarea
            id="feedback-message"
            name="message"
            placeholder="Enter the location name or your feedback"
            rows="4"
            minLength={5}
            required
          />

          <button type="submit" className="feedback-submit">
            Submit Feedback
          </button>

          {feedbackSubmitted && (
            <p className="feedback-success">
              Thank you! Your feedback has been noted.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default CampusLegend;
