import "./App.css";
import { useState } from "react";
import { CV } from "./CV/Cv";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import More from "./components/More";

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="App">
      <Hero hero={hero} />
      <button
        className="custom-btn btn-4"
        onClick={() => setShowEducation(true)}
      >
        Education
      </button>
      <button
        className="custom-btn btn-4"
        onClick={() => setShowEducation(false)}
      >
        Experience
      </button>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <Education education={education} />
      <Experience experience={experience} />
      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
	      />
    </div>
  );
}

export default App;
