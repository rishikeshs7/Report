import React, { useContext, useState } from "react";
import { OrganizationContext } from "./OrganizationContext"; // Import the context
import "./Page10.css";

const Page10 = () => {
  const { organizationName } = useContext(OrganizationContext); // Access the global organization name
  const [value1, setValue1] = useState("0.69");
  const [isEditingValue1, setIsEditingValue1] = useState(false);

  const [value2, setValue2] = useState("0.83");
  const [isEditingValue2, setIsEditingValue2] = useState(false);

  const [hospitals, setHospitals] = useState("hospitals");
  const [isEditingHospitals, setIsEditingHospitals] = useState(false);

  const [value3, setValue3] = useState("0.38");
  const [isEditingValue3, setIsEditingValue3] = useState(false);

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
          C. EMERGENCY RESPONSE & CRISIS MANAGEMENT{" "}
          {isEditingValue1 ? (
            <span>
              <input
                type="text"
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
              />
              <div className="button-row">
                <button
                  className="save-button"
                  onClick={() => handleSave(value1, setValue1, setIsEditingValue1)}
                >
                  Save
                </button>
                <button
                  className="cancel-button"
                  onClick={() => handleCancel(setIsEditingValue1)}
                >
                  Cancel
                </button>
              </div>
            </span>
          ) : (
            <span>
              ({value1})
              <span
                className="edit-icon"
                onClick={() => handleEdit(setIsEditingValue1)}
              ></span>
            </span>
          )}
        </h3>
        <p>
          The imperative for a Business Continuity and Disaster Recovery Plan
          lies in its foundational support for emergency response and crisis management.
          A central component of effective crisis management is the establishment of a 24X7
          Network Operations Center (NOC) equipped with monitoring tools essential for immediate
          observation, response, and action in the face of technological events. The NOC's operational
          success hinges on the development of meticulous documentation and comprehensive training to
          enable swift, informed actions when elements fail, whether within the Datacenter or distributed IT spaces.
          Recognizing the urgency inherent in crisis situations, an Emergency Response and Crisis Management plan
          in checklist format is indispensable. This approach ensures rapid decision-making and execution based on
          the nature of the event at hand. The plan further mandates detailed and approved Roles, Responsibilities,
          and Authorities aligned with checklist tasks, acknowledging the criticality of streamlined coordination during crisis events.
        </p>

        <h3>
          D. EMERGENCY FACILITIES{" "}
          {isEditingValue2 ? (
            <span>
              <input
                type="text"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
              />
              <div className="button-row">
                <button
                  className="save-button"
                  onClick={() => handleSave(value2, setValue2, setIsEditingValue2)}
                >
                  Save
                </button>
                <button
                  className="cancel-button"
                  onClick={() => handleCancel(setIsEditingValue2)}
                >
                  Cancel
                </button>
              </div>
            </span>
          ) : (
            <span>
              ({value2})
              <span
                className="edit-icon"
                onClick={() => handleEdit(setIsEditingValue2)}
              ></span>
            </span>
          )}
        </h3>
        <p>
          For {organizationName}, the viability of Business Functions at an alternate site hinge on the
          establishment of a "Mutual Aide Agreement" with other{" "}
          {isEditingHospitals ? (
            <span>
              <input
                type="text"
                value={hospitals}
                onChange={(e) => setHospitals(e.target.value)}
              />
              <div className="button-row">
                <button
                  className="save-button"
                  onClick={() => handleSave(hospitals, setHospitals, setIsEditingHospitals)}
                >
                  Save
                </button>
                <button
                  className="cancel-button"
                  onClick={() => handleCancel(setIsEditingHospitals)}
                >
                  Cancel
                </button>
              </div>
            </span>
          ) : (
            <span>
              {hospitals}
              <span
                className="edit-icon"
                onClick={() => handleEdit(setIsEditingHospitals)}
              ></span>
            </span>
          )}
          In the realm of Technology, the low risk of an entire Datacenter loss underscores the critical need for High Availability in the primary Datacenter. This includes the capability
          for disaster recovery failover to an alternative facility, ensuring the uninterrupted support of all critical and necessary functions. The inherent risks lie in reliance on third-party supplied components such as Power, Water, Network, Transportation, and Facilities for a failover to a secondary facility, distinct from the primary Datacenter. To address these risks effectively, a detailed roadmap is recommended. This roadmap should feature clearly defined milestones, identifying the requisite Level of Uptime (refer to the above table) essential for {organizationName} to maintain in alignment with its overarching mission. Within this strategic roadmap, alternatives should be delineated for the development of a Datacenter environment and infrastructure conducive to meeting uptime targets,
          as well as fulfilling the Recovery Time and Point Objectives of the Institute at the functional level.
        </p>

        <h3>
          E. BUSINESS AND SUPPORT COMPONENT RECOVERY{" "}
          {isEditingValue3 ? (
            <span>
              <input
                type="text"
                value={value3}
                onChange={(e) => setValue3(e.target.value)}
              />
              <div className="button-row">
                <button
                  className="save-button"
                  onClick={() => handleSave(value3, setValue3, setIsEditingValue3)}
                >
                  Save
                </button>
                <button
                  className="cancel-button"
                  onClick={() => handleCancel(setIsEditingValue3)}
                >
                  Cancel
                </button>
              </div>
            </span>
          ) : (
            <span>
              ({value3})
              <span
                className="edit-icon"
                onClick={() => handleEdit(setIsEditingValue3)}
              ></span>
            </span>
          )}
        </h3>
        <p>
          The essence of a Business Support Component Recovery plan lies in addressing the
          essential needs of the business during an event, akin to the stock available in an emergency
          room. This plan becomes indispensable when the organization loses the ability to perform its tasks
          at its usual location. For instance, in the event of a sprinkler system activation flooding the
          accounting department, it becomes crucial to identify what is needed for them to operate in an alternative space.
          In the realm of IT, Support Component recovery encompasses all necessary components: Equipment, Applications, People, and
          Vendors required for operational continuity. Establishing a comprehensive list and alternative means for acquiring or
          recovering these components is integral to the overarching strategies of Business Continuity and Disaster Recovery.
        </p>
      </div>

      <div className="footer">Page 10</div>
    </div>
  );
};

export default Page10;
