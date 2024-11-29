---
title: Applications Of Redox Task
tags:
  - notes
  - chemistry
  - year12
  - atar
---

[go back](12Subjects/12Chemistry.md)
# Theory
![[images/Screenshot 2024-02-14 at 10.00.30 am.png]]
#### Primary cell
- An electrochemical galvanic cell
- In which a spontaneous redox reaction occurs to convert chemical potential energy into electrical energy
- The reaction cannot be reversed and so once the cell's reagents are consumed, they cannot be regenerated
- Thus, primary cells can be discharged but not recharged

#### Secondary Cell
- Secondary cell is an electrochemical cell that can act as a galvanic cell as well as an electrolytic cell
- During discharge, a spontaneous redox reaction occurs and voltage is produced, thus the cell acts as a galvanic cell
- When it is discharged, voltage can be applied to force current in the opposite direction to that which occurs spontaneously. This carries out electrolysis where electrical energy is used to force the spontaneous redox reactions to reverse and thus regenerate the oxidant and reductant present. Thus, the cell acts as an electrolytic cell

#### Fuel Cells
- A galvanic electrochemical cell, where the oxidants and reductants are constantly fed into the cell as fuels, and the products are constantly removed from the cell
- The cell delivers a constant voltage
- Fuel cells are considered more efficient than other methods of generating electricity (like fossil fuel based electricity production plants) because energy  is directly converted from chemical energy into electrical energy – if there are INTERMEDIATE energy transformations: energy is lost (inefficiency) at each of these stages.
- The efficiency rating for Fuel Cells is higher than 40% - this is considerably higher than other electrical energy sources.
- Also considered to be more environmentally friendly, as it could potentially be used with products as nothing else other than water and hydrogen gas

## Leclanche Cell, a.k.a. Dry Cell
![[images/Pasted image 20240213144652.png]]
#### **Structure:** 
- **Anode:** A Zinc solid that is oxidised to produce Zinc ions $Zn^{2+}_{(aq)}$ and electrons
- **Cathode and cathode paste**: A cathode paste consisting of $MnO_{2}$ and $NH_{4} Cl$ which disassociates into $NH_{4}^+$ and $Cl^-$ where the ammonium ion provides the proton for the reduction of $MnO_{2}$. This paste is placed surrounding a conductive carbon cathode that allows electrons to be passed into the surrounding cathode paste
- **Porous Fibre**: A porous fibre membrane allows ion flow between cathode paste and anode while preventing direct contact between them

#### How it functions
1. **Oxidation at anode**: The zinc oxidises at the anode and produces zinc ions and electrons
$$Zn_{(s)}\to Zn^{2+}_{(aq)}+2e^-$$
2. **Conduction:** The electrons are then conducted along an external wire (copper wire) to an appliance (e.g. voltmeter) and then to a carbon rod that surrounded by the cathode paste
3. **Reduction at the cathode:** At the cathode, electrons flow into the cathode paste where reduction of manganese dioxide occurs
$$2MnO_{2(s)}+2NH^+_{4(aq)}+2e^- \to Mn_{2}O_{3(s)}+2NH_{3(aq)} + H_{2}O_{(l)}$$
4. **Flow of ions**
	1. As the anode gains a net positive charge, negative chlorine ions diffuse past the membrane towards the anode
	2. As the cathode gains a net negative charge, positive zinc ions and ammonium ions diffuse past the membrane towards the cathode
	3. This flow of charge completes the circuit and maintains neutrality
5. **Net Redox Reaction**
$$2MnO_{2(s)}+2H^+_{(aq)}+Zn_{(s)}\to Mn_{2}O_{3(s)}+Zn^{2+}_{(aq)}+H_{2}O_{(l)}$$

## Lead Acid Accumulator, a.k.a. Lead Acid Battery

#### Structure
1. **Anode:** Spongy lead
2. **Cathode:** Powdered lead oxide
3. **Electrolyte:** Dilute Sulphuric Acid
4. **Porous barrier:** Used to separate electrodes but allow ions to flow between anode/cathode

#### Discharging
![[images/Pasted image 20240213151237.png]]
1. During discharge, spongy $Pb_{(s)}$ oxidises at the anode, producing free electrons. The lead ions then immediately precipitate with the sulphate ions to produce lead sulphate around the anode.
$$Pb_{(s)}+SO_{4(aq)}^{2-}\to PbSO_{4(s)}+2e^-, \text{ E˚cell}=+0.36 V$$
2. The electrons flow from the anode out to an external appliance and then to the cathode
3. At the cathode, the powdered lead oxide is reduced to lead ions which also precipitate onto the cathode as insoluble lead sulphate
$$PbO_{2(aq)}+4H^+_{(aq)}+SO^{2-}_{4(aq)}+2e^- \to PbSO_{4(s)}+2H_{2}O_{(l)}, \text{ E˚cell}=+1.67V$$
4. Thus, when completely discharged, both electrodes have a coating of lead sulphate
5. **Overall Redox:**
$$Pb_{(s)}+PbO_{2(s)}+2SO_{4}^{2-}\to 2PbSO_{4(s)}, \text{ E˚cell}=+2.05V$$

#### Recharging
![[images/Pasted image 20240213212624.png]]

1. During recharge, a battery is connected to the system
	1. The positive terminal is attached to the original cathode $\to$ now site of oxidation (anode)
	2. The negative terminal is attached to the original anode $\to$ now site of reduction (cathode)
2. At the **new anode**(original cathode), lead sulphate is oxidised, producing powdered lead oxide
$$PbSO_{4(s)}^{2-}+H_{2}O_{(l)}\to PbO_{2(s)}+4H^+_{(aq)}+SO_{4(aq)}^{2-}+2e^-, \text{ E˚cell}=-1.67\ V$$
3. At the **new cathode**(original anode), lead sulphate is reduced, producing spongy lead
$$PbSO_{4(s)}^{2-}+2e^- \to Pb_{(s)}+SO_{4(aq)}^{2-}, \text{E˚cell}=-0.36 \ V$$
4. Thus, when completely recharged, the cathode is once again made from powdered lead oxide and the anode is once again made of spongy lead
5. **Overall Redox**
$$2PbSO_{4(s)} \to Pb_{(s)}+PbO_{2(s)}+2SO_{4}^{2-}, \text{ E˚cell}=-2.05V$$

### Some Theory stuff for lead-acid battery
##### **Why is it dangerous to overcharge the lead-acid accumulator**
1. If the battery is overcharged, then water starts to undergo an oxidation reaction at the anode to produce oxygen gas
$$2H_{2}O_{(l)} \to O_{2(g)}+ 4H^+_{(aq)}+4e^-$$
2. Water also undergoes a reduction reaction at the cathode to produce hydrogen gas
$$2H_{2}O_{(l)}+2e^- \to H_{2(g)}+2OH^-_{(aq)}$$
3. Thus, the disproportionation reaction produces hydrogen and oxygen gas, which combust to produce heat, thus being dangerous
$$2H_{2}O_{(l)}\to O_{2(g)}+2H_{2(g)}$$
##### Why can the cell be recharged
1. The product lead sulphate that is formed at the anode and cathode is insoluble, and remains coated to the electrodes at the site of oxidation and reduction
2. Thus, during recharge, the original reactants lead and lead(II) oxide can readily be reformed at the same site of oxidation and reduction (anode and cathode) making the cell ready for discharge again

## Hydrogen Fuel Cell

![[images/Pasted image 20240212114405.png]]

#### Components
- Anode: platinum nanoparticles on porous carbon
- Cathode: platinum nanoparticles on porous carbon
	- Platinum acts as a catalyst to sped up redox reactions
	- Carbon conducts electrons from the platinum to the external circuit
- A thin solid polymer proton exchange membrane (PEM) is used as the electrolyte
	- ­It separates the electrodes and allows hydrogen ions to flow across between electrodes
	- While restricting hydrogen and oxygen gas movement à prevent contact between the oxidant and reductant

#### Process
1. Hydrogen gas diffuses into the anode and is oxidised to form hydrogen ions and free electrons
$$H_{2(g)}\to 2H^+_{(aq)}+2e^-$$
2. Hydrogen ions diffuse across the PEM to the cathode where they diffuse through the cathode
3. Oxygen gas diffuses into the cathode and reacts with the hydrogen ions, where it is reduced to form water
$$O_{2(g)}+4H^+_{(aq)}+4e^-\to 2H_{2}O_{(l)}$$
4. Thus, the flow of $H^+$ away from the (gaining positive charge)anode and towards the (gaining negative charge)cathode completes the circuit. This circular movement of charge maintains electrical neutrality.
5. Overal redox: 
$$2H_{2(g)}+O_{2(g)}\to 2H_{2}O_{(l)}$$
##### Fuel Cell Theory
- A fuel cell is not always zero emission device because even though water is almost the only product produced in a fuel cell: the Hydrogen fuel itself is not produced using renewable energy.
- At present, 95% of Hydrogen is produced from fossil fuels such as natural gas, oil and coal
- Alternative ways of producing H2 gas are being explored and two methods are currently front runners:
	- Collecting biogas from landfill sites and converting methane to hydrogen
	- Using electrical energy to convert water to hydrogen via electrolysis.
- Application of Fuel Cells
	- Fuel cells are used in transport – potentially to power electric cars as well as various spacecrafts (satellites etc.)
	- Fuel cells can be used at power plants to generate electricity
![[images/Screenshot 2024-02-15 at 8.58.53 pm.png]]
- Difference to primary and secondary cells
	- Reactants are not stored and are continually fed into the cell
	- Products are not deposited and are continually removed from the cell
	- Fuel cell can maintain a constant voltage as there is no depletion of reactants
	- Difference to secondary cells: cannot be recharged through electrolysis: only discharged

## Electro-refining of Copper

![[images/Pasted image 20240208095553.png]]


Cathode: $Cu^{2+} \to Cu$
Anode: $Cu \to Cu^{2+} + 2e^-$
**Overall**: $Cu + Cu^{2+} \to Cu + Cu^2+$

A voltage is applied, which forces electrons from the anode to flow into the battery and into the cathode

Stronger reducing agents (e.g. Copper, zinc) are oxidised and enter the solution.

Things that do not oxidise, i.e. strong oxidising agents fall to the bottom as anodic slime.

Copper enters the solution from the impure sample

Copper is the strongest oxidising agent (most likely to reduce) present in the solution, thus reduces at the cathode, while the other metals float around in the solution

At the cathode, $Cu^{2+}$ ions accept electrons from the negative terminal to produce $Cu$ metal, as it is the most likely reduction.

Thus, pure copper is extracted from impure copper
###### How the stuff is separated
Basically, a specific voltage is applied such that materials that are more likely to reduce than copper are not oxidised, and thus stay in their solid state, and sink to the bottom of the solution.

However, because of this, there are no more materials that are more likely to reduce than copper, and thus copper is the most reactive in the solution. Thus, it is the only one to reduce at the cathode

## Electroplating

![[images/Pasted image 20240208101348.png]]
Usually the spoon is iron

Cathode: $Ag^+ + e^- \to Ag$ (at the spoon)

Anode: $Ag \to Ag^+ + e^-$

best results are yielded under low voltage and low concentration
##### Process:
A voltage is applied, which forces electrons from the anode to flow into the battery and into the cathode

At the cathode (negative electrode), metal ions in the solution are attracted to the cathode, and undergo reduction to form metal. This metal coats the cathode.

At the anode (positive electrode), the metal undergoes oxidation, and the metal dissolves as metal ions are formed. 

Thus, a metal coating on the cathode is formed.

**Thus, as metal ions are being consumed by the cathode and produced at the anode, the overall concentration of metal ions in the electrolyte remains constant**