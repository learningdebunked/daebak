#!/bin/bash

echo "=== NAVIGATION TESTING REPORT ==="
echo ""
echo "Testing all links in Phase 1 reorganization..."
echo ""

# Check if files exist
echo "1. FILE EXISTENCE CHECK:"
echo "   ✓ index.html (new homepage)" && [ -f index.html ] && echo "     EXISTS" || echo "     MISSING!"
echo "   ✓ area-home.html (Chapter 1)" && [ -f area-home.html ] && echo "     EXISTS" || echo "     MISSING!"
echo "   ✓ ratios-home.html (Chapter 2)" && [ -f ratios-home.html ] && echo "     EXISTS" || echo "     MISSING!"
echo ""

# Check links in index.html
echo "2. HOMEPAGE LINKS (index.html):"
grep -q 'href="area-home.html"' index.html && echo "   ✓ Link to area-home.html" || echo "   ✗ Missing area-home link"
grep -q 'href="ratios-home.html"' index.html && echo "   ✓ Link to ratios-home.html" || echo "   ✗ Missing ratios-home link"
echo ""

# Check links in area-home.html
echo "3. AREA CHAPTER LINKS (area-home.html):"
grep -q 'href="index.html"' area-home.html && echo "   ✓ Back to homepage" || echo "   ✗ Missing homepage link"
grep -q 'href="learn.html"' area-home.html && echo "   ✓ Link to learn.html" || echo "   ✗ Missing learn link"
grep -q 'href="real-world.html"' area-home.html && echo "   ✓ Link to real-world.html" || echo "   ✗ Missing real-world link"
grep -q 'href="practice.html"' area-home.html && echo "   ✓ Link to practice.html" || echo "   ✗ Missing practice link"
grep -q 'href="practice-extra.html"' area-home.html && echo "   ✓ Link to practice-extra.html" || echo "   ✗ Missing extra practice link"
grep -q 'href="practice-evening.html"' area-home.html && echo "   ✓ Link to practice-evening.html" || echo "   ✗ Missing evening practice link"
grep -q 'href="practice-olympiad.html"' area-home.html && echo "   ✓ Link to practice-olympiad.html" || echo "   ✗ Missing olympiad link"
grep -q 'href="assets/area-cheat-sheet.pdf"' area-home.html && echo "   ✓ Link to PDF" || echo "   ✗ Missing PDF link"
echo ""

# Check links in ratios-home.html
echo "4. RATIOS CHAPTER LINKS (ratios-home.html):"
grep -q 'href="index.html"' ratios-home.html && echo "   ✓ Back to homepage" || echo "   ✗ Missing homepage link"
grep -q 'href="area-home.html"' ratios-home.html && echo "   ✓ Link to Chapter 1" || echo "   ✗ Missing Chapter 1 link"
echo ""

# Check if existing practice files exist
echo "5. EXISTING PRACTICE FILES:"
[ -f learn.html ] && echo "   ✓ learn.html exists" || echo "   ✗ learn.html MISSING!"
[ -f real-world.html ] && echo "   ✓ real-world.html exists" || echo "   ✗ real-world.html MISSING!"
[ -f practice.html ] && echo "   ✓ practice.html exists" || echo "   ✗ practice.html MISSING!"
[ -f practice-extra.html ] && echo "   ✓ practice-extra.html exists" || echo "   ✗ practice-extra.html MISSING!"
[ -f practice-evening.html ] && echo "   ✓ practice-evening.html exists" || echo "   ✗ practice-evening.html MISSING!"
[ -f practice-olympiad.html ] && echo "   ✓ practice-olympiad.html exists" || echo "   ✗ practice-olympiad.html MISSING!"
[ -f assets/area-cheat-sheet.pdf ] && echo "   ✓ PDF exists" || echo "   ✗ PDF MISSING!"
echo ""

echo "=== TEST COMPLETE ==="
