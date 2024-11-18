import React from "react";
import "./Page1.css";

const Page2 = () => {
  return (
    <div className="page-container">
      <div className="content">
        <h1 className="title">Table of Contents</h1>

        <div className="section">
          <h2>I. INTRODUCTION</h2>
          <div className="sub-section">
            <p>
              A. Purpose of this Business Continuity Plan
              <span className="page-number">3</span>
            </p>
            <p>
              B. Objectives Achieved
              <span className="page-number">4</span>
            </p>
            <p>
              C. Value-Added Considerations Beyond SOW Scope
              <span className="page-number">5</span>
            </p>
          </div>
        </div>

        <div className="section">
          <h2>II. ASSESSMENT AND ANALYSIS</h2>
          <div className="sub-section">
            <p>
              A. DRAFT BUSINESS IMPACT ANALYSIS - IT
              <span className="page-number">6</span>
            </p>
            <p className="sub-text">INFRASTRUCTURE ONLY</p>
            <p>
              B. IDENTIFIED RISKS AND ISSUES
              <span className="page-number">7</span>
            </p>
          </div>
        </div>

        <div className="section">
          <h2>III. PROJECT MANAGEMENT EFFECTIVENESS REVIEW - PHASE I</h2>
          <div className="sub-section">
            <p>
              A. GOVERNANCE
              <span className="page-number">8</span>
            </p>
            <p>
              B. PLANNING AND CONTROL
              <span className="page-number">8</span>
            </p>
          </div>
        </div>

        <div className="section">
          <h2>IV. RECOMMENDATIONS FOR BEST PRACTICE GUIDANCE AND METRICS ALIGNMENT</h2>
          <p>
            
            <span className="page-number"></span>
          </p>
        </div>
      </div>
      <div className="footer">Page 2</div>
    </div>
  );
};

export default Page2;
