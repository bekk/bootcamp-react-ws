const facts = [
  "Rowan Atkinson har en mastergrad i elektroteknikk",
  "Chuck Norris sitt første navn er egentlig Carlos",
  "Eminem ville egentlig bli tegneseriekunstner",
  "Lady Gaga skrev “Just Dance” og “Born This Way” på bare 10 minutter",
  "Jack Black sine foreldre er rakettforskere",
  "Elvis Presley sin naturlige hårfarge var blond",
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
