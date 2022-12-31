import essayConfigJson from "../../essay/index.json";
import { useEffect, useState } from "react";
import MenuBar from "../../components/MenuBar/MenuBar";

function EssayList() {
  const [essayConfigGroups, updateEssayConfigGroups] = useState([]);

  useEffect(() => {
    const groups = essayConfigJson.reduce(
      (groups, item) => ({
        ...groups,
        [item.collection]: [...(groups[item.collection] || []), item],
      }),
      {}
    );

    updateEssayConfigGroups(groups);
  }, []);

  return (
    <div className="EssayList">
      <MenuBar />
      <h1>Essays</h1>
      <div data-testid="abstract" className="abstract">
        <h2>Abstract</h2>
        <p>
          Writing helps me think. Starting in 2023, I plan to write at least one
          weekly essay. At least a thousand words should come out of me every
          week. Although, most of what I write will be unoriginal.{" "}
          <b>Ideas don't come out of the vacuum</b>. One needs to stand on the
          shoulders of giants. Behind the curtains of having to compose one
          piece weekly is the idea that it'll push me to read more. To write a
          thousand words, one needs to read ten thousand words, process the
          details, examine the key concepts, and organize them in an essay with
          some original ideas bundled.
        </p>
      </div>
      {Object.keys(essayConfigGroups).map((collection) => {
        return (
          <div key={collection}>
            <h2>{collection} Essays</h2>
            <dl>
              {[...essayConfigGroups[collection]]
                .reverse()
                .map((essayConfig) => {
                  return (
                    <dt key={essayConfig.title}>
                      <p>
                        <a href={essayConfig.location.split("/")[1]}>
                          {essayConfig.title}
                        </a>
                        <br />
                        <small>{essayConfig.date}</small>
                      </p>
                    </dt>
                  );
                })}
            </dl>
          </div>
        );
      })}
    </div>
  );
}

export default EssayList;
