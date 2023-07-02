const facts = [
  "Rowan Atkinson has a master's degree in Electrical Engineering",
  "Chuck Norris's first name is actually Carlos",
  "Eminem originally wanted to become a comic-book artist",
  "Lady Gaga wrote “Just Dance” and “Born This Way” in just 10 minutes",
  "Jack Black is the son of rocket scientists",
  "Elvis Presley was a natural blonde",
];

export default function Facts() {
  return (
    <div>
      <h2>Fakta om kjendiser</h2>
      <div className="card">{facts[0]}</div>
      <div className="card">{facts[1]}</div>
      <div className="card">{facts[2]}</div>
      <div className="card">{facts[3]}</div>
    </div>
  );
}
