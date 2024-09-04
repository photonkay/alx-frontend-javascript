export default function taskBlock(trueOrFalse) {
  let task = false;  // Use let for block-scoped variables
  let task2 = true;  // Use let for block-scoped variables

  if (trueOrFalse) {
    task = true;  // These will modify the block-scoped variables
    task2 = false;
  }

  return [task, task2];
}
