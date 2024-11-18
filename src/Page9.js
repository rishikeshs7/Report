import React, { useContext, useState } from "react";
import { OrganizationContext } from "./OrganizationContext"; // Import the context
import "./Page9.css";

const Page9 = () => {
  const { organizationName } = useContext(OrganizationContext); // Access the global organization name
  const [programScore, setProgramScore] = useState("0.00");
  const [isEditingProgramScore, setIsEditingProgramScore] = useState(false);

  const [biaScore, setBiaScore] = useState("0.22");
  const [isEditingBiaScore, setIsEditingBiaScore] = useState(false);

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
        <h2>IV. RECOMMENDATIONS FOR BEST PRACTICE GUIDANCE AND METRICS ALIGNMENT</h2>

        <h3>
          A. PROGRAM ORGANIZATION, MANAGEMENT, AND TRAINING{" "}
          {isEditingProgramScore ? (
            <span>
              <input
                type="text"
                value={programScore}
                onChange={(e) => setProgramScore(e.target.value)}
              />
              <button
                className="save-button"
                onClick={() => handleSave(programScore, setProgramScore, setIsEditingProgramScore)}
              >
                Save
              </button>
              <button
                className="cancel-button"
                onClick={() => handleCancel(setIsEditingProgramScore)}
              >
                Cancel
              </button>
            </span>
          ) : (
            <span>
              ({programScore})
              <span
                className="edit-icon"
                onClick={() => handleEdit(setIsEditingProgramScore)}
              ></span>
            </span>
          )}
        </h3>
        <p>
          In order to align with industry Best Practice guidelines and establish a resilient organization, it is
          imperative for {organizationName} to institute a comprehensive Business Continuity Program. This
          program should encompass Business as Usual (Continuity) strategies, address procedures for daily
          function disruption, and incorporate a Disaster Recovery Plan based on the Business Continuity
          Impact Analysis. The linchpin for seamless integration during crises is the Crisis Management Plan,
          delineating roles, responsibilities, and actions across the entire organization.
        </p>
        <p>
          Implementation of such a program necessitates a well-defined budget to support design,
          deployment, management, testing, and audit processes. This financial allocation should be of
          sufficient size to effectively underpin the needs of {organizationName}. Embedded within this program is
          the essential governance structure that will propel its success. This structure comprises:
        </p>
        <ul>
          <li>Leadership Steering Committee (comprised of business and technology)</li>
          <li>Policies (Business Continuity, Disaster Recovery, and Crisis Management)</li>
          <li>
            Standards to support the above Policies (includes all business and technology managed
            services)
          </li>
          <li>Playbooks (Business as Usual plans for when things go bump in the night)</li>
          <li>
            Runbooks (Technology documentation that supports all components of Information
            Technology managed elements)
          </li>
          <li>Configuration Management Database (the bedrock of technology inventory)</li>
          <li>Change Management processes that control dependent technology modifications</li>
        </ul>

        <h3>
          B. BUSINESS IMPACT ANALYSIS{" "}
          {isEditingBiaScore ? (
            <span>
              <input
                type="text"
                value={biaScore}
                onChange={(e) => setBiaScore(e.target.value)}
              />
              <button
                className="save-button"
                onClick={() => handleSave(biaScore, setBiaScore, setIsEditingBiaScore)}
              >
                Save
              </button>
              <button
                className="cancel-button"
                onClick={() => handleCancel(setIsEditingBiaScore)}
              >
                Cancel
              </button>
            </span>
          ) : (
            <span>
              ({biaScore})
              <span
                className="edit-icon"
                onClick={() => handleEdit(setIsEditingBiaScore)}
              ></span>
            </span>
          )}
        </h3>
        <p>
          The significance of a Business Impact Analysis (BIA) cannot be overstated in ensuring meticulous
          planning for organizational resilience. A BIA is instrumental in aligning strategic planning with
          functional requirements. While conducting a BIA for Applications is essential, the paramount focus
          should be on aligning business functional needs with applications, data, and technology-supported
          elements. This approach ensures that planning is tailored to meet the specific demands of business
          functions, emphasizing a holistic perspective beyond the realm of Information Technology (IT).
        </p>
        <p>
          The outcome of a comprehensive BIA is a strategic roadmap that not only safeguards IT assets but
          also fortifies the entire organizational structure against potential disruptions.
        </p>
      </div>

      <div className="footer">Page 9</div>
    </div>
  );
};

export default Page9;
