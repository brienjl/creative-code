# Project Squared
<details><summary> 🧭 Explore Projects</summary>

|                |            |
|---------------:|-----------:|
| [**home**](README.md)|[squared](project-squared.md)|

</details>

---

## Title: iWrite Pretty Angles

--- 

Dynamically drawing squares with randomized thickness. I experimented with color palettes and shadows to create the illusion of contrasting colors for each square that is randomly "thicker." For example. 

| | | |
|-|-|-|
|![squared-fall](my-sketches/squared-fall.png)|![squared-mario](my-sketches/squared-mario.png)|![squared-OG](my-sketches/squared.png)|
|![squared-retro](my-sketches/squared-retro.png)|![squared-pink](my-sketches/squared-pink-is-the-new-black.png)|![squared-fall-leaves](my-sketches/squared-fall-leaves.png)

## Implementation
```js
//randomized rectangle sizes
if (Math.random() < .5) 
{
    context.beginPath();
    context.rect( x + offset /2, 
        y + offset /2,
        w - offset, h - offset );
    context.stroke();
}
