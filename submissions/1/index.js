const projects = [
  { id: 1, name: "Option 1", probability: 0.3 },
  { id: 2, name: "Option 2", probability: 0.5 },
  { id: 3, name: "Option 3", probability: 0.15 },
  { id: 4, name: "Option 4", probability: 0.05 },
];

function getRandomProject() {
  const nRnd = Math.random();
  if (nRnd < 0.3) return projects[0];
  if (nRnd < 0.8) return projects[1];
  if (nRnd < 0.95) return projects[2];
  return projects[3];
}

function outputRandom() {
  const outObj = {};
  for (let i = 0; i < 500; i++) {
    const rProj = getRandomProject();
    console.log("name:", rProj.name);
    outObj[rProj.id] = (outObj[rProj.id] || 0) + 1;
  }
  for (let proj of projects) {
    console.log(`ID ${proj.id} =`, outObj[proj.id]);
  }
}

outputRandom()