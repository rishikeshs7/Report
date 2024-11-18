import React, { useContext, useState } from "react";
import { OrganizationContext } from "./OrganizationContext"; // Import the context
import "./Page7.css";

const Page7 = () => {
  const { organizationName } = useContext(OrganizationContext); // Access the global organization name
  const [overallRating, setOverallRating] = useState("0.00");
  const [isEditingOverallRating, setIsEditingOverallRating] = useState(false);

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
        <h3>B. IDENTIFIED RISKS AND ISSUES</h3>
        <p>
          Our comprehensive analysis has successfully identified both group and individual risks in
          alignment with the stated objectives. This section outlines the findings relevant to the Best
          Practice areas as measured against industry standards. The table below illustrates the areas
          analyzed and their corresponding rating structure:
        </p>

        <table className="ratings-key">
          <thead>
            <tr>
              <th><strong>RATINGS KEY FOR ASSESSMENT</strong></th>
              <th><strong>OVERALL</strong></th>
              <th><strong>RATING POINT RANGE</strong></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NOT RESILIENT</td>
              <td>NEEDS TO BE COMPLETELY DEVELOPED</td>
              <td>0 to .50</td>
            </tr>
            <tr>
              <td>SOMEWHAT RESILIENT</td>
              <td>MAJOR CHANGES REQUIRED</td>
              <td>.51 to 1.50</td>
            </tr>
            <tr>
              <td>MOSTLY RESILIENT</td>
              <td>MINOR CHANGES REQUIRED</td>
              <td>1.51 to 2.5</td>
            </tr>
            <tr>
              <td>FULL RESILIENCE</td>
              <td>NO CHANGES REQUIRED</td>
              <td>2.5 to 3.0</td>
            </tr>
          </tbody>
        </table>

        <p>
          Upon applying the Excel database to the eight analysis areas, {organizationName} received an overall
          rating of{" "}
          {isEditingOverallRating ? (
            <div className="edit-container">
              <input
                type="text"
                value={overallRating}
                onChange={(e) => setOverallRating(e.target.value)}
                className="edit-input"
              />
              <div className="button-group">
                <button
                  className="save-button"
                  onClick={() => handleSave(overallRating, setOverallRating, setIsEditingOverallRating)}
                >
                  Save
                </button>
                <button
                  className="cancel-button"
                  onClick={() => handleCancel(setIsEditingOverallRating)}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <span>
              <strong>{overallRating}</strong>
              <span
                className="edit-icon"
                onClick={() => handleEdit(setIsEditingOverallRating)}
              ></span>
            </span>
          )}
          . This score signifies that the Business Continuity Program requires
          comprehensive development (refer to details in Part IV below).
        </p>

        <p>
          While recognizing the need for minor changes in specific areas, it is crucial to note that these
          adjustments are aligned with {organizationName}'s commitment to meeting Best Practice Guidelines.
          Addressing these areas through the development of a comprehensive Policy, with IT
          Infrastructure as the lead team, will provide a structured framework for managing Business
          Continuity over time. This strategic approach ensures not only the rectification of identified
          issues but also establishes a foundation for continuous improvement, aligning our practices
          with industry standards and enhancing overall organizational resilience.
        </p>
      </div>

      <div className="footer">Page 7</div>
    </div>
  );
};

export default Page7;
