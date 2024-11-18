import React, { useContext, useState } from "react";
import { OrganizationContext } from "./OrganizationContext"; // Import the context
import "./Page11.css";

const Page11 = () => {
  const { organizationName } = useContext(OrganizationContext); // Access the global organization name
  const [testingScore, setTestingScore] = useState("0.00");
  const [isEditingTestingScore, setIsEditingTestingScore] = useState(false);

  const [maintenanceScore, setMaintenanceScore] = useState("0.00");
  const [isEditingMaintenanceScore, setIsEditingMaintenanceScore] = useState(false);

  const [auditScore, setAuditScore] = useState("0.00");
  const [isEditingAuditScore, setIsEditingAuditScore] = useState(false);

  const [resiliencyScore, setResiliencyScore] = useState("0.27");
  const [isEditingResiliencyScore, setIsEditingResiliencyScore] = useState(false);

  const [resiliencyParagraphScore, setResiliencyParagraphScore] = useState("0.27");
  const [isEditingResiliencyParagraphScore, setIsEditingResiliencyParagraphScore] =
    useState(false);

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
        <h3>
          F. TESTING{" "}
          {isEditingTestingScore ? (
            <span>
              <input
                type="text"
                value={testingScore}
                onChange={(e) => setTestingScore(e.target.value)}
              />
              <div className="button-row">
                <button
                  className="save-button"
                  onClick={() =>
                    handleSave(testingScore, setTestingScore, setIsEditingTestingScore)
                  }
                >
                  Save
                </button>
                <button
                  className="cancel-button"
                  onClick={() => handleCancel(setIsEditingTestingScore)}
                >
                  Cancel
                </button>
              </div>
            </span>
          ) : (
            <span>
              ({testingScore})
              <span
                className="edit-icon"
                onClick={() => handleEdit(setIsEditingTestingScore)}
              ></span>
            </span>
          )}
        </h3>
        <p>
          Testing currently presents a challenge as we lack a functional failover strategy, and applications
          recovery remains problematic without a roadmap to recovery. Effective testing at the physical
          (alternate environment) level is hindered until the target systems can seamlessly handle functions
          integral to daily operations. Additionally, the absence of assigned individuals in the Business areas
          further complicates testing for recovered functional areas. Presently, IT testing is limited to the
          application and data level, lacking comprehensive coverage for all systems essential to supporting
          overall critical and necessary tasks.
        </p>

        <h3>
          G. MAINTENANCE{" "}
          {isEditingMaintenanceScore ? (
            <span>
              <input
                type="text"
                value={maintenanceScore}
                onChange={(e) => setMaintenanceScore(e.target.value)}
              />
              <div className="button-row">
                <button
                  className="save-button"
                  onClick={() =>
                    handleSave(maintenanceScore, setMaintenanceScore, setIsEditingMaintenanceScore)
                  }
                >
                  Save
                </button>
                <button
                  className="cancel-button"
                  onClick={() => handleCancel(setIsEditingMaintenanceScore)}
                >
                  Cancel
                </button>
              </div>
            </span>
          ) : (
            <span>
              ({maintenanceScore})
              <span
                className="edit-icon"
                onClick={() => handleEdit(setIsEditingMaintenanceScore)}
              ></span>
            </span>
          )}
        </h3>
        <p>
          Maintenance poses a challenge as there is currently no Program, Policy, or Standard in place.
          Without these foundational elements, maintenance cannot be executed on a non-existent framework.
          It is imperative for {organizationName} to establish a comprehensive program that includes policies,
          standards, and a structured framework. This program will serve as the cornerstone for implementing
          and sustaining effective maintenance practices.
        </p>

        <h3>
          H. AUDIT AND GENERAL POLICY{" "}
          {isEditingAuditScore ? (
            <span>
              <input
                type="text"
                value={auditScore}
                onChange={(e) => setAuditScore(e.target.value)}
              />
              <div className="button-row">
                <button
                  className="save-button"
                  onClick={() => handleSave(auditScore, setAuditScore, setIsEditingAuditScore)}
                >
                  Save
                </button>
                <button
                  className="cancel-button"
                  onClick={() => handleCancel(setIsEditingAuditScore)}
                >
                  Cancel
                </button>
              </div>
            </span>
          ) : (
            <span>
              ({auditScore})
              <span
                className="edit-icon"
                onClick={() => handleEdit(setIsEditingAuditScore)}
              ></span>
            </span>
          )}
        </h3>
        <p>
          The absence of a Program, Policy, or Standard poses a hindrance to conducting audits on a non-
          existent element. To address this, {organizationName} urgently needs to establish a comprehensive
          program, incorporating policies, standards, and a structured framework. This program will not only
          facilitate effective maintenance but also enable systematic audits to ensure adherence to established
          protocols.
        </p>

        <h3>
          OVERALL RESILIENCY/QUALITY OF PLAN{" "}
          {isEditingResiliencyScore ? (
            <span>
              <input
                type="text"
                value={resiliencyScore}
                onChange={(e) => setResiliencyScore(e.target.value)}
              />
              <div className="button-row">
                <button
                  className="save-button"
                  onClick={() =>
                    handleSave(resiliencyScore, setResiliencyScore, setIsEditingResiliencyScore)
                  }
                >
                  Save
                </button>
                <button
                  className="cancel-button"
                  onClick={() => handleCancel(setIsEditingResiliencyScore)}
                >
                  Cancel
                </button>
              </div>
            </span>
          ) : (
            <span>
              ({resiliencyScore})
              <span
                className="edit-icon"
                onClick={() => handleEdit(setIsEditingResiliencyScore)}
              ></span>
            </span>
          )}
        </h3>
        <p>
          The assessment of overall resiliency and the quality of the plan stands at{" "}
          {isEditingResiliencyParagraphScore ? (
            <span>
              <input
                type="text"
                value={resiliencyParagraphScore}
                onChange={(e) => setResiliencyParagraphScore(e.target.value)}
              />
              <div className="button-row">
                <button
                  className="save-button"
                  onClick={() =>
                    handleSave(
                      resiliencyParagraphScore,
                      setResiliencyParagraphScore,
                      setIsEditingResiliencyParagraphScore
                    )
                  }
                >
                  Save
                </button>
                <button
                  className="cancel-button"
                  onClick={() => handleCancel(setIsEditingResiliencyParagraphScore)}
                >
                  Cancel
                </button>
              </div>
            </span>
          ) : (
            <span>
              <strong>{resiliencyParagraphScore}</strong>
              <span
                className="edit-icon"
                onClick={() => handleEdit(setIsEditingResiliencyParagraphScore)}
              ></span>
            </span>
          )}{" "}
          , indicating a need for further development. To enhance the resiliency of the organization and
          elevate the quality of the plan, strategic interventions and improvements are recommended.
          Addressing specific areas of concern outlined in the analysis will contribute to fortifying the
          organization's preparedness for potential disruptions.
        </p>
      </div>

      <div className="footer">Page 11</div>
    </div>
  );
};

export default Page11;
