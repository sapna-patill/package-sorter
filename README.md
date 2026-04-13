# Package Sorter

## Objective
This project sorts packages into stacks based on their volume and mass.

## Rules

- A package is **bulky** if:
  - Volume ≥ 1,000,000 cm³ OR
  - Any dimension ≥ 150 cm

- A package is **heavy** if:
  - Mass ≥ 20 kg

## Output

The function returns:
- STANDARD → not bulky and not heavy
- SPECIAL → either bulky or heavy
- REJECTED → both bulky and heavy

## How to Run

1. Copy the code
2. Run using Node.js:
   node index.js

## Sample Output

STANDARD  
SPECIAL  
REJECTED
