#!/usr/bin/env python3
"""Validate main practice problems (original 10 from PDF)"""

print("=" * 80)
print("VALIDATING MAIN PRACTICE PROBLEMS (Original 10 from PDF)")
print("=" * 80)

problems = [
    ("P1", "Classroom whiteboard: 12 ft × 4 ft", 12*4, 48, "ft²"),
    ("P2", "Triangle: base 10 cm, height 6 cm", 0.5*10*6, 30, "cm²"),
    ("P3", "Parallelogram: base 9 in, height 5 in (slant 7 in ignored)", 9*5, 45, "in²"),
    ("P4", "Trapezoid: bases 6 ft & 10 ft, height 4 ft", 0.5*(6+10)*4, 32, "ft²"),
    ("P5", "Swimming pool: 24 m × 9.5 m", 24*9.5, 228, "m²"),
    ("P6", "Triangular road sign: base 14 in, height 12 in", 0.5*14*12, 84, "in²"),
    ("P7", "House: Rect(8×5) + Tri(½×8×3)", 8*5 + 0.5*8*3, 52, "m²"),
    ("P8", "L-shaped garden: Rect(6×10) + Rect(4×5)", 6*10 + 4*5, 80, "ft²"),
    ("P9", "Farmer's field: Trap bases 35m & 55m, height 20m", 0.5*(35+55)*20, 900, "m²"),
    ("P10", "Backwards: Area=72 cm², base=12 cm, find height", 72/12, 6, "cm"),
]

print("\nValidating each problem:\n")
for prob, desc, calc, expected, unit in problems:
    status = "✓ CORRECT" if abs(calc - expected) < 0.01 else f"✗ ERROR: got {calc}"
    print(f"{prob}: {desc}")
    print(f"      Calculation: {calc} {unit} (expected {expected}) {status}\n")

print("=" * 80)
print("ALL MAIN PRACTICE PROBLEMS VALIDATED!")
print("=" * 80)
