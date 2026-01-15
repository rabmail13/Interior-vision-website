## /experiment [name]

When implementing an experimental feature, follow this protocol to ensure easy reversibility.

### Phase 1: Planning (Before Writing Code)

Create `.claude/experiments/[name].md` with this template:
```md
# Experiment: [name]
**Status:** 🧪 Active
**Created:** [date]
**Page/Route:** [e.g., /dashboard, /api/webhook]

## Implementation Plan
- [ ] Brief description of what this experiment does

## Reversal Checklist
### Files to Create
- (list will be populated during implementation)

### Files to Modify
- (list will be populated during implementation)

### Dependencies to Add
- (list will be populated during implementation)

### Environment Variables
- (list will be populated during implementation)

### Config Changes
- (list will be populated during implementation)
```

### Phase 2: During Implementation

As you work, update the reversal doc in real-time:

**For new files:** Add the full path
```md
### Files to Create
- `src/app/dashboard/experimental-widget.tsx`
- `src/components/experiments/widget-modal.tsx`
```

**For modified files:** Capture the BEFORE state
```md
### Files to Modify
#### `src/app/layout.tsx`
**Before:**
\`\`\`tsx
// paste original code block here
\`\`\`
**After:**
\`\`\`tsx
// paste modified code block here
\`\`\`
```

**For dependencies:**
```md
### Dependencies to Add
\`\`\`bash
npm install framer-motion@^11.0.0
\`\`\`
```

**For env vars:**
```md
### Environment Variables
Added to `.env.local`:
- `EXPERIMENT_API_KEY` - [purpose]

Added to `.env.example`:
- `EXPERIMENT_API_KEY=your_key_here`
```

**For config changes:** Same before/after format as modified files

### Phase 3: Completion

Update the status and add reversal steps:
```md
**Status:** ✅ Implemented

## Reversal Instructions
To reverse this experiment, execute in order:

1. **Remove created files:**
   - Delete `src/app/dashboard/experimental-widget.tsx`
   - Delete `src/components/experiments/widget-modal.tsx`

2. **Restore modified files:**
   - In `src/app/layout.tsx`, replace [after block] with [before block]

3. **Remove dependencies:**
   \`\`\`bash
   npm uninstall framer-motion
   \`\`\`

4. **Remove env vars:**
   - Remove `EXPERIMENT_API_KEY` from `.env.local` and `.env.example`

5. **Restore configs:**
   - [specific instructions]
```

---

## /reverse [name]

Read `.claude/experiments/[name].md` and execute the Reversal Instructions section step by step. After completion, update the experiment status to `🗑️ Reversed`.