---
title: Waves Evaluation
tags: 
date: 2023-09-20
enableToc: true
---

[go back](archive/11Subjects/11Physics.md)

# Reflection and Refraction with Reference to Huygen’s Principle

Huygen’s principle states that each point on a wavefront (imaginary plane that represents the points of a wave that vibrate in unison) is a source of spherical wavelets that spread out int the forwards direction at a constant speed as the wavefront progresses. These spherical wavelets are tangent to the new wavefront, and propagate at 90 degrees to the wavefront at the same speed as the wave itself.

### Reflection

![[images/Screenshot 2023-04-25 at 7.38.56 pm.png]]

The incident wavefront intersects the surface at angle θ from the normal. Thus, every point on the incident wavefront is a source of secondary spherical wavelets, in accordance with Huygen’s Principle.

The incident wavefront intersects the surface first at point A, then point B, then point C. Hence, secondary spherical wavelets form with radius AA1, BB1, and CC1, in that time order. The reflected wavefront is a line tangental to each of these wavelets, and therefore must move at an angle of reflection that is equal to the angle of incidence.

The reflected wave, and therefore wavefront, retains all properties including velocity, frequency, wavelength and period, and returns back to the original medium with an angle of reflection that is equal to the angle of incidence

### Refraction

![[images/Screenshot 2023-04-25 at 7.41.01 pm.png]]

The incident wavefront intersects the surface at angle θ from the normal. Thus, every point on the incident wavefront is a source of secondary spherical wavelets, in accordance with Huygen’s Principle.

The incident wavefront intersects the surface first at point A, then point B, then point C. Hence, secondary spherical wavelets from with radius AA1, BB1, and CC1, in that time order. These wavelets propagate at a lower speed, as the wave is entering a denser medium with a greater refractive index.

The refracted wavefront is a line tangental to each of these wavelets. This wavefront is tangental to the refracted wave and has an angle of refraction given by alpha.

In this case, the wave bends towards the normal, meaning that its speed and wavelength have decreased, but frequency remaining constant.

# Snell’s Law of Refraction and Critical Angle

## Snell’s Law

Refraction occurs when a wave passes from the medium to another, at an angle other than 90˚ and changes direction. Its speed changes, and therefore its wavelength, but not its frequency.

Snell’s Law of Refraction is a law stating the relation between the angles of refraction and incidence with respect to light passing through mediums, and states that the incident ray, normal, and refracted ray are co-planar. A refractive index is a property of a medium that determines how much the ray is refracted.

The law also states that the ratio of the sine of angle of incidence and the sine of angle of refraction is always constant for a given pair of media, and that the aforementioned ratio is equal to the refractive index of medium 2 with respect to medium 1.

The equation is as follows:

$$ n_1sin(\theta_1)=n_2sin(\theta_2) ∴n_{21}=\frac{sin(\theta_1)}{sin(\theta_2)}=\frac{n_2}{n_1}=\frac{\lambda_1}{\lambda_2}=\frac{v_1}{v_2} $$

$$ \therefore n_1=\frac{n_2sin(\theta_1)}{sin(\theta_2)},\theta_1=sin^{-1}(\frac{n_2sin(\theta_2)}{n_1}) $$

Where $\theta_1$ is the angle of incidence and $\theta_2$ is the angle of refraction, $v_1$ is the incidence velocity and $v_2$ is the refraction velocity, and $n_1$ is the 1st media’s refractive index, and $n_2$ is the 2nd media’s refractive index. $n_{21}$ represents the refractive index of medium 2 with respect to medium 1. 

The speed of light in a medium is given by the following equation:

$$ n=\frac{c}{v} \therefore c=nv, v=\frac{c}{ n} $$

Where c is the speed of light ($3.00\times10^8\ ms^{-1}$), n is the refractive index of the medium, andd v is the velocity of the wave.

Note: the medium refraction for air is considered to be 1.000

## Critical Angle

The critical angle can be defined as the angle of incidence where the angle of refraction is 90˚. In other words, the wave does not pass through the boundary of the 2 mediums, and is instead refracted along the boundary, i.e. parallel to it. If the wave travels from a rarer medium to a denser medium, it will refract towards the normal, and therefore the critical angle is not observed. Thus, the critical angle only occurs when the wave travels from a denser to a rarer medium. This phenomenon is known as **total internal reflection**. 

The critical angle can also be described as the largest incident angle that can be if there is refraction.

By deriving Snell’s law, we can say that the equation for the critical angle is:

$$ \theta_{critical}=sin^{-1}(\frac{n_2}{n_1}) $$

Such that $n_2 < n_1$

![[e.png]]

Here, we would say that the critical angle is angle $\theta$ from the normal

# Ultrasound Imaging

Ultrasound waves are longitudinal mechanical waves, with a frequency of between 1000 to 20000 Hz. This is above the human hearing range.

Ultrasound imaging is a form of medical imaging that uses ultrasound waves to create an image of internal body structures, e.g. organs. The most common use of this is for pregnancy, to have an ultrasound image of the baby.

Ultrasound waves are used in medical imaging for a few reasons. One reason is that since they are outside the audible range, they don’t cause discomfort to the patient. Another reason is that ultrasound waves have very high frequencies, which produce a better resolution as they diffract less. Therefore, their intensity is maintained for longer distances, and more superficial structures can be imaged. Finally, it’s a good alternative to x-ray, as it doesn’t have a possibility of causing cancer, and some structures in x-ray scans aren’t shown, such as soft tissue.

However, since ultrasound waves don’t travel well through air or bone, it is not effective at rendering bones or parts filled with gas. Furthermore, ultrasound imaging may not be able to identify objects deep within the body.

The process of ultrasound imaging can be described as such:

1.  A transducer generates pulses as it moves along the surface of the tissue. The pulses travel through a conductive gel(which enables direct transmission of the wave from the transducer to the tissue) and into the tissue, and 3 things happen.
2.  Wave’s Journey
    1.  Due to absorption, the waves lose intensity and energy as they travel further into the tissue. Therefore their amplitude decreases as they travel into the tissue.
    2.  The ultrasound waves reflect at the intermedia between 2 tissue
        1.  When the wave hits a smooth surface, and the wavelength is smaller than the imaged surface, **specular reflection** occurs . Thus, a single, reflected wave is formed, moving in one direction
        2.  When the wave hits a rough surface, **diffuse reflection** occurs. The wave is reflected in multiple directions with lower amplitudes, and thus intensities. 
        
        ![[Screenshot 2023-04-25 at 8.42.20 pm.png]]
    1.  The ultrasound waves have a possibility to refract, causing a change in the ultrasound wave speed and wavelength
    2.  Acoustic impedance (ai) is a property that measures the resistance ultrasound waves encounter in tissue. A higher density of tissue means a greater acoustic impedance, which means that the ultrasound waves are deflected with a smaller decrease in intensity. Thus, at the surface of dense tissue, e.g. bones, the reflection, and thus the intensity, is greater. The larger the difference in acoustic impedance between the 2 mediums, the greater the fraction of the wave that is reflected, and vice versa. 
    
    ![[Screenshot 2023-04-25 at 8.42.48 pm.png]]
1.  The reflected waves arrive at the transducer
2.  The distance between interfaces is calculated using the angle of return and time take to return
    1.  This is because of $s=vt$, and the law of reflection
3.  A grey scale image is produced, using their intensity
    1.  Greater intensity of reflected light means a whiter image, thus denser objects (e.g. bone) appear brighter than rarer objects
4.  An image that shows the boundaries of various structures and their densities is created, and is known as a sonogram



# Sources

### Reflection and Refraction with Reference to Huygen’s Principle

https://phys.libretexts.org/Bookshelves/University_Physics/Book:_University_Physics_(OpenStax)/University_Physics_III_-_Optics_and_Modern_Physics_(OpenStax)/01:_The_Nature_of_Light/1.07:_Huygenss_Principle

https://www.khanacademy.org/science/in-in-class-12th-physics-india/in-in-wave-optics/x51bd77206da864f3:huygen-s-principles-proof-of-laws-of-reflection-refraction/v/huygen-s-principle-reflection-laws-proof

https://openstax.org/books/university-physics-volume-3/pages/1-6-huygenss-principle

### Snell’s Law and Critical Angle

https://phys.libretexts.org/Bookshelves/College_Physics/Book:_College_Physics_1e_(OpenStax)/25:_Geometric_Optics/25.03:_The_Law_of_Refraction

https://brilliant.org/wiki/snells-law/

https://phys.libretexts.org/Bookshelves/University_Physics/Book:_University_Physics_(OpenStax)/University_Physics_III_-_Optics_and_Modern_Physics_(OpenStax)/01:_The_Nature_of_Light/1.05:_Total_Internal_Reflection

https://eng.libretexts.org/Bookshelves/Materials_Science/Supplemental_Modules_(Materials_Science)/Optical_Properties/Snell's_Law

### Ultrasound Imaging

https://phys.libretexts.org/Bookshelves/College_Physics/Book:_College_Physics_1e_(OpenStax)/17:_Physics_of_Hearing/17.07:_Ultrasound

https://www.mayoclinic.org/tests-procedures/ultrasound/about/pac-20395177

https://www.nibib.nih.gov/science-education/science-topics/ultrasound

https://two-views.com/ultrasounds/gel-goo.html

https://www.youtube.com/watch?v=hijUpZPwwYk&ab_channel=elmustaphabenbihi