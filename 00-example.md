# External Markdown

## `<insert date here>`

-----

## Mermaid Tryout

[![](https://mermaid.ink/img/pako:eNptkU1rhDAQhv9KCIgt7P6BHHrqsb20x00PIRnd0HzIZMQu4n_vaBB3YT3J84zzyjuztNmBVLKQIXj3pkcTdWqa2SdPSswtXSFCq9ouIxRql6VpdBL8OI9gyeckPr4qmZwSU8Zfn3qtU_UZb1UW3sYhPbB68cnB32sVAZUI2ZrAAmHIxR8fITuEmAmeyMmJ8_mNlwoljHN7zAYDMrQ5Rk97ysZx5cNYrvv-Y7oDsk_wMIbwQDn2noY7yg0BiUvN_Xn4ocPLk4yA0XjHtc_rkJZbyVoqfk0wEnIZUqeFR81I-fuWrFSEI5zkOLjjUFJ1JhSm4NZePuspt4su_4Ipl-I)](https://mermaid.live/edit#pako:eNptkU1rhDAQhv9KCIgt7P6BHHrqsb20x00PIRnd0HzIZMQu4n_vaBB3YT3J84zzyjuztNmBVLKQIXj3pkcTdWqa2SdPSswtXSFCq9ouIxRql6VpdBL8OI9gyeckPr4qmZwSU8Zfn3qtU_UZb1UW3sYhPbB68cnB32sVAZUI2ZrAAmHIxR8fITuEmAmeyMmJ8_mNlwoljHN7zAYDMrQ5Rk97ysZx5cNYrvv-Y7oDsk_wMIbwQDn2noY7yg0BiUvN_Xn4ocPLk4yA0XjHtc_rkJZbyVoqfk0wEnIZUqeFR81I-fuWrFSEI5zkOLjjUFJ1JhSm4NZePuspt4su_4Ipl-I)

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
