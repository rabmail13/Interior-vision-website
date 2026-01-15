## Design Update Command

**Usage:** `@claude update-design [description of change]`

**Purpose:** Updates the design.md file with universal design changes and ensures consistency across the project.

**Instructions for Claude:**

When you receive an `update-design` command:

1. **Read the current design.md file** to understand the existing design system

2. **Analyze the requested change** and determine which sections it affects:
   - CSS variables and color schemes
   - Grid/layout patterns and breakpoints
   - Spacing/padding conventions
   - Hover states and transitions
   - Typography scales and font usage
   - Component-specific styling patterns
   - Design tokens and reusable patterns

3. **Update design.md** with:
   - Clear documentation of the new pattern/value
   - Before/after examples if replacing existing patterns
   - Usage guidelines and where this should be applied
   - Any related patterns that should be updated for consistency

4. **Identify affected files** by:
   - Scanning the project for existing implementations of the old pattern
   - Listing all files that will need updates

5. **Propose implementation changes**:
   - Show specific code changes needed in each file
   - Explain the rationale for each change
   - Ask for confirmation before applying changes

6. **After confirmation**, systematically update all affected files

**Example flows:**

- "update-design: change primary button hover from scale to glow effect"
- "update-design: add new breakpoint at 1440px for wide screens"
- "update-design: update spacing scale to use 4px base instead of 8px"

**Before finalizing**, Claude should:
- Check for any conflicting patterns
- Identify potential breaking changes
- Suggest migration steps if needed