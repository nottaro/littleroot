---
title: Complex Numbers Part 2
tags:
  - notes
date: 13-11-2023
enableToc: true
---

[go back](12Subjects/12Specialist.md)

## Cartesian forms
- not covered, as it is from [year 11 notes](archive/11Specialist/complexNumbers.md)

## Factorisation of Polynomials
- A polynomial function is a sum of multiples of powers of a variable
- E.g. $P(x)=5x^7 - 4x^5 + 3x^4 - x^3 + x + 8$
- Degree/order of  a polynomial is used to refer to the highest power of any variable in the polynomial
- The degree/order of the polynomial above is 7, because 7 is the highest power
- Usually, you write polynomials in order of decreasing power
	- This is not set in stone, there are multiple ways to do it

### What this topic is about
- We already know the following about quadratic polynomials
- If a quadratic equation $ax^2 + bx + c =0$, has solutions $x=p$ and $x=q$, the LHS admits a factorisation - $a(x-p)(x-q)=0$
	- i.e. solutions correspond to linear factors of the polynomial
- This chapter extends this idea to higher degree polynomials

### Arithmetic with polynomials
- Polynomials can be added or subtracted by combining like terms and simplifying
- Polynomials can be multiplied using the distributive law
	- e.g. $(a+b)(c+d) = a(c+d) + b(c+d)$
- Polynomials can be divided using polynomial division

### Division with integers
 - Consider a positive integer $n$, e.g. 100, and a strictly smaller positive integer $p$, e.g. 23
 - 100 is not divisible by 23, so there is a remainder $r$ when 100 is divided by 23
 - Thus, $100=q \times 23 + r$
	 - $q$ must be the quotient
	 - $r$ must always be smaller than the number
- When a polynomial $P(x)$ is divided by a polynomial $D(x)$, the degree of the remainder $R(x)$ will be strictly smaller than the degree of $D(x)$

> [!info] Important Fact!
> 
> When a polynomial $P(x)$ is divided by a polynomial $D(x)$, the degree of the remainder $R(x)$ will be strictly smaller than the degree of $D(x)$
> 
> Thus, $P(x) = Q(x)D(x) + R(x)$, where $Q(x)$ is the quotient
> 
> Thus, $\frac{P(x)}{D(x)} = Q(x) + \frac{R(x)}{D(x)}$


- Compare with numerical division: when 100 is divided by 23, the remainder is 8, which is smaller than 23, and $100 = 4 \times 23 + 8$
- Thus, $\frac{100}{23}=4+ \frac{8}{23}$
- True algebraic fraction
	- Numerator has a lower degree than denominator
- Improper algebraic fraction
	- Numerator has a higher degree than denominator
- In certain later topics (i.e. using partial fractions for integration), it will be necessary to rewrite improper algebraic fractions in terms of proper ones
- If $P(x)$ and $(x-a)$ are polynomials then $P(x)=Q(x)(x-a) + r$
	- I.e. for any polynomials $P(x)$ and $(x-a)$, either $(x-a)$ is a factor of $P(x)$ or there is a polynomial multiple of $(x-a)$ that differs from $P(x)$ by a constant

## The Remainder Theorem and the Factor Theorem
- Remember, if $P(x)$ and $(x-a)$ are polynomials then $P(x)=Q(x)(x-a) + r$

> [!info] Remainder theorem: 
> 
> for a polynomial $P(x)$ and a number $a$, the remainder when $P(x)$ is divided by $(x-a)$ is $P(a)$

- Proof
	- Let $r$ be the remainder when $P(x)$ is divided by $x-a$
	- Thus, for some polynomial $Q(x) , \  P(x) = Q(x)(x-a) + r$
	- Hence, $P(x) = Q(a)(a-a)+r$, as required

> [!info] Factor Theorem
> 
> For a polynomial $P(x)$, $(x-a)$ is a factor of $P(x)$ if and only if $P(a) = 0$

- Proof 1
	- Suppose $(x-a)$ is a factor of $P(x)$
	- Then the remainder when $P(x)$ is divided by $(x-a)$ is 0
	- Thus, by the remainder theorem, $P(a) = 0$
- Proof 2
	- Conversely, suppose that $P(a) = 0$
	- Then the remainder when $P(x)$ is divided by $(x-a)$ is 0
	- Hence, $(x-a)$ is a factor of $P(x)$

## Other stuff which is really useful to know (but not required in course content)

### Theorem (the Fundamental Theorem of Algebra)
- Every real (real coefficients) polynomial equation of degree $n$ has exactly $n$ solutions (some of which may be repeated or complex)
- Every real polynomial $P(x)$ of degree $n ≥ 1$ can be factorised as a product of $n$ linear factors $a(x-a_{1}) (x-a_{2}) \dots(x-a_{n})$ where the $a_{i}$ are the zeroes of $P(x)$

### Theorem (IMPORTANT!)
- If $z$ is a complex solution to a polynomial equation (with real coefficients), then so is $\overline{z}$ 
- Thus, complex solutions always come in conjugate pairs, so the total number of complex solutions (with non-zero imaginary part) is always even
- It also means that the total number of linear factors involving complex numbers is even
- Thus, **any real polynomial of odd degree with have at least 1 real solution**
- Odd degree: starts up/down and finishes down/up
- Even degree: starts up/down and finishes up/down

### Theorem (Multiplicity of factors)
- Suppose that $(x-a)^n$ is a factor of $P(x)$. Then
	- If $n$ is odd, the graph of $y=P(x)$ cross the x-axis at $a$
	- If $n$ is even, the graph of $y=P(x)$ 'touches' but does not cross the x-axis at $a$

## Polar Form of Complex numbers
- An exam question says
$$\text{Evaluate: } (2+3i) \star (1-7i)$$

- The symbol $\star$ could be $+,-, \div, \times$
- Addition and subtraction in this form are much easier than multiplication and division
- Polar form is most natural form for multiplying/dividing complex numbers, or raising powers to complex numbers
- Multiplying by $i$ rotates the point 90˚ anticlockwise about the origin on the Argand plane
- When multiplying by a complex number $z=a+bi$, the things determining the corresponding geometric transformation are
	- the distance $\mid z\mid$ from the origin (the magnitude/modulus)
	- the angle $\theta$ from the positive real axis (the argument)
- How to rewrite $z$ so that $\mid z \mid$ and $\theta$ are explicit
	- $\cos \theta = \frac{a}{\mid z \mid}$
		- $a=\cos \theta \mid z\mid$
	- $\sin \theta= \frac{b}{\mid z \mid}$ 
		- $b=\sin \theta \mid z\mid$
	- $\theta = \tan \frac{b}{a}$

$$z= \mid z\mid \cos \theta + i \mid z\mid \sin \theta=\mid z\mid(\cos \theta + i \sin \theta)= \mid z\mid \text{cis } \theta$$

- where $\mid z\mid$ is the magnitude/modulus of $z$, i.e. the distance from the origin
- $\theta$ is the principal argument (angle between the vector for $z$ and the real axis) and $- \pi < \theta ≤ \pi$

### Complex Conjugates in polar form

Recall for a complex number, $z=a + bi$

The complex conjugate is $\overline z = a-bi$

Then, if $z = r \text{ cis } \theta$, $\overline z = r \text{ cis } (- \theta)$

### Multiplication of Complex Numbers

$$r_{1} \text{ cis } \theta_{1} \times r_{2} \text{ cis } \theta_{2 } = r_{1} r_{2} \text{ cis }(\theta_{1}+\theta_{2})$$

#### Proof
$$\begin{align}
LHS = r_{1} \text{ cis } \alpha \times r_{2 } \text{ cis } \beta
\\ \\
= r_{1 } r_{2} [(\cos \beta + i \sin \beta)(\cos \alpha + i \sin \alpha )] \\ \\
= r_{1} r_{2}( \cos \alpha \cos \beta + i \cos \alpha \sin \beta + i \sin \alpha + \cos \beta + i^2 \sin \alpha \sin \beta) \\
 \\
= r_{1} r_{2 } (\cos \alpha \cos \beta - \sin \alpha \sin \beta + i (\sin \alpha \cos \beta + \cos \alpha \sin \beta)) \\ \\
= r_{1} r_{2}[(\cos \alpha + \beta) + i \sin (\alpha + \beta)] \\ \\
= r_{1} r_{2} \text{ cis } (\alpha + \beta)
\end{align}

$$
### Division of Complex Numbers

$$r_{1} \text{ cis } \theta_{1} \div r_{2} \text{ cis } \theta_{2}= \frac{r_{1}}{r_{2}}  \text{ cis }(\theta_{1}-\theta_{2})$$

## Regions in the Complex Plane

### Set Notation
Analogue with real numbers:
$\{x:1≤x<3,\ x \in \mathbb{R}\}$

i.e. all values of x such that those conditions are true

#### for complex numbers:

$z: |z| = 4,\ z \in \mathbb{C}$
- circle centred at the origin, radius of 4
- some people call this the locus of $|z|=4$

$z: |z| ≤ 4,\ z \in \mathbb{C}$
- Just shade the interior of the circle to show that the numbers inside the circle are also included

$z: |z| < 4,\ z \in \mathbb{C}$
- Show the circumference as a dotted line
- Shade the interior of the circle to show that the numbers inside the circle are also included

Represent $z: \text{arg } z = \frac{\pi}{6}$
- Make a line where the argument is $\frac{\pi}{6}$ radians
- Circle the origin, because $0+0i$ is excluded from the set because its argument is undefined

Sometimes the region represented by a set isn't obvious
$\{z: |z+8| = |z-4i|\}$
- One possible strategy: think of coordinate geometry, i.e. represent this image as x and y coordinates then rearrange units until it is in a suitable plot-able form
- Alternatively, observe that $|z-a|$ is the distance between the complex numbers $z$ and $a$

## $n$th roots of 1
In the real world:
$x^2 = 1, x = 1,-1$
$x^3 = 1, x = 1$
$x^4 = 1, x = 1,-1$
$x^5 = 1, x=1$
$x^6 = 1, x = 1,-1$
etc etc, alternating

However, $x^4 = 1$ has 4 solutions (1, -1, i, -i)

Consider $x^3=1$ which has just 1 real solution

We can solve using polynomial techniques, i.e. rewrite as $x^3 - 1=0$ and factorise LHS

$$(x-1)(x^2+x+1)=0$$

Using quadratic formula:
$$x= - \frac{1}{2} + \frac{\sqrt3}{2}i \text{ and } - \frac{1}{2} - \frac{\sqrt3}{2}i $$

**Theorem: including complex numbers, there are $n$ $nth$ solutions of 1. They have modulus 1 and are spaced at angular intervals of $\frac{2\pi}{n}$**

**More general theorem**

Given a non-zero complex number $z$, the total number of $n$th roots of $z$ (including complex roots) is $n$

The roots al have the same modulus, and are spaced at angular intervals of $\frac{2\pi}{n}$, i.e. form the vertices of a regular n-gon


### De Moirves Theorem

Recall that in polar form: 

$$r_{1} \text{ cis } \theta_{1} \times r_{2}\text{ cis } \theta_{2} = r_{1}r_{2} \text{ cis } (\theta_{1} + \theta_{2}) $$

Theorem: For any integer $n$ and complex number $r \text{ cis } \theta$

$$(r \text{ cis } \theta)^n = r^n \text{ cis } (n \theta)$$

