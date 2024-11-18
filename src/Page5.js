import React, { useContext } from "react";
import { OrganizationContext } from "./OrganizationContext"; // Import the context
import "./Page5.css";

const Page5 = () => {
  const { organizationName } = useContext(OrganizationContext); // Access the global organization name

  return (
    <div className="page-container">
      <div className="content">
        <h3>C. Value-Added Considerations Beyond SOW Scope: Calculating Downtime Costs</h3>
        <p>
          In our pursuit of a resilient Business Continuity and Disaster Recovery (BCDR) strategy, we
          recognize the critical need to assess the cost of downtime, a facet often overlooked in standard
          Statements of Work (SOW). Resilience, measured as a percentage, directly impacts our operations.
          While Service Level Agreements often present availability as 99.9% or 99.99%, the seemingly
          minimal difference can result in significant downtime, as illustrated below:
        </p>

        <table className="downtime-table">
          <thead>
            <tr>
              <th>Availability</th>
              <th>Daily</th>
              <th>Weekly</th>
              <th>Monthly</th>
              <th>Yearly</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>99%</td>
              <td>14m 24s</td>
              <td>1hr 40m 48s</td>
              <td>7hr 18m 17.5s</td>
              <td>3d 15hr 39m 29.5s</td>
            </tr>
            <tr>
              <td>99.9%</td>
              <td>1m 26.4s</td>
              <td>10m 4.8s</td>
              <td>43m 49.7s</td>
              <td>8h 45m 57s</td>
            </tr>
            <tr>
              <td>99.99%</td>
              <td>8.6s</td>
              <td>1m 0.5s</td>
              <td>4m 23s</td>
              <td>52m 35.7s</td>
            </tr>
          </tbody>
        </table>

        <p>
          For instance, the distinction between 99.99% and 99.9% availability equates to an additional 7
          hours of downtime yearly, translating to 1 minute and 26 seconds daily or 10 minutes and 48
          seconds weekly.
        </p>

        <p>
          Considering Gartner's industry analysis, the average cost of network downtime is approximately
          $5,600 per minute. With an 8-hour annual downtime, a 99.9% guarantee could result in a staggering
          $2.8 million loss. This prompts a critical question: Can our applications, data, or tools afford an
          annual $2 million loss due to unavailability?
        </p>

        <p>
          To address this, we advocate defining a target availability and establishing a well-documented
          Ticketing process, reviewed quarterly as part of our BCDR strategy. Beyond aligning our IT
          infrastructure with Best Practices, our analysis also encompassed a <strong>virtual walkthrough of the
          main campus IT spaces, documented findings, and a comprehensive assessment of on-premise
           versus Cloud computing pros and cons for {organizationName}. </strong>
        </p>
      </div>
      <div className="footer">Page 5</div>
    </div>
  );
};

export default Page5;
