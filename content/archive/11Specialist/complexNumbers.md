---
title: Complex Numbers
tags:
  - notes
date: 09-11-2023
enableToc: true
---
[go back](archive/11Subjects/11Specialist.md)

- The set of complex numbers is $\mathbb{C}$
- $i$ is defined as an imaginary number

$$i = \sqrt{-1}$$
- Imagine $i$ is a variable
	- For instance, $3 \times i = 3i = \sqrt{9} \times \sqrt{-1}= \sqrt{-9}$
- Now allow addition and subtraction of imaginary numbers
$$(a+bi) + (c + di)=(a+c)+(b+d)i$$

- Now allow multiplication of imaginary numbers

$$(a+bi)(c+di)=ac+bci+bci+bdi^2=ac+2bci-bd$$

- The conjugate of an imaginary number $z$ is $\overline{z}$
	- the conjugate of $a+bi$ is $a-bi$
- To divide, multiply the numerator and denominator by the conjugate of the denominator, and simplify from there

### For an imaginary number $z = a + bi$
- The real component is $Re(z)=a$
- The imaginary component is $Im(z)=b$

### Argand Plane
- Imaginary numbers can be represented in a plane
- Here, the real component is represented as an x-coordinate
- The imaginary component is represented as a y-coordinate
- Multiplying the imaginary number by $i$ rotates it 90˚ anti-clockwise about the origin

## Going Rogue (Not in Course Content)
- In the 1970s, a small group of mathematicians made a discovery in the field of complex numbers, which must rank as one of the most startling, mysterious, and awe-inspiring in the history of mathematics
- Remember sequences, e.g. recursive formula for an arithmetic sequence, $T_1 = 2,\ T_{n+1} = T_n + 3$
- Think of a number, $n$ 
	- Square the number, and add the original number $n$
	- Square the result, and add the original number $n$
	- Square the result, and add the original number $n$
	- Repeat another 5 times
		- For $-2≤0≤0.25$, the number appears to approach a finite value
		- For $n=-1$, the result oscillates between 0 and $n$
		- For $1<n$, $n$ approaches infinity
	- So, for some values of $n$, e.g. 2, sequences of numbers which approach infinity are generated
	- For others, e.g. -1 or 0.2, sequences with finite values are generated
- The process we just used can be defined as $T_1, \ T_{n+1} = T_n^2 + T_1$
- **Exactly which values of $T_1$ give a sequence whose $T_n$ values remain small forever?**
	- For $-2≤0≤0.25$, the number appears to approach a finite value
- You can do the same thing with complex numbers