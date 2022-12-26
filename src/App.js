import "./App.css";

function App() {
    return (
        <div className="App">
            <h1>Sahil Bondre</h1>
            <p className="author">Software Engineer</p>
            <div data-testid="abstract" className="abstract">
                <h2>Abstract</h2>
                <p className="left">
                    Hello! I am a Software Engineer. Here I write tutorials on the topics
                    that I find interesting. I occasionally blog here while working.
                    This website takes heavy inspiration from the personal websites of computer science legends
                    like <a
                    href="https://www.cs.helsinki.fi/u/torvalds/" className="link">Linus Torvalds</a>, <a
                    href="https://www-cs-faculty.stanford.edu/~knuth/" className="link">Donald Knuth</a>,
                    <a href="https://www.stroustrup.com/" className="link">Bjarne Stroustrup</a>, <a
                    href="https://www.bell-labs.com/usr/dmr/www/" className="link">Dennis Ritchie</a>. At the same
                    time, bland visual aesthetics help me focus on the critical task - engineering. <strong><i>Embrace
                    Boredom.</i></strong>
                </p>
            </div>

            <nav role="navigation" className="toc left">
                <h2>Links</h2>
                <ol>
                    <li><a href="https://github.com/godcrampy">GitHub</a></li>
                    <li><a href="https://twitter.com/godcrampy">Twitter</a></li>
                    <li><a href="https://www.linkedin.com/in/sahil-bondre">Linkedin</a></li>
                    <li><a href="mailto:sahilbondre@gmail.com">Email</a></li>
                    <li><a href="https://drive.google.com/file/d/1d1mJBkVCVlpySKlrsv6r2rtpKOMseRY2/view">Resume</a></li>
                </ol>
            </nav>

            <nav role="navigation" className="toc left">
                <h2>Essays</h2>
                <ol>
                    <li><a href="#getting-started">Getting Started</a></li>
                    <li>
                        <a href="#class-based-elements">Class-based Elements</a>
                        <ol>
                            <li><a href="#author-abstract">Author and Abstract</a></li>
                            <li>
                                <a href="#tdpl">Theorems, Definitions and Proofs</a>
                                <ol>
                                    <li><a href="#proofs-theorems">Proofs & Theorems</a></li>
                                    <li><a href="#lemmas">Lemmas</a></li>
                                    <li><a href="#definitions">Definitions</a></li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                    <li><a href="#language-support">Language Support</a></li>
                    <li><a href="#sidenotes">Sidenotes</a></li>
                    <li><a href="#dark-mode">Dark Mode</a></li>
                    <li><a href="#alternative-typeface">Alternative Typeface</a></li>
                    <li>
                        <a href="#html-elements">HTML Elements</a>
                        <ol>
                            <li><a href="#text-formatting">Text Formatting</a></li>
                            <li><a href="#blockquotes">Blockquotes</a></li>
                            <li><a href="#definition-lists">Definition Lists</a></li>
                            <li><a href="#tables">Tables</a></li>
                            <li><a href="#images">Images</a></li>
                        </ol>
                    </li>
                    <li>
                        <a href="#miscellaneous">Miscellaneous</a>
                        <ol>
                            <li><a href="#scroll-overflow">Scroll Overflow</a></li>
                            <li><a href="#syntax-highlighting">Syntax Highlighting</a></li>
                        </ol>
                    </li>
                </ol>
            </nav>
        </div>
    );
}

export default App;
