# Engineering Standards for Contribution

We welcome pull requests that align with the core philosophy: Speed, zero bloat, and pure DOM manipulation. 

## The Golden Rules
* **No New Dependencies:** Do not open a PR adding React, Vue, GSAP, or heavy CSS frameworks. This project remains vanilla HTML, CSS, and JS by design.
* **Mobile First Rigor:** Any layout changes must be tested thoroughly on mobile breakpoints before submission.
* **Zero Trust AI:** If you alter the `api/chat.js` logic, ensure the prompt fencing remains intact to prevent API credit draining.

## PR Process
1. Fork the repository.
2. Create a branch focusing on a single feature (e.g., `feature/terminal_upgrade` or `fix/hex_grid`).
3. Ensure your CSS additions follow the existing CSS variable token system.
4. Submit the PR with a clear summary of the problem solved.