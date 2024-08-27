---
title: SequencesandSeries
enableToc: true
tags: []
date: 2023-09-06
---

[go back](archive/11Subjects/11Methods.md)

### Recursive Formulas
- A sequence may be defined by a rule which enables each subsequent term to be found from the previous term
- This type of rule is called a recurrence relation, recursive formula, or an iterative rule

## Arithmetic Series
- A sequence in which each successive term is found by adding a fixed amount to the previous term is called an arithmetic sequence
- Recursive formula of $t_n = t_{n-1} + d$, where $d$ is the fixed amount
- The $n$th term of an arithmetic series is given by $t_n = a+(n-1)d$, where $a$ is the first term
- $d = t_{k+1}-t_k$
### The Arithmetic Mean
- If the numbers $a,c,b$ are consecutive terms of an arithmetic series:
	- $c-a = b-c$
	- $2c = a+b$
	- $c = \frac{a+b}{2}$
- Thus $c$ is the mean of terms $a,c,b$
### The Sum of an Arithmetic series
- The sum of the first $n$ terms is $S_n = \frac{n}{2} (2a + (n-1)d )$
- It can also be written as $\frac{n}{2}(a+l)$, where $l=t_n$

## Geometric Series
- A sequence in which each successive term is found by multiplying the previous term by a fixed amount
- Recursive formula of $t_n = rt_{n-1}$, where $r$ is the fixed amount
- The $n$th term of a geometric series is given by $t_n = ar^{n-1}$, where $a$ is the first term and $r$ is the common ratio of successive terms
- $r=\frac{t_n}{t_{n-1}}$

### Geometric Mean
1. If positive numbers $a,c,b$ are consecutive terms of a geometric sequence
2. $\frac{c}{a} = \frac{b}{c}$
3. $\therefore c=\sqrt{ab}$ 
4. Thus, $c=\sqrt{ab}$ is the geometric mean

### The Sum of a Geometric Series
- The sum of the first $n$ terms is $S_n = \frac{a(r^n -1)}{r-1}$
- For values such that $-1 < r < 1$, $S_n = \frac{a (1-r^n)}{1-r}$, by multiplying both the numerator and denominator by $-1$ 
- $a$ is the first term, $r$ is the ratio

### Sum to Infinity
- If a geometric sequence has a common ratio with magnitude less than 1, that is, if $−1 < r < 1$, then each successive term is closer to zero. 
- An infinite series $t_1 + t_2 + t_3 + ...$is said to be convergent if the sum of the first n terms, Sn, approaches a limiting value as n → ∞.
- This limit is called the sum to infinity of the series.

> [!info] Sum to infinity
> 
> If $-1<r<1$, then $S_\infty = \frac{a}{1-r}$
> 


## Expressing a recurring decimal as the ratio of 2 integers
- say we have a decimal $0. \overline{xy}$. 
- Write this as $0.xy + 0.00xy + 0.0000xy...$
- We have $a = 0.xy$ and $r=0.01$, giving $\frac{xy}{(1-r) \times 100}$
- If it's just $0. \overline{x}$, replace $r$ with $0.1$ , and $a$ with $0.x$, and work from there

## Random Questions
1. Find $1 + \frac{1}{5} + \frac{1}{25} + \frac{1}{125}...$

2. Find $1- \frac{2}{3} + \frac{4}{9} - \frac{8}{27}$

3. A rocket is launched into the air so that it reaches a height of 200 m in the first second. Each subsequent second it gains 6% less height. Find how high the rocket will climb.

4. A patient has an infection that, if it exceeds a certain level, will kill him. He is given a drug to inhibit the spread of the infection. The drug acts such that each day the level of infection only increases by 65% of the previous day’s level. The level of infection on the first day is 450, and the critical level is 1280. Will the infection kill him?

5. A man can walk 3 km in the first hour of a journey, but in each succeeding hour he walks half the distance covered in the preceding hour. Can he complete a journey of 6 km? Where does this problem cease to be realistic?

6. A computer virus acts in such a way that on the first day it blocks out one-third of the area of the screen of an infected computer. Each successive day it blocks out more of the screen: an area one-third of that it blocked the previous day. If this continues indefinitely, what percentage of the screen will eventually be blocked out?

7. Greg goes fishing every day for a week. On the first day he catches seven fish and each day he catches three more than the previous day. How many fish did he catch in total?

8. Find the sum of the first 16 multiples of 5

9. The number of people who go to see a movie over a period of a week follows an arithmetic sequence. On the first day only three people go to the movie, but on the sixth day 98 people go. Find the rule for the sequence and hence determine how many attend on the seventh day.

10. For an arithmetic sequence, find $t_6$ if $t_{10}$ = 31 and $t_{20}$ = 61.

11. For an arithmetic sequence with fourth term 7 and thirtieth term 85, find the values of a and d, and hence find the seventh term.

> [!note]+ Answers
> 
> 1. $\frac{5}{4} = 1.25$
> 2. $\frac{3}{5} = 0.6$
> 3. $\frac{10000}{3} = 3333.\overline{3}$
> 4. The final level of infection is $\frac{9000}{7} \approx 1285$. Thus, it will kill him, as it is over the critical level
> 5. The sum of this series is $6$ km. Thus, he can. It ceases to be realistic after 4 or 5 hours
> 6. $\frac{1}{2}= 0.5 = 50 \%$ of the screen
> 7. 112 Fish
> 8. 680
> 9. Rule: $T_n = 3 + (n-1)\times 19$. On the seventh day, 117 people attend
> 10. $T_6 = 19$
> 11. $T_7 = 19$


