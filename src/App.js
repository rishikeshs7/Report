import React from "react";
import Header from "./Header";
import { OrganizationProvider } from "./OrganizationContext";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
import Page8 from "./Page8";
import Page9 from "./Page9";
import Page10 from "./Page10";
import Page11 from "./Page11";
import "./App.css";

function App() {
  return (
    <OrganizationProvider>


<div className="document">
       
       <Header />
       <Page2 />
       <Page3 />
       <Page4 />
       <Page5 />
       <Page6 />
       <Page7 />
       <Page8 />
       <Page9 />
       <Page10 />
       <Page11 />
       
     </div>


        
    </OrganizationProvider>
   
  );
}

export default App;
