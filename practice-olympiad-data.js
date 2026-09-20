// Olympiad problems data
const olympiadProblems = [
  {
    num: 1,
    diff: 'hard',
    title: 'Triangle Inscribed in Rectangle',
    question: 'Rectangle ABCD is 12 cm × 8 cm. M is the midpoint of BC and N is the midpoint of CD. Find the area of triangle AMN.',
    hint: 'Find the area of the rectangle, then subtract the three corner triangles that are NOT part of triangle AMN.',
    answer: 36,
    unit: 'cm²',
    explanation: 'Rectangle area = 96 cm². Triangle ABM = ½×12×4 = 24 cm². Triangle MNC = ½×6×4 = 12 cm². Triangle AND = ½×8×6 = 24 cm². Area AMN = 96 - 24 - 12 - 24 = <strong>36 cm²</strong>'
  },
  {
    num: 2,
    diff: 'hard',
    title: 'Parallel Line Division',
    question: 'A triangle has base 20 cm and height 15 cm (area = 150 cm²). A line parallel to the base divides it so the top piece = ¼ of total area. How far from the apex is the line?',
    hint: 'Similar triangles: if area ratio = 1/4, then linear scale = √(1/4) = 1/2',
    answer: 7.5,
    unit: 'cm',
    explanation: 'Top triangle area = ¼ × 150 = 37.5 cm². For similar triangles, if area ratio = 1/4, linear scale = √(1/4) = 1/2. Height of small triangle = ½ × 15 = <strong>7.5 cm</strong>'
  },
  {
    num: 3,
    diff: 'hard',
    title: 'The Plus/Cross Shape',
    question: 'Two rectangles form a plus sign. Horizontal: 20 cm × 6 cm. Vertical: 6 cm × 20 cm. They share a 6 cm × 6 cm square in the centre. What is the total area of the cross?',
    hint: 'Add both rectangles, but subtract the overlap (the center square was counted twice).',
    answer: 204,
    unit: 'cm²',
    explanation: 'Horizontal = 20 × 6 = 120 cm². Vertical = 6 × 20 = 120 cm². Overlap = 6 × 6 = 36 cm². Total = 120 + 120 - 36 = <strong>204 cm²</strong>'
  },
  {
    num: 4,
    diff: 'hard',
    title: 'L-Tromino: Perimeter → Area',
    question: 'Three squares arranged in an L-shape (2 on the bottom, 1 stacked on the left). The total perimeter is 56 cm. What is the total area?',
    hint: 'Count the exposed edges carefully. The L-shape has 8 sides of length s.',
    answer: 147,
    unit: 'cm²',
    explanation: 'The L-shape has 8 exposed sides. 8s = 56, so s = 7 cm. Area of 3 squares = 3 × 7² = 3 × 49 = <strong>147 cm²</strong>'
  },
  {
    num: 5,
    diff: 'hard',
    title: 'Pick\'s Theorem',
    question: 'A polygon on dot paper has 8 interior dots and 12 boundary dots. Using Pick\'s Theorem: Area = I + B/2 − 1. Find the area.',
    hint: 'I = interior dots, B = boundary dots. Just plug into the formula!',
    answer: 13,
    unit: 'sq units',
    explanation: 'Area = I + B/2 - 1 = 8 + 12/2 - 1 = 8 + 6 - 1 = <strong>13 square units</strong>'
  },
  {
    num: 6,
    diff: 'hard',
    title: 'Union of Overlapping Rectangles',
    question: 'Rectangle A is 10 cm × 6 cm. Rectangle B is 8 cm × 5 cm. They overlap in a 3 cm × 4 cm region. What total area do they cover (no double-counting)?',
    hint: 'Use inclusion-exclusion: A ∪ B = A + B - (A ∩ B)',
    answer: 88,
    unit: 'cm²',
    explanation: 'Area A = 10 × 6 = 60 cm². Area B = 8 × 5 = 40 cm². Overlap = 3 × 4 = 12 cm². Total = 60 + 40 - 12 = <strong>88 cm²</strong>'
  },
  {
    num: 7,
    diff: 'hard',
    title: 'Algebra + Trapezoid',
    question: 'A trapezoid has parallel sides where one is 3 cm longer than the other and a height of 8 cm. If the total area is 100 cm², find the length of the shorter side.',
    hint: 'Let shorter side = x. Set up equation: ½ × (x + x+3) × 8 = 100',
    answer: 11,
    unit: 'cm',
    explanation: 'Let shorter = x, longer = x+3. Area = ½ × (x + x+3) × 8 = 100. Simplify: 4(2x+3) = 100, so 2x+3 = 25, thus 2x = 22, x = <strong>11 cm</strong>'
  },
  {
    num: 8,
    diff: 'hard',
    title: 'Rectangle from Perimeter + Constraint',
    question: 'A rectangle has perimeter 44 cm and its length is 4 cm more than its width. Find the area.',
    hint: 'Perimeter = 2(l+w) = 44, so l+w = 22. Also l = w+4. Solve for w, then find area.',
    answer: 117,
    unit: 'cm²',
    explanation: 'l + w = 22 and l = w+4. Substitute: (w+4) + w = 22, so 2w = 18, w = 9. Length = 13. Area = 9 × 13 = <strong>117 cm²</strong>'
  },
  {
    num: 9,
    diff: 'hard',
    title: 'Area on a Coordinate Grid',
    question: 'Triangle ABC has vertices A(0,0), B(8,2), C(3,7). Use: Area = ½|x_A(y_B−y_C) + x_B(y_C−y_A) + x_C(y_A−y_B)|',
    hint: 'Carefully plug in the coordinates. Watch the signs!',
    answer: 25,
    unit: 'sq units',
    explanation: '½|0×(2-7) + 8×(7-0) + 3×(0-2)| = ½|0 + 56 - 6| = ½ × 50 = <strong>25 square units</strong>'
  },
  {
    num: 10,
    diff: 'hard',
    title: 'Point Inside a Parallelogram',
    question: 'Parallelogram ABCD has area 240 cm². P lies on diagonal AC with AP = ⅓ of AC. Find the area of triangle ABP.',
    hint: 'Diagonal AC divides parallelogram into 2 equal triangles. Triangle ABP shares the same height from B as triangle ABC.',
    answer: 40,
    unit: 'cm²',
    explanation: 'Triangle ABC = 240 ÷ 2 = 120 cm². Triangles ABP and ABC share vertex B with same height. Area ratio = base ratio = AP/AC = 1/3. Area(ABP) = 120 × (1/3) = <strong>40 cm²</strong>'
  }
];
