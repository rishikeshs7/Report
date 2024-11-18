import React, { useContext, useState } from "react";
import { OrganizationContext } from "./OrganizationContext"; // Import the context
import "./Page3.css";

const Page3 = () => {
  const { organizationName } = useContext(OrganizationContext); // Access the global organization name
  const [section1, setSection1] = useState("xxx");
  const [isEditingSection1, setIsEditingSection1] = useState(false);

  const [section2, setSection2] = useState(
    "This program will focus on identifying strategic directions and improvements, particularly in response to potential cyber events and addressing specific needs related to P-Series AIX and iSeries systems. By leveraging a risk-based approach, the project aims to provide actionable recommendations to strengthen Ace's resilience and readiness for any disruptions."
  );
  const [isEditingSection2, setIsEditingSection2] = useState(false);

  const [section3, setSection3] = useState([
    "Discovery & Analysis of Current Capabilities:",
    "Understand the current DR and BC approach, capabilities, and hardware & application profile",
    "Review P-Series AIX and iSeries systems architecture and design",
    "Review the third-party assessment of recovery capabilities conducted in 2023",
    "Review the results of the two DR tests conducted annually by Ace",
    "Strategic Direction for DR and BC:",
    "Risk-Based Approach:",
    "Determine the need for increased investment in BC, particularly concerning cyber events",
    "Evaluate options for shortening Recovery Time Objectives (RTO) during cyber events",
    "P-Series & iSeries Needs:",
    "Explore available vendors with syndicated assets in the P-Series & iSeries arena",
    "Assess the feasibility and benefits of co-locating Ace Hardware’s equipment",
    "Industry Trends:",
    "Identify industry trends and key players relevant to Ace Hardware’s DR and BC strategies",
    "Recommendations:",
    "Provide comprehensive recommendations on the approach for enhancing DR and BC strategies",
    "Offer actionable insights on industry best practices and emerging trends",
  ]);
  const [isEditingSection3, setIsEditingSection3] = useState(false);

  const [duration, setDuration] = useState("8 Weeks");
  const [isEditingDuration, setIsEditingDuration] = useState(false);

  const handleEdit = (setEditing) => {
    setEditing(true);
  };

  const handleSave = (newValue, setSection, setEditing) => {
    setSection(newValue);
    setEditing(false);
  };

  const handleCancel = (setEditing) => {
    setEditing(false);
  };

  return (
    <div className="page-container">
      <div className="content">
        <h2 className="section-title">I. INTRODUCTION</h2>

        <div className="sub-section">
          <h3>
            A. Purpose of this Business Continuity Plan
            <span
              className="edit-icon"
              onClick={() => handleEdit(setIsEditingSection1)}
            ></span>
          </h3>
          {isEditingSection1 ? (
            <div className="edit-form">
              <textarea
                value={section1}
                onChange={(e) => setSection1(e.target.value)}
              />
              <button
                className="save-button"
                onClick={() =>
                  handleSave(section1, setSection1, setIsEditingSection1)
                }
              >
                Save
              </button>
              <button
                className="cancel-button"
                onClick={() => handleCancel(setIsEditingSection1)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <p>
              We appreciate the opportunity to submit this Time and Materials
              Statement of Work ("SOW") for up to {section1} hours of consultancy
              services aimed at developing a Business Continuity and Disaster
              Recovery (BCDR) strategy for the Information Technology Organization
              at {organizationName}.
            </p>
          )}
        </div>

        <div className="sub-section">
          <h3>Scope Of Services</h3>
          <p className="estimated-duration">
            <strong>
              Estimated Duration:{" "}
              {isEditingDuration ? (
                <span className="edit-form">
                  <input
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  />
                  <button
                    className="save-button"
                    onClick={() =>
                      handleSave(duration, setDuration, setIsEditingDuration)
                    }
                  >
                    Save
                  </button>
                  <button
                    className="cancel-button"
                    onClick={() => handleCancel(setIsEditingDuration)}
                  >
                    Cancel
                  </button>
                </span>
              ) : (
                <span>
                  {duration}
                  <span
                    className="edit-icon"
                    onClick={() => handleEdit(setIsEditingDuration)}
                  ></span>
                </span>
              )}
            </strong>
          </p>
          <h4>
            {organizationName} Business Continuity & Disaster Recovery
            Strategic Direction
          </h4>
          <p>
            {isEditingSection2 ? (
              <div className="edit-form">
                <textarea
                  value={section2}
                  onChange={(e) => setSection2(e.target.value)}
                />
                <button
                  className="save-button"
                  onClick={() =>
                    handleSave(section2, setSection2, setIsEditingSection2)
                  }
                >
                  Save
                </button>
                <button
                  className="cancel-button"
                  onClick={() => handleCancel(setIsEditingSection2)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <span>
                {section2
                  .replaceAll("Ace's", `${organizationName}'s`) // Replace Ace's with organizationName's
                  .replaceAll("Ace Hardware", organizationName)}
                <span
                  className="edit-icon"
                  onClick={() => handleEdit(setIsEditingSection2)}
                ></span>
              </span>
            )}
          </p>
          <div>
            <h4>
              <span
                className="edit-icon"
                onClick={() => handleEdit(setIsEditingSection3)}
              ></span>
            </h4>
            {isEditingSection3 ? (
              <div className="edit-form">
                <textarea
                  className="editable-textarea"
                  value={section3.join("\n")}
                  onChange={(e) =>
                    setSection3(e.target.value.split("\n")) // Split lines into array
                  }
                />
                <div className="button-group">
                  <button
                    className="save-button"
                    onClick={() =>
                      handleSave(section3, setSection3, setIsEditingSection3)
                    }
                  >
                    Save
                  </button>
                  <button
                    className="cancel-button"
                    onClick={() => handleCancel(setIsEditingSection3)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <ul className="editable-points">
                {section3.map((point, index) => (
                  <li key={index}>
                    {point
                      .replaceAll("Ace's", `${organizationName}'s`) // Replace Ace's with organizationName's
                      .replaceAll("Ace Hardware", organizationName)}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="footer">Page 3</div>
    </div>
  );
};

export default Page3;
