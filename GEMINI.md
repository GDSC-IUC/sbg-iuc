# Code Generation & Review Workflow Rule

For every feature implementation, bug fix, or action that requires generating or modifying code, you MUST strictly follow this two-step workflow:

1. **Step 1 — Code Generation (Subagent in `pro` mode)**:
   - Delegate the initial code writing/generation to a subagent using `invoke_subagent` (e.g., `self` or a dedicated code-writer subagent defined via `define_subagent`).
   - Always set `Model: "pro"` whenever possible (do NOT use `flash` unless `pro` is unavailable).
   - Instruct the subagent to write the complete code for the requested feature or modification and return the generated code/changes.
   - To verify types without corrupting a running Next.js dev server (`.next` cache), always use `npx tsc --noEmit` instead of `npm run build`.

2. **Step 2 — Full Review, Correction & Final Validation (Main Instance)**:
   - Once the subagent finishes and returns the code, the main agent instance (Gemini 4 Argon High) MUST perform a complete and rigorous review of the generated code.
   - Audit for logic bugs, edge cases, security flaws, type safety, and adherence to project conventions.
   - Fix any issues found, ensure the final files in the workspace contain the corrected code, and display **only the final validated code** to the user (without cluttering the response with unvalidated intermediate drafts).
