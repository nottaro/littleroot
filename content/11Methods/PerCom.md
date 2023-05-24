---
title: Permutations and Combinations
enableToc: true
---

# Permutations

-   ******n!****** is equal to $n\times(n-1)\times(n-2)\times(n-3)...\times2\times1$
-   When order is important
-   Think of it as arranging items
-   Notation is $^nP_r$
    -   Where we are arranging **r** objects from ****n**** objects
-   This equation can be written as:

$$ \frac{n!}{(n-r)!} $$

$$ ^nP_n=\frac{n!}{(n-n)!} =\frac{n!}{0!}=n! $$

-   Therefore, 0! is equal to 1
-   If we are replacing the items, then the equation is $n^r$
    -   E.g., if we have 5 digits, and we make a code of 3 digits, using those 5 digits (with repeating allowed), the amount of codes we can make is $5^3$
-   If we have 3 letters: A, B, C - We have 6 permutations of these letters
    -   3! = 6
    -   If we want to write them out, we have ABC, ACB, BAC, BCA, CAB, CBA
    -   Thus they have multiple permutations

If we are arranging ****n**** objects, and there are **p** repeating objects, **q** repeating objects and ****m**** repeating objects:

$$ Permutations = \frac{n!}{p!q!m!} $$

# Combinations

-   Order is not important
-   Here, we are selecting items
-   Notation is $^nC_r$, or $(^n_r)$
    -   We are selecting **r** objects from **n** objects
-   This equation can be written as:

$$ \frac{n!}{r!(n-r)!} $$

$$ ^nC_n=\frac{n!}{n!(n-n)!} =\frac{n!}{n!0!}=1 $$

-   Again, this confirms that 0! is equal to 1
-   If we have 3 letters: A, B, C - We have 1 combination of these letters
    -   If we want to write them out, we have ABC, ACB, BAC, BCA, CAB, CBA
    -   These all contain the same letters
    -   Therefore, it only has 1 combination
-   Can be used in probability
    -   E.g., how many ways are there where out of 10 boys and 5 girls, 1 boy is selected?
    -   $\frac{^{10}C_1}{^{15}C_1}=\frac{10}{15}=\frac{2}{3}$