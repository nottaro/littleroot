---
title: Electromagnetism
tags:
  - notes
  - year12
  - atar
  - physics
---

[go back](12Subjects/12Physics.md)

- Discovered by accident
- A current running through a wire produces a circular magnetic field around it
- **x** represents a current into the board
- **·** represents a current out of the board
- **whenever current is mentioned, it refers to conventional current**

### Right-hand Grip rule
- Thumb = direction of current
- Fingies - direction of induced magnetic field
- ![[images/Pasted image 20240415091054.png]]

##### Magnetic Force
- Caused by the interaction of 2 or more magnetic fields

### Right hand palm rule
- Thumb: directional current
- Fingers: direction of magnetic field
- Palm: direction of magnetic force
- ![[images/Pasted image 20240415092551.png]]


#### Solenoid rule
- Solenoid = electromagnet
- Effectively have a magnet which can be turned off and on
	- e.g. electromagnets in car crushing yards/metal waste
- Solenoid rule predicts the polarity of an electromagnet
	- Fingers = direction of current around solenoid
	- Thumb: points towards north magnetic pole
- ![[images/Pasted image 20240415094215.png]]


$$F_{{\text{magnetic}}} = Il B_{\perp}=IlB_{\perp} \sin \theta$$

- $B$ is strength of magnetic field (T)
- $I$ is current (A)
- $l$ is length of wire (m)
- $F_{b}$ is magnetic force (N)
- The magnetic field strength is perpendicular to the current
- $\theta$ is angle between magnetic field strength and current
- **direction**: perpendicular to the current


$$B = \frac{\mu_{0}I}{2\pi r}$$

- $\mu_{0}$ is magnetic constant (of permeability) (0 = vacuum/air) = $4 \pi \times 10^-7 \text{ N A}^{-2} \text{ or } 1.26 \times 10^{-6} \text{ N A}^{-2}$
- r = distance from wire

### Coil

Torque around a coil: $$\tau = rF \sin \theta = rBIl \sin \theta = NIBA \sin \theta$$
- $r$ is $\frac{1}{2}$ of width
- $l$ is length of coil times 2 (because it's going 2 ways)
- If you are given the number of turns, and told to find the maximum torque, multiply by number of turns

##### Faraday's Law
- A change in magnetic flux will cause an EMF (potential difference) to be induced in the circuit, that is proportional to the rate of change of magnetic flux

##### Lenz's Law
- The direction of a current induced in a coil (if you are moving a magnetic field in the vicinity of a coil, current is produced) by an external magnetic field experienced is such that the polarity of the magnetic field induced around the coil by the induced current is such that it opposes the polarity of the external magnetic field that induced the current initially

##### Generators 
- Slip rings = AC
- Split ring commutator = DC

### Graphing EMF/Flux/Torque/Force
1. Look at x-axis
	1. Could be time (usually it is)
	2. Could be number of rotation, or degrees of rotation
2. Note whether the question is asking about EMF or flux
	1. Max emf = min flux, and vice versa
3. See what the orientation of the coil is with regard to B field
	1. If coil is parallel to magnetic field, flux is 0, emf is max
	2. emf/flux can be negative

## DC Motors
- Split ring commutator
	- When armature reaches vertical stage, there is no net torque, acting on the armature and thus it will not rotate; if it continues forwards due to inertia, the forces acting on it will bring it back to its vertical position
		- Right hand palm rule
	- Thus the split ring commutator works to reverse the current in the coil each half turn, changing the direction of forces on the coil, and creating a unidirectional torque
	- Made of 2 semi-circular metal plates that are separated attached to the axle
	- It reverses flow of current to provide a unidirectional torque
		- Current from external circuit flows
		- When brushes are placed across gaps between 2 halves of commutator (rotor is vertical), no current flows through armature, which turns due to inertia
		- Thus motor continues to rotate and then split ring commutator is once again in contact with carbon brushes, but this time contact occurs between the carbon brushes and the other half of the split ring commutators
		- This ensures the direction of current flow in the rotating armature is always in one direction and thus the torque is always in one direction
- Carbon Brush
	- Maintain contact between the commutator and the wires that are connected to the battery; thus they complete the circuit in a DC motor
	- The carbon brushes are connected to the battery/power source via an external conductor

![[images/Pasted image 20240511231440.png]]

## EXAM STUFF
- Emf induction
- NO AC GENERATORS

## Transformers
- Frequency of alternating current is 50 Hz
- Voltage in Australia is 240 V
- Voltage in America is 120 V
- Assumptiuons: All transformers are ideal, i.e. they are 100% efficient
- Soft iron: iron that when magnetised will not retain its magnetism
- Laminators
	- Interlaced conducting/non-conducting material
	- Designed to limit the size to which eddy currents occur