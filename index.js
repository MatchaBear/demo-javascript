const grassHeight = prompt(
  "how tall (in centimeter) is your grass height right now ?"
);

const scissor = [{ size: "small" }, { size: "medium" }, { size: "big" }];

if (grassHeight > 0 && grassHeight <= 10) {
  useScissor = scissor[0].size;
  console.log(`You can cut the grass with ${useScissor} scissor`);
} else if (grassHeight > 0 && grassHeight <= 50) {
  useScissor = scissor[1].size;
  console.log(`You can cut the grass with ${useScissor} scissor`);
} else if (grassHeight > 0 && grassHeight <= 100) {
  useScissor = scissor[2].size;
  console.log(`You can cut the grass with ${useScissor} scissor`);
} else if (grassHeight > 100) {
  console.log(`Grass height is too long!`);
} else {
  console.log(`Grass height is either too short or has not grown at all!`);
}
