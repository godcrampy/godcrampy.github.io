import MenuBar from "../../components/MenuBar/MenuBar";

function Work() {
  return (
    <div className="Work">
      <MenuBar />
      <h1>Work</h1>
      <div data-testid="abstract" className="abstract">
        <h2>Abstract</h2>
        <p>
          I am a Software Engineer based in the UK. I love Engineering Systems
          and Building Products. Here's a list of things I'm reading about and
          projects I've worked on. This page serves mainly as a public
          accountability for me to consume and produce more ideas.
        </p>
      </div>
      <h2>Currently Reading</h2>
      <ol>
        <li>War and Peace - Leo Tolstoy</li>
        <li>Courage Is Calling: Fortune Favors the Brave - Ryan Holiday</li>
      </ol>

      <h2>Projects</h2>
      <h3>Little Invest Town</h3>
      <ul>
        <li>
          Web app to analyse 400+ Indian listed companies without any jargon or
          finance background
        </li>
        <li>
          The app transforms complicated financial statements of companies into
          an imaginary character’s personal finances. Helps people without
          finance background make sound investment decisions.
        </li>
        <li>
          <a href="https://github.com/Twelfth-Hour/lit-little-invest-town/">
            Repo
          </a>{" "}
          | <a href="https://www.youtube.com/watch?v=OLNSSHoqGZk">Demo</a>
        </li>
      </ul>
      <h3>Geo Locator</h3>
      <ul>
        <li>
          System for tracking the trajectory of patrolling officers. In
          collaboration with SDPO Lakhipur, India.
        </li>
        <li>
          Processed 100,000+ data points for fine-tuning on parameters like
          tracking accuracy, data usage and battery consumption.
        </li>
        <li>
          Deployed and tested successfully in Lakhipur,{" "}
          <strong>Assam Police.</strong>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1rELIVbhxAhE5crGv2kh2mc39c9tzyTLY/view?usp=sharing">
            LOR
          </a>
        </li>
      </ul>

      <h3>PyGraphics</h3>
      <ul>
        <li>
          Python CLI to parse and execute C programs with a graphics.h
          dependency. Executes C programs without compiling a binary.
        </li>
        <li>
          <a href="https://github.com/godcrampy/py-graphics-h">Repo</a>
        </li>
      </ul>

      <h3>MIPS Assembler</h3>
      <ul>
        <li>
          Assembler to emulate and execute programs written in MIPS assembly
          language independent of hardware. Runs on any hardware that can run
          C++.
        </li>
        <li>
          <a href="https://github.com/godcrampy/mips-assembler">Repo</a>
        </li>
      </ul>

      <h3>SVNIT 101</h3>
      <ul>
        <li>
          Android app to help freshers of NIT Surat with the general and
          academic details of the college. Actively used by college freshers.{" "}
          <strong>850+ downloads.</strong>
        </li>
        <li>
          <a href="https://play.google.com/store/apps/details?id=com.godcrampy.svnit&amp;hl=en_IN&amp;gl=US">
            Play Store Link
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Work;
