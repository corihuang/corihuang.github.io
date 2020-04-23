---
title: Design and Front-End Collaboration
type: designops
layout: project
---

Making time to make collaboration work.

---

When a designer shares a component design with an engineer, it’s helpful to include context and documentation around both the context, visual design, and interaction design so that everyone has the same idea about what the user will ultimately interact with.

Below are some helpful guidelines on what information designers should share along with their designs in Figma.

## Context
Show the component in context by providing examples of how the component fits into an existing (or made up) screen at different sizes. In some cases, if the component is used in multiple contexts (i.e. a button inside a top nav bar vs inside a modal/dialog), it may be useful to show how the component may change or adapt to them.

##  Fixed Specs
[ ] Sizing, like max and min width - How does the component resize? Does it resize to fit content? Does text get truncated?
[ ] Padding inside — is there a specific padding amount?
[ ] Margins around
[ ] Other constraints:
  - Example 1: a card component must have content/children. If a card has no content, it must display an empty state.
  - Example 2: a card component must be flexible enough to handle long content as well as short content in a way that is intentional (designed) and not unintentional (broken). Therefore, it would be useful to think about and showcase these scenarios whenever possible.

## Variations
- Default values for the component — if no styling or properties are passed, what would the component look like?
- What is the default background color and font?
  - Example: By default, a button does not have an icon. There is default text Submit.
- Variations of the component  — what properties can be changed?
  - Example: a button may have an icon, that icon may appear on the left or right, and the actual icon image can be different. The copy inside the button can change.

## Interaction States
- States of the component — document how the component looks in each relevant state that a user would see as they interact with the component
  - Examples of states: hover, active / in focus, selected, visited, loading, disabled, error, empty
- Interactive prototype of the component being used that communicates the states — ideally, share a prototype of the component to show how different states are triggered
- Animations — in many cases, basic transition animations can be communicated via tools within Figma (or other prototyping tools). However for more complex animations, please communicate directly with the engineer either via sketching, whiteboarding, or showing existing examples of what others have done before.
