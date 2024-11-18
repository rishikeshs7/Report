import React, { useState } from "react";
import "./Page6.css";

const Page6 = () => {
  const [data, setData] = useState([
    { functionalArea: "LAN/WAN- Routing & Switching Management", metricScore: "312", priority: "Critical", recoveryTime: "0-4 hrs." },
    { functionalArea: "Network Management", metricScore: "291", priority: "Critical", recoveryTime: "0 hrs." },
    { functionalArea: "IT Security Management", metricScore: "282", priority: "Critical", recoveryTime: "0 hrs." },
    { functionalArea: "Firewall Management", metricScore: "261", priority: "Critical", recoveryTime: "0 hrs." },
    { functionalArea: "Datacenter Management", metricScore: "212", priority: "Necessary", recoveryTime: "12-24 hrs." },
    { functionalArea: "Applications Management", metricScore: "158", priority: "Optional", recoveryTime: "96-108 hrs." },
    { functionalArea: "Server Management", metricScore: "113", priority: "Optional", recoveryTime: "96-108 hrs." },
    { functionalArea: "Cloud Computing Management", metricScore: "92", priority: "Optional", recoveryTime: "96-108 hrs." },
    { functionalArea: "Backup & Restore Management", metricScore: "80", priority: "Optional", recoveryTime: "96-108 hrs." },
    { functionalArea: "Patch Management", metricScore: "72", priority: "Optional", recoveryTime: "96-108 hrs." },
    { functionalArea: "Storage Management", metricScore: "66", priority: "Optional", recoveryTime: "96-108 hrs." },
    { functionalArea: "Service Management", metricScore: "55", priority: "Optional", recoveryTime: "96-108 hrs." },
    { functionalArea: "Compliance Management", metricScore: "35", priority: "Optional", recoveryTime: "96-108 hrs." },
  ]);

  const [editingIndex, setEditingIndex] = useState(null);
  const [editingRow, setEditingRow] = useState({});

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditingRow({ ...data[index] });
  };

  const handleSave = (index) => {
    const updatedData = [...data];
    updatedData[index] = editingRow;
    setData(updatedData);
    setEditingIndex(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
  };

  return (
    <div className="page-container">
      <div className="content">
        <h2 className="section-title">II. ASSESSMENT AND ANALYSIS</h2>

        <h3>A. DRAFT BUSINESS IMPACT ANALYSIS – IT INFRASTRUCTURE ONLY</h3>
        <p>
          In adherence to our phased approach, presented below is an initial snapshot of the Business
          Impact Analysis (BIA) for the IT Infrastructure Group. This high-level assessment serves as a
          foundation for the comprehensive analysis planned in Phase II, which will be further refined
          into a streamlined governance structure.
        </p>

        <table className="impact-table">
          <thead>
            <tr>
              <th>Functional Area</th>
              <th>Metric Score</th>
              <th>Priority</th>
              <th>Recovery Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.functionalArea}</td>
                {editingIndex === index ? (
                  <>
                    <td>
                      <input
                        type="text"
                        value={editingRow.metricScore}
                        onChange={(e) =>
                          setEditingRow({ ...editingRow, metricScore: e.target.value })
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={editingRow.priority}
                        onChange={(e) =>
                          setEditingRow({ ...editingRow, priority: e.target.value })
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={editingRow.recoveryTime}
                        onChange={(e) =>
                          setEditingRow({ ...editingRow, recoveryTime: e.target.value })
                        }
                      />
                    </td>
                    <td>
                      <button className="save-button" onClick={() => handleSave(index)}>
                        Save
                      </button>
                      <button className="cancel-button" onClick={handleCancel}>
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{row.metricScore}</td>
                    <td>{row.priority}</td>
                    <td>{row.recoveryTime}</td>
                    <td>
                      <span className="edit-icon" onClick={() => handleEdit(index)}></span>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        <p>
          The metric scores reflect the relative importance of each functional area, with critical areas
          requiring immediate attention and optional areas offering flexibility in response times. The
          priority categorization assists in resource allocation during recovery efforts, ensuring a
          strategic and efficient restoration process.
        </p>
        <p>
          The provided Recovery Time objectives align with industry best practices and the unique
          demands of each functional area, contributing to a comprehensive and targeted Business
          Continuity and Disaster Recovery (BCDR) strategy for the IT Infrastructure Group.
        </p>
      </div>
      <div className="footer">Page 6</div>
    </div>
  );
};

export default Page6;
