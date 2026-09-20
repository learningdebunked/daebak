// Ratios Practice Problems - All validated
const ratiosProblems = [
  {
    id: 1,
    difficulty: 'easy',
    title: 'Fruit Bowls - Part A',
    question: 'You need 8 strawberries and 12 raspberries to make 2 fruit bowls. How many strawberries do you need for 4 fruit bowls?',
    context: '🍓 Strawberries: 8 for 2 bowls<br>🫐 Raspberries: 12 for 2 bowls',
    answer: 16,
    unit: 'strawberries',
    explanation: `
      <strong>🤔 Think First:</strong> What's the relationship?<br><br>
      
      <strong>Step 1: Find per-bowl amount</strong><br>
      • 2 bowls need 8 strawberries<br>
      • 1 bowl needs: 8 ÷ 2 = 4 strawberries<br><br>
      
      <strong>Step 2: Scale up</strong><br>
      • We need 4 bowls (double the original 2)<br>
      • 4 bowls need: 4 × 4 = 16 strawberries<br><br>
      
      <strong>Why this works:</strong> The ratio stays constant! When we double the bowls (2 → 4), 
      we double the strawberries (8 → 16). The relationship 4 strawberries per bowl never changes.<br><br>
      
      <strong>✓ Check:</strong> Does 16 ÷ 4 = 4 strawberries per bowl? YES! ✓
    `,
    hint: 'First find how many strawberries are needed for 1 bowl, then multiply by 4.'
  },
  {
    id: 2,
    difficulty: 'easy',
    title: 'Fruit Bowls - Part B',
    question: 'Using the same recipe (8 strawberries and 12 raspberries for 2 bowls), how many strawberries do you need for 6 fruit bowls?',
    context: '🍓 Strawberries: 8 for 2 bowls<br>🫐 Raspberries: 12 for 2 bowls',
    answer: 24,
    unit: 'strawberries',
    explanation: `
      <strong>🤔 Think First:</strong> We're tripling the recipe!<br><br>
      
      <strong>Step 1: Find per-bowl amount</strong><br>
      • 1 bowl needs: 8 ÷ 2 = 4 strawberries<br><br>
      
      <strong>Step 2: Scale up to 6 bowls</strong><br>
      • 6 bowls need: 4 × 6 = 24 strawberries<br><br>
      
      <strong>Pattern recognition:</strong><br>
      • 2 bowls → 8 strawberries<br>
      • 4 bowls → 16 strawberries (doubled)<br>
      • 6 bowls → 24 strawberries (tripled)<br><br>
      
      <strong>Why this works:</strong> We're multiplying BOTH sides of the ratio by 3.
      The ratio 8:12 becomes 24:36 (for 6 bowls), but the relationship stays the same: 2:3 simplified.<br><br>
      
      <strong>✓ Check:</strong> 24 ÷ 6 = 4 strawberries per bowl ✓
    `,
    hint: 'You found 1 bowl needs 4 strawberries. What about 6 bowls?'
  },
  {
    id: 3,
    difficulty: 'medium',
    title: 'Fruit Bowls - Part C',
    question: 'If you have 16 strawberries, how many fruit bowls can you make? (Remember: 8 strawberries and 12 raspberries make 2 bowls)',
    context: '🍓 You have: 16 strawberries<br>Recipe: 8 strawberries + 12 raspberries = 2 bowls',
    answer: 4,
    unit: 'fruit bowls',
    explanation: `
      <strong>🤔 Think First:</strong> Working backwards from ingredients to bowls!<br><br>
      
      <strong>Step 1: Find per-bowl amount</strong><br>
      • 1 bowl needs: 8 ÷ 2 = 4 strawberries<br><br>
      
      <strong>Step 2: Divide what you have</strong><br>
      • You have: 16 strawberries<br>
      • Number of bowls: 16 ÷ 4 = 4 bowls<br><br>
      
      <strong>Why this works:</strong> We're using division to "undo" the multiplication. 
      If each bowl needs 4 strawberries, then 16 strawberries make exactly 4 bowls.<br><br>
      
      <strong>Alternative thinking:</strong><br>
      • Original recipe: 8 strawberries = 2 bowls<br>
      • You have double: 16 strawberries = double the bowls = 4 bowls<br><br>
      
      <strong>✓ Check:</strong> 4 bowls × 4 strawberries per bowl = 16 strawberries ✓
    `,
    hint: 'If 1 bowl needs 4 strawberries, how many bowls can you make with 16?'
  },
  {
    id: 4,
    difficulty: 'medium',
    title: 'Fruit Bowls - Part D',
    question: 'Does 60 raspberries make exactly 8 fruit bowls? Answer YES or NO.',
    context: 'Recipe: 8 strawberries + 12 raspberries = 2 bowls<br>Question: 60 raspberries = 8 bowls?',
    answer: 'NO',
    unit: '',
    explanation: `
      <strong>🤔 Think First:</strong> Let's check if the ratio works!<br><br>
      
      <strong>Step 1: Find per-bowl raspberries</strong><br>
      • 2 bowls need: 12 raspberries<br>
      • 1 bowl needs: 12 ÷ 2 = 6 raspberries<br><br>
      
      <strong>Step 2: Calculate for 8 bowls</strong><br>
      • 8 bowls need: 6 × 8 = 48 raspberries<br><br>
      
      <strong>Step 3: Compare</strong><br>
      • Needed: 48 raspberries<br>
      • Given: 60 raspberries<br>
      • 60 ≠ 48, so <strong>NO, it's incorrect!</strong><br><br>
      
      <strong>Why it's wrong:</strong> 60 raspberries would make 60 ÷ 6 = 10 bowls, not 8.<br><br>
      
      <strong>Common mistake:</strong> Don't just guess! Always calculate the exact amount needed 
      and compare. Ratios must be precise to maintain the correct "recipe."<br><br>
      
      <strong>✓ Answer: NO</strong> (need 48, not 60)
    `,
    hint: 'Calculate how many raspberries 8 bowls actually need, then compare to 60.'
  },
  {
    id: 5,
    difficulty: 'easy',
    title: 'Salad Recipe - Part A',
    question: 'A salad recipe uses 2 cucumbers and 4 carrots to make 8 salad bowls. How many carrots do you need for 16 salad bowls?',
    context: '🥒 Cucumbers: 2 for 8 bowls<br>🥕 Carrots: 4 for 8 bowls',
    answer: 8,
    unit: 'carrots',
    explanation: `
      <strong>🤔 Think First:</strong> We're doubling the recipe!<br><br>
      
      <strong>Step 1: Find per-bowl amount</strong><br>
      • 8 bowls need: 4 carrots<br>
      • 1 bowl needs: 4 ÷ 8 = 0.5 carrots (or ½ carrot)<br><br>
      
      <strong>Step 2: Scale up to 16 bowls</strong><br>
      • 16 bowls need: 0.5 × 16 = 8 carrots<br><br>
      
      <strong>Pattern recognition:</strong><br>
      • 8 bowls → 4 carrots<br>
      • 16 bowls → 8 carrots (doubled!)<br><br>
      
      <strong>Why this works:</strong> When we double the number of bowls (8 → 16), 
      we must double ALL ingredients to keep the same ratio. The relationship stays constant.<br><br>
      
      <strong>✓ Check:</strong> 8 carrots ÷ 16 bowls = 0.5 carrots per bowl ✓
    `,
    hint: 'If 8 bowls need 4 carrots, what do 16 bowls need?'
  },
  {
    id: 6,
    difficulty: 'easy',
    title: 'Salad Recipe - Part B',
    question: 'Using the same recipe (2 cucumbers and 4 carrots for 8 bowls), how many carrots for 24 salad bowls?',
    context: '🥒 Cucumbers: 2 for 8 bowls<br>🥕 Carrots: 4 for 8 bowls',
    answer: 12,
    unit: 'carrots',
    explanation: `
      <strong>🤔 Think First:</strong> We're tripling the recipe!<br><br>
      
      <strong>Step 1: Find per-bowl amount</strong><br>
      • 1 bowl needs: 4 ÷ 8 = 0.5 carrots<br><br>
      
      <strong>Step 2: Scale up to 24 bowls</strong><br>
      • 24 bowls need: 0.5 × 24 = 12 carrots<br><br>
      
      <strong>Alternative method (scaling):</strong><br>
      • 8 bowls → 4 carrots<br>
      • 24 bowls = 3 × 8 bowls<br>
      • So we need: 3 × 4 = 12 carrots<br><br>
      
      <strong>Why this works:</strong> The ratio of carrots to bowls stays constant at 0.5:1 
      (or 1:2 simplified). No matter how many bowls we make, each bowl needs exactly ½ carrot.<br><br>
      
      <strong>✓ Check:</strong> 12 ÷ 24 = 0.5 carrots per bowl ✓
    `,
    hint: 'Find how many carrots 1 bowl needs, then multiply by 24.'
  },
  {
    id: 7,
    difficulty: 'medium',
    title: 'Salad Recipe - Part C',
    question: 'If you use 10 cucumbers, how many salad bowls can you make? (Recipe: 2 cucumbers + 4 carrots = 8 bowls)',
    context: '🥒 You have: 10 cucumbers<br>Recipe: 2 cucumbers + 4 carrots = 8 bowls',
    answer: 40,
    unit: 'salad bowls',
    explanation: `
      <strong>🤔 Think First:</strong> Working backwards from cucumbers to bowls!<br><br>
      
      <strong>Step 1: Find per-bowl cucumbers</strong><br>
      • 8 bowls need: 2 cucumbers<br>
      • 1 bowl needs: 2 ÷ 8 = 0.25 cucumbers (or ¼ cucumber)<br><br>
      
      <strong>Step 2: Calculate bowls from 10 cucumbers</strong><br>
      • You have: 10 cucumbers<br>
      • Number of bowls: 10 ÷ 0.25 = 40 bowls<br><br>
      
      <strong>Alternative method (ratio scaling):</strong><br>
      • Original: 2 cucumbers = 8 bowls<br>
      • You have 5 times more cucumbers (10 ÷ 2 = 5)<br>
      • So you can make 5 times more bowls: 8 × 5 = 40 bowls<br><br>
      
      <strong>Why this works:</strong> The ratio 2:8 (cucumbers:bowls) simplifies to 1:4. 
      So for every 1 cucumber, you make 4 bowls. With 10 cucumbers: 10 × 4 = 40 bowls!<br><br>
      
      <strong>✓ Check:</strong> 40 bowls × 0.25 cucumbers per bowl = 10 cucumbers ✓
    `,
    hint: 'If 2 cucumbers make 8 bowls, how many bowls do 10 cucumbers make?'
  },
  {
    id: 8,
    difficulty: 'hard',
    title: 'Salad Recipe - Part D',
    question: 'Does 20 cucumbers make exactly 18 salad bowls? Answer YES or NO.',
    context: 'Recipe: 2 cucumbers + 4 carrots = 8 bowls<br>Question: 20 cucumbers = 18 bowls?',
    answer: 'NO',
    unit: '',
    explanation: `
      <strong>🤔 Think First:</strong> Let's verify the ratio!<br><br>
      
      <strong>Step 1: Find per-bowl cucumbers</strong><br>
      • 8 bowls need: 2 cucumbers<br>
      • 1 bowl needs: 2 ÷ 8 = 0.25 cucumbers<br><br>
      
      <strong>Step 2: Calculate for 18 bowls</strong><br>
      • 18 bowls need: 0.25 × 18 = 4.5 cucumbers<br><br>
      
      <strong>Step 3: Compare</strong><br>
      • Needed: 4.5 cucumbers<br>
      • Given: 20 cucumbers<br>
      • 20 ≠ 4.5, so <strong>NO, it's incorrect!</strong><br><br>
      
      <strong>What would 20 cucumbers actually make?</strong><br>
      • 20 cucumbers ÷ 0.25 per bowl = 80 bowls (not 18!)<br><br>
      
      <strong>Why it's wrong:</strong> 20 cucumbers is WAY more than needed for 18 bowls. 
      The ratio doesn't match at all.<br><br>
      
      <strong>Common mistake:</strong> Don't assume large numbers work together. 
      Always calculate the exact ratio!<br><br>
      
      <strong>✓ Answer: NO</strong> (need 4.5, not 20)
    `,
    hint: 'Calculate how many cucumbers 18 bowls actually need, then compare to 20.'
  },
  {
    id: 9,
    difficulty: 'medium',
    title: 'Sparkling Lemonade - Part A',
    question: 'A recipe uses 12 cups of lemonade and 16 cups of sparkling water. What is the ratio of sparkling water to lemonade in simplest form?',
    context: '🍋 Lemonade: 12 cups<br>💧 Sparkling water: 16 cups',
    answer: '4:3',
    unit: '',
    explanation: `
      <strong>🤔 Think First:</strong> We need to simplify the ratio!<br><br>
      
      <strong>Step 1: Write the ratio</strong><br>
      • Sparkling water : Lemonade<br>
      • 16 : 12<br><br>
      
      <strong>Step 2: Find common factor</strong><br>
      • What divides both 16 and 12?<br>
      • Greatest Common Factor (GCF) = 4<br><br>
      
      <strong>Step 3: Simplify</strong><br>
      • 16 ÷ 4 = 4<br>
      • 12 ÷ 4 = 3<br>
      • Simplified ratio: <strong>4:3</strong><br><br>
      
      <strong>What this means:</strong> For every 4 cups of sparkling water, you need 3 cups of lemonade. 
      This is easier to remember than 16:12!<br><br>
      
      <strong>Why simplify?</strong> The ratio 4:3 shows the same relationship as 16:12, 
      but with smaller numbers. It's like reducing a fraction: 16/12 = 4/3.<br><br>
      
      <strong>✓ Check:</strong> 4/3 = 1.333... and 16/12 = 1.333... Same ratio! ✓
    `,
    hint: 'Find the greatest common factor of 16 and 12, then divide both numbers by it.'
  },
  {
    id: 10,
    difficulty: 'medium',
    title: 'Sparkling Lemonade - Part B',
    question: 'Using the 4:3 ratio (sparkling water to lemonade), if you use 6 cups of lemonade, how many cups of sparkling water do you need?',
    context: 'Ratio: 4 cups sparkling water : 3 cups lemonade<br>You have: 6 cups lemonade',
    answer: 8,
    unit: 'cups',
    explanation: `
      <strong>🤔 Think First:</strong> We're scaling up the ratio!<br><br>
      
      <strong>Step 1: Understand the ratio</strong><br>
      • 4:3 means 4 cups water for every 3 cups lemonade<br><br>
      
      <strong>Step 2: Find the scale factor</strong><br>
      • Original lemonade: 3 cups<br>
      • New lemonade: 6 cups<br>
      • Scale factor: 6 ÷ 3 = 2 (doubled!)<br><br>
      
      <strong>Step 3: Scale the water too</strong><br>
      • Original water: 4 cups<br>
      • New water: 4 × 2 = 8 cups<br><br>
      
      <strong>Alternative method (proportion):</strong><br>
      • If 3 cups lemonade need 4 cups water<br>
      • Then 6 cups lemonade need: (4/3) × 6 = 8 cups water<br><br>
      
      <strong>Why this works:</strong> When we double the lemonade (3 → 6), 
      we must double the water (4 → 8) to keep the same ratio. 
      The relationship 4:3 stays constant!<br><br>
      
      <strong>✓ Check:</strong> 8:6 simplifies to 4:3 ✓
    `,
    hint: 'If 3 cups lemonade need 4 cups water, what do 6 cups lemonade need?'
  },
  {
    id: 11,
    difficulty: 'hard',
    title: 'Sparkling Lemonade - Part C',
    question: 'Using the 4:3 ratio (sparkling water to lemonade), if you use 4 cups of sparkling water, how many cups of lemonade do you need?',
    context: 'Ratio: 4 cups sparkling water : 3 cups lemonade<br>You have: 4 cups sparkling water',
    answer: 3,
    unit: 'cups',
    explanation: `
      <strong>🤔 Think First:</strong> This one is straightforward!<br><br>
      
      <strong>Step 1: Understand the ratio</strong><br>
      • 4:3 means 4 cups water : 3 cups lemonade<br><br>
      
      <strong>Step 2: Check what we have</strong><br>
      • We have exactly 4 cups of sparkling water<br>
      • This matches the ratio exactly!<br><br>
      
      <strong>Step 3: Find lemonade needed</strong><br>
      • For 4 cups water, we need 3 cups lemonade<br>
      • No scaling needed - we're using the base ratio!<br><br>
      
      <strong>Why this works:</strong> The ratio 4:3 already tells us: 
      "4 cups water needs 3 cups lemonade." Since we have exactly 4 cups water, 
      we need exactly 3 cups lemonade.<br><br>
      
      <strong>Key insight:</strong> When one side of the ratio matches exactly, 
      you can read the answer directly from the simplified ratio!<br><br>
      
      <strong>✓ Check:</strong> 4:3 is already in simplest form ✓
    `,
    hint: 'Look at the ratio 4:3. If you have 4 cups of water, how much lemonade?'
  }
];
