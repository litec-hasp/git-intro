# External Markdown

## `<insert date here>`

-----

## Mermaid Tryout

[![](https://mermaid.ink/img/pako:eNptkU1rhDAQhv9KCIgt7P6BHHrqsb20x00PIRnd0HzIZMQu4n_vaBB3YT3J84zzyjuztNmBVLKQIXj3pkcTdWqa2SdPSswtXSFCq9ouIxRql6VpdBL8OI9gyeckPr4qmZwSU8Zfn3qtU_UZb1UW3sYhPbB68cnB32sVAZUI2ZrAAmHIxR8fITuEmAmeyMmJ8_mNlwoljHN7zAYDMrQ5Rk97ysZx5cNYrvv-Y7oDsk_wMIbwQDn2noY7yg0BiUvN_Xn4oTsvTzICRuMd9z6vU1puLWup-LUWraVOC0-akfL3LVmpCEc4yXFwx6Gk6kwoTMGtvXzWU24XXf4BaEuXmg)](https://mermaid.live/edit#pako:eNptkU1rhDAQhv9KCIgt7P6BHHrqsb20x00PIRnd0HzIZMQu4n_vaBB3YT3J84zzyjuztNmBVLKQIXj3pkcTdWqa2SdPSswtXSFCq9ouIxRql6VpdBL8OI9gyeckPr4qmZwSU8Zfn3qtU_UZb1UW3sYhPbB68cnB32sVAZUI2ZrAAmHIxR8fITuEmAmeyMmJ8_mNlwoljHN7zAYDMrQ5Rk97ysZx5cNYrvv-Y7oDsk_wMIbwQDn2noY7yg0BiUvN_Xn4oTsvTzICRuMd9z6vU1puLWup-LUWraVOC0-akfL3LVmpCEc4yXFwx6Gk6kwoTMGtvXzWU24XXf4BaEuXmg)
Note:
```mermaid
stateDiagram
%%{init: {'theme':'neutral'}}%%
    direction LR
    wd: working\ndirectory
    st: stage\n(index)
    lr: local\nrepository
    rr: remote\nrepository
    wd --> st : add
    st --> lr : commit
    lr --> rr : push
    rr --> lr : fetch
    rr --> lr : pull
    rr --> wd : pull
    lr --> wd : reset [commit]
    st --> wd : reset   
```

---

## Mermaid Tryout2

[![](https://mermaid.ink/img/pako:eNp1kb1uwzAMhF9F4NQCyQsYSKaM7dKOVgZBom2h-jEoGk4Q591L23HTodUk3H28E6gb2OwQKlCqCXm0nSFWbx86KTmjq8dMXz61WifnCS1nup5Xs3CtobBpUcwXnxxeXjU8zEB1yNYEsQj7XPyvQaKaMGbGv8zRqcPhOBnnJmnYmhbN5hg9T5K9dSxyP5RuktAtXO33x6lBtt0TpQ0N4R9xdD-h87wGwoKs6rX0rOGJyHNmZAFmFXYQkaLxTtZ4mxkN3GFEDZVcmywka9DpLqQZOH9ek4WKacAdDL0zjCdvWjIRqsaEIiq6eSfv68_YnBrfwv0bt5qPpg)](https://mermaid.live/edit#pako:eNp1kb1uwzAMhF9F4NQCyQsYSKaM7dKOVgZBom2h-jEoGk4Q591L23HTodUk3H28E6gb2OwQKlCqCXm0nSFWbx86KTmjq8dMXz61WifnCS1nup5Xs3CtobBpUcwXnxxeXjU8zEB1yNYEsQj7XPyvQaKaMGbGv8zRqcPhOBnnJmnYmhbN5hg9T5K9dSxyP5RuktAtXO33x6lBtt0TpQ0N4R9xdD-h87wGwoKs6rX0rOGJyHNmZAFmFXYQkaLxTtZ4mxkN3GFEDZVcmywka9DpLqQZOH9ek4WKacAdDL0zjCdvWjIRqsaEIiq6eSfv68_YnBrfwv0bt5qPpg)

Note:
```mermaid
flowchart LR
%%{init: {'theme':'forest' ,'flowchart': { 'curve': 'natural' }}}%%
    wd[working\ndirectory]
    st["stage\n(index)"]
    lr[local\nrepository]
    rr[remote\nrepository]
    wd --> | add | st
    st == commit ==> lr
    lr == push ==> rr
    rr == fetch ==> lr
    rr == pull ==> lr
    rr == pull ==> wd
    lr == "reset [commit]" ==> wd
    st == reset ==> wd
    
```

-----

## 3rd page

look down for nothing special

Note: just a short note

---

## Up You Go

Math Example:

`$$ J(\theta_0,\theta_1) = \sum_{i=0}^{10} a_i $$`

-----

## Image Examples

### Link

![Github](https://pngimg.com/uploads/github/small/github_PNG67.png)

### Local

![LiTec-Logo](./img/LiTec-Logo.jpg)
