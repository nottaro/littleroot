---
title: Probability
enableToc: true
---

[go back](archive/11Subjects/11Methods.md)

- A measure of the likelihood of an event occurring
- $P(A)$ is the probability of A occurring
- Theoretical Probability: theory probability, e.g. 50% chance of getting a tails in a coin flip
$$\frac{P(A)}{number\ of\ possible\ results}$$
- Experimental Probability: Probability from results, e.g. from the results, you might only get a tails 48 times out of 100. See relative frequency.

### Set Notation
| Notation             | Meaning                                                 |
| -------------------- | ------------------------------------------------------- |
| A                    | Set of elements in A                                    |
| U                    | Universal set - all elements in consideration           |
| A' or $\overline{A}$ | Complement of A - Elements **not** in A                 |
| A$\cap$B             | **Intersection** of A and B - elements in both A and B  |
| A$\cup$B             | **Union** of A and B - elements in A **or** B (or both) |
| n(A)                 | Number of elements in A                                 |
| $\varnothing$        | Empty set                                               ||                                                         |

- n(A) can also be written as |A|

### Formulas
- P(B|A) is the probability of B given A has occurred
$$P(B|A)=\frac{P(B \cap A)}{P(A)}$$
- Relative frequency of A:
$$\frac{number\ of\ trials\ A\ occurs}{number\ of\ trials\ conducted} \approx P(A)$$
- Independence Test; An event is independent if: $$P(A\cap B)=P(A)\times P(B)$$
$$P(A|B)=P(A)$$
- Mutually Exclusive Events: 2 events are mutually exclusive (can't occur at the same time) if: $$P(A\cup B)=P(A)+P(B)$$$$P(A \cap B)=0$$ 
- Multiplication Rule: $$P(A \cap B)=P(A)\times P(B|A)$$
- Addition Rule
$$P(A \cup B)=P(A)+P(B)-P(A \cap B)$$
$$P(A \cap B)=P(A)+P(B)-P(A \cup B)$$
