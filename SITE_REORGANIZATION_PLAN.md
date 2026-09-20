# Site Reorganization Plan - Chapter-Based Structure

## Current Problem
- Everything on one long homepage
- Hard to navigate as content grows
- No clear learning path
- Difficult to add new topics

## Proposed Solution: Chapter-Based Navigation

### New Structure

```
Homepage (index.html)
├── Chapter 1: Area
│   ├── area-home.html (Chapter landing page)
│   ├── learn.html (Why formulas work)
│   ├── real-world.html (Real examples)
│   ├── practice.html (10 main problems)
│   ├── practice-extra.html (15 problems)
│   ├── practice-evening.html (40 problems)
│   └── practice-olympiad.html (10 hard problems)
│
├── Chapter 2: Ratios
│   ├── ratios-home.html (Chapter landing page)
│   ├── learn-ratios.html (Concept from first principles)
│   ├── real-world-ratios.html (Real examples)
│   └── practice-ratios.html (Problems from PDF)
│
└── Future Chapters...
    ├── Chapter 3: Proportions
    ├── Chapter 4: Percentages
    └── etc.
```

## Homepage Design (index.html)

### Option 1: Chapter Cards (RECOMMENDED)

```
┌─────────────────────────────────────────┐
│         대박 Daebak                      │
│    6th Grade Math • Study Like an Idol  │
└─────────────────────────────────────────┘

┌──────────────────┐  ┌──────────────────┐
│  📐 Chapter 1    │  │  🔢 Chapter 2    │
│     AREA         │  │     RATIOS       │
│                  │  │                  │
│  ✓ 4 Formulas    │  │  • Comparisons   │
│  ✓ 75 Problems   │  │  • Scaling       │
│  ✓ Real Examples │  │  • Simplifying   │
│                  │  │                  │
│  [Start →]       │  │  [Start →]       │
└──────────────────┘  └──────────────────┘

┌──────────────────┐  ┌──────────────────┐
│  📊 Chapter 3    │  │  💯 Chapter 4    │
│   PROPORTIONS    │  │   PERCENTAGES    │
│   (Coming Soon)  │  │   (Coming Soon)  │
└──────────────────┘  └──────────────────┘
```

### Option 2: Dropdown Navigation

```
Nav Bar:
┌────────────────────────────────────────────┐
│ 대박 Daebak  [Chapters ▼] [About] [Help]  │
└────────────────────────────────────────────┘
              │
              ├─ 📐 Chapter 1: Area
              ├─ 🔢 Chapter 2: Ratios
              ├─ 📊 Chapter 3: Proportions (soon)
              └─ 💯 Chapter 4: Percentages (soon)
```

### Option 3: Sidebar Navigation

```
┌──────┬────────────────────────────┐
│ 📚   │                            │
│ CH1  │   Main Content Area        │
│ Area │                            │
│      │                            │
│ 🔢   │                            │
│ CH2  │                            │
│Ratio │                            │
│      │                            │
│ 📊   │                            │
│ CH3  │                            │
│(soon)│                            │
└──────┴────────────────────────────┘
```

## Chapter Landing Pages

### area-home.html (Example)

```
┌─────────────────────────────────────────┐
│  📐 Chapter 1: Area of Shapes           │
│  Master all 4 area formulas             │
└─────────────────────────────────────────┘

🎯 LEARNING PATH

1. [💡 Learn WHY Formulas Work]
   Understand from first principles
   
2. [🌍 See Real-World Examples]
   15 visual examples with explanations
   
3. [📝 Practice Problems]
   Choose your level:
   • Main Practice (10 problems)
   • Extra Practice (15 problems)
   • Evening Practice (40 problems)
   • Olympiad Challenge (10 hard)
   
4. [📄 Download PDF Cheat Sheet]

📊 YOUR PROGRESS
• Formulas Learned: 0/4
• Problems Solved: 0/75
• Mastery Level: Beginner
```

### ratios-home.html (Example)

```
┌─────────────────────────────────────────┐
│  🔢 Chapter 2: Ratios                   │
│  Compare quantities and scale recipes   │
└─────────────────────────────────────────┘

🎯 LEARNING PATH

1. [💡 What ARE Ratios?]
   Build understanding from scratch
   
2. [🌍 Ratios in Real Life]
   Recipes, paint mixing, sports
   
3. [📝 Practice Problems]
   • Fruit bowls & recipes
   • Paint mixing
   • Scaling up and down
   
📊 YOUR PROGRESS
• Concepts Mastered: 0/5
• Problems Solved: 0/20
• Mastery Level: Not Started
```

## Implementation Plan

### Phase 1: Restructure Homepage
- [ ] Create new index.html with chapter cards
- [ ] Add navigation system
- [ ] Keep hero section but simplify
- [ ] Add "Learning Path" section

### Phase 2: Create Chapter Landing Pages
- [ ] area-home.html (organize all area content)
- [ ] ratios-home.html (new ratios chapter)
- [ ] Clear learning path for each chapter
- [ ] Progress tracking (optional)

### Phase 3: Update Navigation
- [ ] Add breadcrumbs (Home > Chapter 1 > Practice)
- [ ] Consistent "Back to Chapter" buttons
- [ ] Next/Previous chapter navigation

### Phase 4: Enhance User Experience
- [ ] Progress indicators
- [ ] "Recommended Next" suggestions
- [ ] Quick links to practice
- [ ] Search functionality (future)

## Recommended Approach: OPTION 1 (Chapter Cards)

### Why Chapter Cards?
✅ Visual and engaging
✅ Clear learning path
✅ Easy to add new chapters
✅ Mobile-friendly
✅ Shows progress at a glance
✅ K-pop theme fits card design

### Design Mockup

```css
.chapter-card {
  - Large icon (📐, 🔢, etc.)
  - Chapter number and title
  - Brief description
  - Key features (bullet points)
  - Progress indicator
  - "Start" button
  - Hover effect (lift up, glow)
}

.chapter-card.completed {
  - Green checkmark
  - "Review" instead of "Start"
}

.chapter-card.locked {
  - Grayed out
  - "Coming Soon" badge
  - No click action
}
```

## File Organization

### Current (Messy)
```
/
├── index.html (everything!)
├── learn.html
├── practice.html
├── practice-extra.html
├── practice-evening.html
├── practice-olympiad.html
├── real-world.html
└── ...
```

### Proposed (Clean)
```
/
├── index.html (chapter overview)
│
├── /area/
│   ├── index.html (area-home)
│   ├── learn.html
│   ├── real-world.html
│   ├── practice.html
│   ├── practice-extra.html
│   ├── practice-evening.html
│   ├── practice-olympiad.html
│   └── assets/
│       └── area-cheat-sheet.pdf
│
├── /ratios/
│   ├── index.html (ratios-home)
│   ├── learn.html
│   ├── real-world.html
│   └── practice.html
│
└── /assets/
    └── (shared resources)
```

## Migration Strategy

### Option A: Keep Current URLs (Backward Compatible)
- Keep files at root level
- Add new chapter landing pages
- Update internal links
- Old bookmarks still work

### Option B: Full Reorganization (Clean Slate)
- Move files into folders
- Set up redirects
- Update all links
- Better long-term structure

**RECOMMENDATION: Option A for now, Option B later**

## Next Steps

1. **Get your approval** on structure
2. **Create new index.html** with chapter cards
3. **Create area-home.html** (consolidate area content)
4. **Create ratios-home.html** (new chapter)
5. **Update navigation** across all pages
6. **Test all links**
7. **Deploy**

## Questions for You

1. **Which navigation style?** (Cards, Dropdown, or Sidebar)
2. **Keep current URLs or reorganize?** (Backward compatible vs clean)
3. **Add progress tracking?** (Nice to have but more complex)
4. **Chapter numbering?** (Chapter 1, 2, 3 or just titles?)
5. **Lock future chapters?** (Show as "coming soon" or hide completely?)

---

**My Recommendation:**
- ✅ Chapter Cards on homepage (Option 1)
- ✅ Keep current URLs (backward compatible)
- ✅ Simple progress indicators (problems solved)
- ✅ Number chapters (Chapter 1, 2, 3...)
- ✅ Show future chapters as "Coming Soon"

This gives us a clean, scalable structure that's easy to expand! 🚀
