import React, { useContext, useState } from "react";
import { OrganizationContext } from "./OrganizationContext"; // Import the context
import "./Page8.css";

const Page8 = () => {
  const { organizationName } = useContext(OrganizationContext); // Access the global organization name
  const [hours, setHours] = useState("(xx)");
  const [isEditingHours, setIsEditingHours] = useState(false);

  const [completionSentence, setCompletionSentence] = useState(
    "It is noteworthy that the analysis, development of findings documents, and the creation of this comprehensive report are anticipated to be completed within the initially quoted hours."
  );
  const [isEditingCompletionSentence, setIsEditingCompletionSentence] = useState(false);

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
        <h2>III. PROJECT MANAGEMENT EFFECTIVENESS REVIEW</h2>

        <h3>A. GOVERNANCE</h3>
        <p>
          Throughout the entirety of the engagement, the {organizationName} IT team demonstrated exceptional
          commitment in providing comprehensive documentation, clear communication, and responsive
          support. Their receptiveness to questions and immediate action on concerns showcased a
          commendable level of dedication to the project.
        </p>
        <p>
          The overall management of the project, led by Trillisent, was executed with precision. The
          Dashboard was diligently maintained and regularly communicated to the entire team. No
          challenges were encountered in the scheduling process, and the provision of documentation
          during the Analysis phase was seamless. The collaborative efforts and proactive approach of
          both the {organizationName} IT team and Trillisent contributed to the project's governance success.
        </p>

        <h3>B. PLANNING AND CONTROL</h3>
        <p>
          The project was budgeted for a total of{" "}
          {isEditingHours ? (
            <span>
              <input
                type="text"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className="edit-input"
              />
              <button
                className="save-button"
                onClick={() => handleSave(hours, setHours, setIsEditingHours)}
              >
                Save
              </button>
              <button
                className="cancel-button"
                onClick={() => handleCancel(setIsEditingHours)}
              >
                Cancel
              </button>
            </span>
          ) : (
            <span>
              <strong>{hours}</strong>
              <span
                className="edit-icon"
                onClick={() => handleEdit(setIsEditingHours)}
              ></span>
            </span>
          )}
          . It is noteworthy that{" "}
          {isEditingCompletionSentence ? (
            <span>
              <textarea
                value={completionSentence}
                onChange={(e) => setCompletionSentence(e.target.value)}
                className="edit-input"
              />
              <button
                className="save-button"
                onClick={() =>
                  handleSave(
                    completionSentence,
                    setCompletionSentence,
                    setIsEditingCompletionSentence
                  )
                }
              >
                Save
              </button>
              <button
                className="cancel-button"
                onClick={() => handleCancel(setIsEditingCompletionSentence)}
              >
                Cancel
              </button>
            </span>
          ) : (
            <span>
              {completionSentence}
              <span
                className="edit-icon"
                onClick={() => handleEdit(setIsEditingCompletionSentence)}
              ></span>
            </span>
          )}.
        </p>
        <p>
          The disciplined approach to project management, coupled with transparent communication and
          adherence to timelines, has ensured that the project remains on track and aligns with the outlined
          scope and objectives.
        </p>
      </div>

      <div className="footer">Page 8</div>
    </div>
  );
};

export default Page8;
