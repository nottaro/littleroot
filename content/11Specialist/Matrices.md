---
title: Matrices
css: jacaranda
---

#ongoing 

- Matrices are a way of graphically storing certain data.

$$\begin{bmatrix} x \\ y \end{bmatrix}$$


## Matrix Addition

$$\begin{bmatrix} a & b \\ c & d \end{bmatrix} + \begin{bmatrix} w & x \\ y & z \end{bmatrix} = \begin{bmatrix} w+a & x+b \\ y+c & z+d \end{bmatrix}$$ 
- 2 matrices can be added if and only if their dimensions are the same

## Matrix Multiplication
- 2 matrices can be multiplied if and only if the number of columns on the first matrix is equal to the number of rows on the second matrix

$$\begin{bmatrix}  
a & b \\  
c & d   
\end{bmatrix} \times

\begin{bmatrix}  
w & x \\  
y & z  
\end{bmatrix} = 

\begin{bmatrix}  
aw+by & ax+bz \\  
cw+dy & cx+dz  
\end{bmatrix}$$

## The Identity Matrix
- Basically the matrix equivalent of 1
- Any matrix times this is equal to the same matrix
- A matrix where everything is 0, but the main leading diagonal is "1"s
$$I=\begin{bmatrix}

1 & 0 \\
0 & 1

\end{bmatrix}
$$

## The Inverse Matrix
- The determinant of a matrix 
  $$X=\begin{bmatrix}  
a & b \\  
c & d   
\end{bmatrix}$$
- is as such: $\Delta = ad-bc$

-  The inverse of a matrix $X$ is:
$$X^{-1} = \frac{1}{ad-bc} \begin{bmatrix}  
d & -b \\  
-c & a   
\end{bmatrix}
$$
- $XX^{-1}$ is equal to the identity matrix $I$

