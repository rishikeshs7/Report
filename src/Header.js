import React, { useContext, useState } from "react";
import { OrganizationContext } from "./OrganizationContext"; // Import the context
import "./Header.css";

const Header = () => {
  const { organizationName, setOrganizationName } = useContext(OrganizationContext); // Access the global organization name and setter
  const [logoUrl, setLogoUrl] = useState(
    `https://logo.clearbit.com/${organizationName.toLowerCase().replace(/\s+/g, "")}.com`
  );
  const [isEditing, setIsEditing] = useState(false);
  const [newOrganizationName, setNewOrganizationName] = useState("");
  const [managerName, setManagerName] = useState("Kumar T");
  const [isEditingManager, setIsEditingManager] = useState(false);
  const [newManagerName, setNewManagerName] = useState("");

  const fetchLogo = (name) => {
    const cleanedName = name.toLowerCase().replace(/\s+/g, "");
    setLogoUrl(`https://logo.clearbit.com/${cleanedName}.com`);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (newOrganizationName.trim()) {
      setOrganizationName(newOrganizationName);
      fetchLogo(newOrganizationName);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewOrganizationName("");
  };

  const handleManagerEdit = () => {
    setIsEditingManager(true);
  };

  const handleManagerSave = () => {
    if (newManagerName.trim()) {
      setManagerName(newManagerName);
    }
    setIsEditingManager(false);
  };

  const handleManagerCancel = () => {
    setIsEditingManager(false);
    setNewManagerName("");
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setLogoUrl(reader.result); // Set the uploaded image as the logo
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="page-container">
      <div className="header">
        <div className="logo-container">
          <img
            src={logoUrl}
            alt={`${organizationName} Logo`}
            className="logo"
            onError={() =>
              setLogoUrl("https://via.placeholder.com/100?text=No+Logo")
            }
          />
          <i className="edit-icon" onClick={handleEdit}></i>
          <label className="upload-icon">
            <input type="file" accept="image/*" onChange={handleUpload} style={{ display: "none" }} />
            <img
              src="uploadlogo.png" // Path to the custom upload button image
              alt="Upload"
              style={{ width: "30px", cursor: "pointer" }} // Styling for the button
            />
          </label>
        </div>
        {isEditing && (
          <div className="edit-form">
            <input
              type="text"
              placeholder="Enter organization name"
              value={newOrganizationName}
              onChange={(e) => setNewOrganizationName(e.target.value)}
            />
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
            <button className="cancel-button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        )}
        <div className="header-content">
          <h1>{organizationName} IT Infrastructure Business</h1>
          <h2>Continuity Analysis</h2>
        </div>
        <div className="provided-by-section">
          <p className="provided-by-line">Provided by Trillisent</p>
          <div className="manager-name-section">
            <p className="provided-by-line">
              Project Manager: {managerName}
              <i className="edit-icon" onClick={handleManagerEdit}></i>
            </p>
            {isEditingManager && (
              <div className="edit-form">
                <input
                  type="text"
                  placeholder="Enter manager name"
                  value={newManagerName}
                  onChange={(e) => setNewManagerName(e.target.value)}
                />
                <button className="save-button" onClick={handleManagerSave}>
                  Save
                </button>
                <button
                  className="cancel-button"
                  onClick={handleManagerCancel}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="footer">Page 1</div>
    </div>
  );
};

export default Header;
