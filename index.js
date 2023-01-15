const grassHeight = prompt(
  "how tall (in centimeter) is your grass height right now ?"
);

const scissor = [{ size: small }, { size: medium }, { size: big }];

if (grassHeight > 1 && grassHeight <= 10) {
  useScissor = scissor.size[0];
  console.log(`You can cut the grass with $(useScissor)`);
} else if (grassHeight <= 50) {
  useScissor = scissor.size[1];
  console.log(`You can cut the grass with $(useScissor)`);
} else if (grassHeight <= 100) {
  useScissor = scissor.size[2];
  console.log(`You can cut the grass with $(useScissor)`);
} else if (grassHeight > 100) {
  console.log(`Grass height is too long!`);
} else {
  console.log(`Grass height is either too short or has not grown at all!`);
}
