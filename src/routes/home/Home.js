import { useEffect, useState } from "react";
import essayConfigJson from "../../essay/index.json";

function Home() {
  const [essayConfigs, updateEssayConfigs] = useState([]);

  useEffect(() => {
    updateEssayConfigs([...essayConfigJson].reverse().slice(0, 10));
  }, []);

  return (
    <div data-testid="home" className="Home">
      <h1>Sahil Bondre</h1>
      <p className="author">Software Engineer</p>
      <div data-testid="abstract" className="abstract">
        <h2>Abstract</h2>
        <p>
          Hello! I am a Software Engineer. Here I write tutorials on the topics
          that I find interesting. I occasionally blog here while working. This
          website takes heavy inspiration from the personal websites of computer
          science legends like{" "}
          <a href="https://www.cs.helsinki.fi/u/torvalds/" className="link">
            Linus Torvalds
          </a>
          ,{" "}
          <a
            href="https://www-cs-faculty.stanford.edu/~knuth/"
            className="link"
          >
            Donald Knuth
          </a>
          ,
          <a href="https://www.stroustrup.com/" className="link">
            Bjarne Stroustrup
          </a>
          ,{" "}
          <a href="https://www.bell-labs.com/usr/dmr/www/" className="link">
            Dennis Ritchie
          </a>
          . At the same time, bland visual aesthetics help me focus on the
          critical task - engineering.{" "}
          <strong>
            <i>Embrace Boredom.</i>
          </strong>
        </p>
      </div>

      <nav role="navigation" className="toc">
        <h2>Links</h2>
        <ol>
          <li>
            <a href="https://github.com/godcrampy">GitHub</a>
          </li>
          <li>
            <a href="https://twitter.com/godcrampy">Twitter</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sahil-bondre">Linkedin</a>
          </li>
          <li>
            <a href="mailto:sahilbondre@gmail.com">Email</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1d1mJBkVCVlpySKlrsv6r2rtpKOMseRY2/view">
              Resume
            </a>
          </li>
        </ol>
      </nav>

      <nav role="navigation" className="toc">
        <h2>Recent Essays</h2>
        <ol>
          {essayConfigs.map((essayConfig) => {
            return (
              <li key={essayConfig.title}>
                <a href={essayConfig.location}>{essayConfig.title}</a>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}

export default Home;
