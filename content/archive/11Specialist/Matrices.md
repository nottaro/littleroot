---
title: Matrices
date: 2023-09-06
tags: []
---
 [go back](archive/11Subjects/11Specialist.md)


- Matrices are a way of graphically storing certain data.

$$\begin{bmatrix} x \\ y \end{bmatrix}$$


## Matrix Addition

$$\begin{bmatrix} a & b \\ c & d \end{bmatrix} + \begin{bmatrix} w & x \\ y & z \end{bmatrix} = \begin{bmatrix} w+a & x+b \\ y+c & z+d \end{bmatrix}$$ 
- 2 matrices can be added if and only if their dimensions are the same

## Matrix Multiplication
- 2 matrices can be multiplied if and only if the number of columns on the first matrix is equal to the number of rows on the second matrix

$$\begin{bmatrix}  a & b \\  c & d   \end{bmatrix} \times \begin{bmatrix}  w & x \\  y & z  \end{bmatrix} = \begin{bmatrix} aw+by & ax+bz \\  cw+dy & cx+dz  \end{bmatrix}$$

## The Identity Matrix
- Basically the matrix equivalent of 1
- Any matrix times this is equal to the same matrix
- A matrix where everything is 0, but the main leading diagonal is "1"s
$$I=\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$$

## The Inverse Matrix
- The determinant of a matrix 
  $$X=\begin{bmatrix}  a & b \\  c & d   \end{bmatrix}$$
	is as such: $\Delta = ad-bc$

-  The inverse of a matrix $X$ is:
$$X^{-1} = \frac{1}{ad-bc} \begin{bmatrix}  d & -b \\  -c & a \end{bmatrix}
$$
- $XX^{-1}$ is equal to the identity matrix $I$
- We can use this to determine an unknown matrix

## Transformation Matrices
- These matrices are used to create linear transformations in a 2d plane
- They are placed on the left, e.g. $TX$
- The inverse is also placed on the left, e.g. $T^{-1} X$

### Important Transformation Matrices

#### Reflection about x-axis
$$\begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$$
#### Reflection about y-axis
$$\begin{bmatrix} -1 & 0 \\ 0 & 1 \end{bmatrix}$$
#### Reflection about the line $y=x$
$$\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$$

#### Reflection about the line $y=-x$
$$\begin{bmatrix} 0 & -1 \\ -1 & 0 \end{bmatrix}$$
#### Reflection about the line $y= [\tan{\theta}] x + c$
$$ \left( \begin{bmatrix} \cos{2\theta} & \sin{2\theta} \\ \sin{2\theta} & -\cos{2\theta}\end{bmatrix} \left(X - \begin{bmatrix} 0 \\ c \end{bmatrix}\right) \right)$$
#### Rotation $\theta ˚$ anticlockwise about a point $x,y$
$$\left(\begin{bmatrix} \cos(\theta) & -\sin(\theta) \\ \sin(\theta) & \cos(\theta) \end{bmatrix} \left( X- \begin{bmatrix} x \\ y \end{bmatrix} \right) \right) + \begin{bmatrix} x \\ y \end{bmatrix}$$
#### Translation $a$ along x-axis and $b$ along y-axis
$$\begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} x \\ y \end{bmatrix} + \begin{bmatrix} a \\ b \end{bmatrix}$$
#### Rotation $\theta ˚$ clockwise about a point $x,y$
$$\left(\begin{bmatrix} \cos(\theta) & \sin(\theta) \\ -\sin(\theta) & \cos(\theta) \end{bmatrix} \left( X- \begin{bmatrix} x \\ y \end{bmatrix} \right) \right) + \begin{bmatrix} x \\ y \end{bmatrix}$$
#### Projection onto x-axis
$$\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}$$
#### Projection onto y-axis
$$\begin{bmatrix} 0 & 0 \\ 0 & 1 \end{bmatrix}$$
#### Enlargement factor $k > 0$ about the origin
$$\begin{bmatrix} k & 0 \\ 0 & k \end{bmatrix}$$
#### Shear factor $k>0$ along the x-axis
$$\begin{bmatrix} 1 & k \\ 0 & 1 \end{bmatrix}$$
#### Shear factor $k > 0$ along the y-axis
$$\begin{bmatrix} 1 & 0 \\ k & 1 \end{bmatrix}$$
#### Dilation $m$ about y-axis and $n$ about x-axis (note: for a shape to not be dilated, $m$ or $n$ is equal to 1)
$$\begin{bmatrix} n & 0 \\ 0 & m \end{bmatrix}$$