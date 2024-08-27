---
title: Circuit Investigation
tags: 
date: 2023-09-20
enableToc: true
---

[go back](archive/11Subjects/11Physics.md)


This discussion aims to provide further insight into the topic of Internal Resistance in Batteries and Cells.

## Internal Resistance
Internal resistance is defined as the opposition offered by materials of the battery/cell itself to the flow of electric current. This occurs, as nothing is fully conductive, and as a result, current will always be opposed to some degree. Internal resistance is affected by 4 main factors: temperature, age, ionic resistance, and electronic resistance. As temperature is increased, there is an increased thermal agitation of metallic ions, and so the conductor ions vibrate rapidly about their mean position. The increased movement of the conductor particles inhibits the free flow of electrons through the substance and thus resistance increases. Electronic resistance is the resistance of the actual materials making the batteries, e.g. metal caps. It also refers to the specific design limitations of the battery that alter the resistance experienced. Ionic resistance is the resistance to electrical current flow within the battery due to electrochemical factors such as electrolyte conductivity, and ionic mobility. Over time, as the battery is used, corrosion of the metal current carriers causes an increased resistance as the corroded particles offer additional resistance to the flow of electron current. Furthermore, as the battery is used, components of the electrolytes are consumed, and thus the concentration of charge carriers decreases and the concentration of by-products increases (which have a higher resistance), thus resulting in a higher ionic resistance.

## Investigation Questions

### **Question 1: If a source (battery) has 0 internal resistance, what would happen if the battery was shorted out?**
Being shorted out refers to participating in a short circuit, that is, an abnormal connection between two nodes of an electrical circuit intended to be at different voltages. If a battery has zero internal resistance, when the battery is shorted (external resistance approaches or equals zero), the current going through the battery will approach infinity, and become undefined. Therefore, as current approaches infinity, more current will be travelling through the battery than it was designed to carry. Additionally, if an ammeter is used, there will be no reading, and for a voltmeter connected in parallel, the reading will equal the maximum terminal potential difference (emf) as there will be no drop in voltage. To conclude, as current approaches infinity, a small resistance in the wires, or anywhere in the system (not in battery), will heat up due to friction, and most possibly catch fire due to heat.

### **Question 2: If we measure the voltage of the source when current flow is zero, what is the PD across this resistance and how would voltage measured compare to the emf?**
When the current approaches 0 (extremely high external resistance is applied), the reading of the voltage will approach the value of the electromotive force (emf). Thus, when the voltage is measured with current flow being 0, the potential difference across the resistance would be the maximum value it can ever be; that is, equal to the emf. Additionally, if an ammeter is used, there will be no reading, and for a voltmeter connected in parallel, the reading will equal the maximum terminal potential difference (emf) as there will be no drop in voltage.

### **Question 3: Voltmeters have a high resistance but not infinite, is it possible to get a 100% accurate reading of emf using a voltmeter?**
The voltmeter is connected in parallel to a battery, thus the total resistance is equal to $(r + \frac{1}{R})^{-1}$, where the internal resistance of the battery is 'r', and of the voltmeter 'R'. Thus, the total resistance will only be equal to infinity when the resistance of the voltmeter is equal to infinity. As the resistance cannot be infinity, the total resistance cannot be infinity. Thus, current will never truly be equal to 0. Therefore, the voltage measured will never equal to emf of the battery, as some current will be drawn, which would pass through the internal resistance and get some potential across it. Mathematically, as R ≠ $\infty$ , I ≠ 0, meaning as $V=\epsilon -Ir$, the voltage measured will be a smaller value than the emf being measured, as $Ir$ will be a non-zero integer.

## Exploring Physics Questions

### Question 1: Use a graphical method to obtain emf and r from either slopes or intercepts of your raw or manipulated data. How do these values compare with the values you obtained by direct measurement?

![[images/Pasted image 20230823191932.png]]


Internal resistance is the absolute value of the gradient, and emf is the y-intercept of our graph. The green battery has an emf of 5.86 V, and an internal resistance of 1.4 ohms. The yellow battery has an emf of 5.25 V, and an internal resistance of 5.0 ohms. The red battery has an emf of 4.59 V, and an internal resistance of 22 ohms. The values that we calculated differ to the values obtained by direct measurement, as our measurement is subject to absolute and relative uncertainty. Furthermore, we used a line of best fit to gain these values, which is just a generalisation, and thus does not account for all values and outliers. Again, our calculated values could also change due to the reasons listed in the overview (internal resistance changing).

### Question 2: How do the emf and internal resistance of a flat dry cell compare with those of a *fresh* dry cell?
The internal resistance of a flat dry cell is higher than that of a fresh dry cell. This is because the electrolyte conductivity of the cell increases due to use, and the ionic mobility will decrease, leading to an increase in resistance. Another reason it increases is because of the aging of its components.

The emf of a flat dry cell is the less than that of a fresh dry cell. We have already established that as batteries age, internal resistance increases. Thus, the amount of current in the battery decreases, and the difference in potential energy across the circuit decreases, thus emf is less.

### Question 3: How does the internal resistance of an alkaline battery compare with that of a heavy-duty battery of the same size and shape?
Heavy-duty batteries contain zinc chloride as an electrolyte, whereas alkaline batteries contain potassium hydroxide, an alkaline. Alkalines contain hydroxide ions, which are very conductive, more than zinc chloride (an ionic compound). Thus, the internal resistance of an alkaline battery is less than that of a heavy duty battery of the same size and shape

### Question 4: The battery in a torch has been used for a long time. Explain why the torch is dim even though the emf of each cell is the same as when they were first bought. 
We have already establish that the emf remains constant. Thus, this is because the internal resistance increases over time, leading to lessening of current in the system, and thus since power = voltage times current, both decrease, and thus power decreases, which is why the torch dims over time.

### Question 5: Does a power pack have internal resistance? Explain your answer. 
Power packs do have internal resistance. This is because as a power source, some charge in the circuit will dissipate into its components, as nothing is perfectly conductive, and some current will always be lost. Also, its components would age with time, meaning that internal resistance will increase over time. Furthermore, without internal resistance, current would approach infinity, and thus anyone using the power pack would be in danger, as the circuit could potentially overload.


## Sources
https://learn.sparkfun.com/tutorials/measuring-internal-resistance-of-batteries/internal-resistance
https://www.biologic.net/topics/internal-resistance-series-part-i-what-is-internal-resistance-in-a-battery/
https://www.batteriesplus.com/blog/power/heavy-duty-vs-alkaline
https://www.pathwayz.org/Tree/Plain/INTERNAL+RESISTANCE#:~:text=All%20power%20supplies%20have%20some,warm%20when%20delivering%20a%20current.
https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXII/physics/lelm314.pdf
https://www.toppr.com/ask/question/explain-the-factors-that-affect-electric-resistance/ 
https://www.thespruce.com/what-causes-short-circuits-4118973
