import React, { useContext, useState } from "react";
import { OrganizationContext } from "./OrganizationContext"; // Import the context
import "./Page4.css";

const Page4 = () => {
  const { organizationName } = useContext(OrganizationContext); // Access the global organization name
  const [xxDocuments, setXxDocuments] = useState("xx (00)");
  const [isEditingXxDocuments, setIsEditingXxDocuments] = useState(false);

  const [xxProcedures, setXxProcedures] = useState("xx (00)");
  const [isEditingXxProcedures, setIsEditingXxProcedures] = useState(false);

  const [xxRunbooks, setXxRunbooks] = useState("xx (00)");
  const [isEditingXxRunbooks, setIsEditingXxRunbooks] = useState(false);

  const [datacenterDesign, setDatacenterDesign] = useState(
    "Proposed Datacenter Design drawings."
  );
  const [isEditingDatacenterDesign, setIsEditingDatacenterDesign] = useState(false);

  const [generatorDocs, setGeneratorDocs] = useState(
    "Generator Utilization documents."
  );
  const [isEditingGeneratorDocs, setIsEditingGeneratorDocs] = useState(false);

  const [continuityPlans, setContinuityPlans] = useState(
    "Three Business Continuity Plans, encompassing Financial Impact, Business Impact Analysis, and an Applications list with Recovery Time and Point Objectives."
  );
  const [isEditingContinuityPlans, setIsEditingContinuityPlans] = useState(false);

  const [vmwareDocs, setVmwareDocs] = useState("VMWare Growth over time documentation.");
  const [isEditingVmwareDocs, setIsEditingVmwareDocs] = useState(false);

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
        <h3>B. Objectives Achieved</h3>
        <p>
          During Phase One, our analysis concentrated on eight key areas crucial for a robust Business
          Continuity, Disaster Recovery, and Crisis Management Program. Each area underwent a
          meticulous examination, incorporating a weighted average formula to prioritize critical
          aspects based on industry guidance. The comprehensive assessment covered the following
          domains, detailed in the attached Excel spreadsheet:
        </p>

        <ol>
          <li>Organizational Management and Training - Eleven (11) areas</li>
          <li>Business Impact Analysis (BIA) - Nine (9) areas</li>
          <li>Emergency Response & Crisis Management - Twenty-Nine (29) areas</li>
          <li>Emergency Locations - Twelve (12) areas</li>
          <li>Business Support Component Recovery - Sixteen (16) areas</li>
          <li>Testing - Fourteen (14) areas</li>
          <li>Maintenance - Four (4) areas</li>
          <li>Audit & General Policy - Three (3) areas.</li>
        </ol>

        <p>In conjunction with this analysis, the {organizationName} team provided valuable documentation, including:</p>

        <ul>
          <li>
            {isEditingXxDocuments ? (
              <div className="edit-form">
                <input
                  type="text"
                  value={xxDocuments}
                  onChange={(e) => setXxDocuments(e.target.value)}
                />
                <button
                  className="save-button"
                  onClick={() => handleSave(xxDocuments, setXxDocuments, setIsEditingXxDocuments)}
                >
                  Save
                </button>
                <button
                  className="cancel-button"
                  onClick={() => handleCancel(setIsEditingXxDocuments)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <span>
                {xxDocuments}
                <span
                  className="edit-icon"
                  onClick={() => handleEdit(setIsEditingXxDocuments)}
                ></span>
              </span>
            )}{" "}
            individual documents in Microsoft Word and Excel templates.
          </li>
          <li>
            {isEditingXxProcedures ? (
              <div className="edit-form">
                <input
                  type="text"
                  value={xxProcedures}
                  onChange={(e) => setXxProcedures(e.target.value)}
                />
                <button
                  className="save-button"
                  onClick={() => handleSave(xxProcedures, setXxProcedures, setIsEditingXxProcedures)}
                >
                  Save
                </button>
                <button
                  className="cancel-button"
                  onClick={() => handleCancel(setIsEditingXxProcedures)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <span>
                {xxProcedures}
                <span
                  className="edit-icon"
                  onClick={() => handleEdit(setIsEditingXxProcedures)}
                ></span>
              </span>
            )}{" "}
            Procedures (referred to as Policies, elaborated further in this report).
          </li>
          <li>
            {isEditingDatacenterDesign ? (
              <div className="edit-form">
                <input
                  type="text"
                  value={datacenterDesign}
                  onChange={(e) => setDatacenterDesign(e.target.value)}
                />
                <button
                  className="save-button"
                  onClick={() =>
                    handleSave(datacenterDesign, setDatacenterDesign, setIsEditingDatacenterDesign)
                  }
                >
                  Save
                </button>
                <button
                  className="cancel-button"
                  onClick={() => handleCancel(setIsEditingDatacenterDesign)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <span>
                {datacenterDesign}
                <span
                  className="edit-icon"
                  onClick={() => handleEdit(setIsEditingDatacenterDesign)}
                ></span>
              </span>
            )}
          </li>
          <li>
            {isEditingGeneratorDocs ? (
              <div className="edit-form">
                <input
                  type="text"
                  value={generatorDocs}
                  onChange={(e) => setGeneratorDocs(e.target.value)}
                />
                <button
                  className="save-button"
                  onClick={() =>
                    handleSave(generatorDocs, setGeneratorDocs, setIsEditingGeneratorDocs)
                  }
                >
                  Save
                </button>
                <button
                  className="cancel-button"
                  onClick={() => handleCancel(setIsEditingGeneratorDocs)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <span>
                {generatorDocs}
                <span
                  className="edit-icon"
                  onClick={() => handleEdit(setIsEditingGeneratorDocs)}
                ></span>
              </span>
            )}
          </li>
          <li>
            {isEditingContinuityPlans ? (
              <div className="edit-form">
                <textarea
                  value={continuityPlans}
                  onChange={(e) => setContinuityPlans(e.target.value)}
                />
                <button
                  className="save-button"
                  onClick={() =>
                    handleSave(continuityPlans, setContinuityPlans, setIsEditingContinuityPlans)
                  }
                >
                  Save
                </button>
                <button
                  className="cancel-button"
                  onClick={() => handleCancel(setIsEditingContinuityPlans)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <span>
                {continuityPlans}
                <span
                  className="edit-icon"
                  onClick={() => handleEdit(setIsEditingContinuityPlans)}
                ></span>
              </span>
            )}
          </li>
          <li>
            {isEditingVmwareDocs ? (
              <div className="edit-form">
                <input
                  type="text"
                  value={vmwareDocs}
                  onChange={(e) => setVmwareDocs(e.target.value)}
                />
                <button
                  className="save-button"
                  onClick={() => handleSave(vmwareDocs, setVmwareDocs, setIsEditingVmwareDocs)}
                >
                  Save
                </button>
                <button
                  className="cancel-button"
                  onClick={() => handleCancel(setIsEditingVmwareDocs)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <span>
                {vmwareDocs}
                <span
                  className="edit-icon"
                  onClick={() => handleEdit(setIsEditingVmwareDocs)}
                ></span>
              </span>
            )}
          </li>
          <li>
            {isEditingXxRunbooks ? (
              <div className="edit-form">
                <input
                  type="text"
                  value={xxRunbooks}
                  onChange={(e) => setXxRunbooks(e.target.value)}
                />
                <button
                  className="save-button"
                  onClick={() => handleSave(xxRunbooks, setXxRunbooks, setIsEditingXxRunbooks)}
                >
                  Save
                </button>
                <button
                  className="cancel-button"
                  onClick={() => handleCancel(setIsEditingXxRunbooks)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <span>
                {xxRunbooks}
                <span
                  className="edit-icon"
                  onClick={() => handleEdit(setIsEditingXxRunbooks)}
                ></span>
              </span>
            )}{" "}
            Runbooks.
          </li>
        </ul>
      </div>

      <div className="footer">Page 4</div>
    </div>
  );
};

export default Page4;
