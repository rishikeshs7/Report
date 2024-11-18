import React from "react";

const Assessment = () => {
    return (
        <div style={{ padding: "20px" }}>
            <h2>Assessment and Analysis</h2>
            <h3>Draft Business Impact Analysis – IT Infrastructure Only</h3>
            <p>
                In adherence to our phased approach, presented below is an initial snapshot of the Business Impact Analysis (BIA) for the IT Infrastructure Group.
            </p>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ backgroundColor: "#f4f4f4" }}>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Functional Area</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Metric Score</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Priority</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Recovery Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>LAN/WAN - Routing & Switching Management</td>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>312</td>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>Critical</td>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>0-4 hrs.</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>Network Management</td>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>291</td>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>Critical</td>
                        <td style={{ border: "1px solid #ddd", padding: "8px" }}>0 hrs.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Assessment;
