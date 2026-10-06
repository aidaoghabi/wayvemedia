---
name: "Wayve Media"
theme: "light"

colors:
  neutral:
    shade-0: "#FFFFFF"
    shade-1: "#F2F2F2"
    shade-2: "#D9D9DA"
    shade-3: "#B4B4B5"
    shade-4: "#828384"
    shade-5: "#505152"
    shade-6: "#1E1F21"
    shade-7: "#050709"
    white: "#FFFFFF"
  cornflower-blue:
    shade-1: "#EFEFFE"
    shade-2: "#DFDFFE"
    shade-3: "#8F8FFC"
    shade-4: "#605FFC"
    shade-5: "#4C4CC9"
    shade-6: "#262664"
    shade-7: "#1C1C4B"
  mulled-wine:
    shade-1: "#ECECF0"
    shade-2: "#DADAE1"
    shade-3: "#7E7E97"
    shade-4: "#47476B"
    shade-5: "#383855"
    shade-6: "#1C1C2A"
    shade-7: "#151520"
  sundance:
    shade-1: "#F9F7EE"
    shade-2: "#F4EFDE"
    shade-3: "#DAC98C"
    shade-4: "#CBB25B"
    shade-5: "#A28E48"
    shade-6: "#514724"
    shade-7: "#3C351B"
  hippie-blue:
    shade-1: "#EFF3F7"
    shade-2: "#DFE8EF"
    shade-3: "#8FB1C9"
    shade-4: "#5F90B2"
    shade-5: "#4C738E"
    shade-6: "#263947"
    shade-7: "#1C2B35"

typography:
  heading:
    fontFamily: "Sora"
    fontWeight: 700
  body:
    fontFamily: "Inter"
    fontWeight: 400
  sizes:
    desktop:
      h1: 84px
      h2: 60px
      h3: 48px
      h4: 40px
      h5: 32px
      h6: 26px
      text-large: 26px
      text-medium: 20px
      text-regular: 18px
      text-small: 16px
      text-tiny: 12px
    mobile:
      h1: 48px
      h2: 44px
      h3: 32px
      h4: 24px
      h5: 20px
      h6: 18px
      text-large: 18px
      text-medium: 16px
      text-regular: 14px
      text-small: 12px
      text-tiny: 10px

ui:
  style: "sleek"
  buttonRadius: 6px
  tagRadius: 4px
  inputRadius: 6px

cards:
  style: "outlined"
  borderWidth: 1px
  dividerWidth: 1px
  radiusLarge: 8px
  radiusMedium: 8px
  radiusSmall: 8px

schemes:
  - name: "Scheme 1"
    background: "chromatic1-shade-6"
    backgroundHex: "#262664"
    foregroundHex: "#262664"
    textHex: "#ffffff"
    accentHex: "#ffffff"
    borderValue: "#ffffff33"
    useLogoVariant: dark
    cssClass: "scheme-1"
  - name: "Scheme 2"
    background: "neutral-shade-0"
    backgroundHex: "#FFFFFF"
    foregroundHex: "#FFFFFF"
    textHex: "#050709"
    accentHex: "#605FFC"
    borderValue: "#05070926"
    useLogoVariant: light
    cssClass: "scheme-2"
  - name: "Scheme 3"
    background: "chromatic2-shade-2"
    backgroundHex: "#DADAE1"
    foregroundHex: "#DADAE1"
    textHex: "#050709"
    accentHex: "#050709"
    borderValue: "#05070926"
    useLogoVariant: light
    cssClass: "scheme-3"
---

# Wayve Media — Design Specification

This file contains machine-readable design tokens in the YAML frontmatter above, and human-readable guidance below.

## Colors

The design uses a **light** theme with a neutral palette and 4 chromatic palettes.

- **Neutral shades** range from shade-0 (darkest) to shade-7 (lightest), plus white
- **Cornflower Blue** — primary shade: `#605FFC`
- **Mulled Wine** — primary shade: `#47476B`
- **Sundance** — primary shade: `#CBB25B`
- **Hippie Blue** — primary shade: `#5F90B2`

Use the CSS custom properties from `react/globals.css` for all colors (e.g. `--color-neutral-darkest`, `--color-blue-ribbon`).

## Typography

Headings use **Sora** at weight 700. Body text uses **Inter** at weight 400.

The type scale has desktop and mobile sizes. Apply mobile sizes at smaller breakpoints. All values are in `react/globals.css`.

## UI Elements

UI style is **sleek** with button radius 6px. Cards use the **outlined** style with border-width 1px.

## Color Schemes

Sections use color schemes to control their visual appearance. Each scheme is derived from a single background color — all other colors (text, foreground, accent, border) are automatically computed for optimal contrast.

| Scheme | Background | Text | Accent | Logo | CSS class |
|--------|-----------|------|--------|------|-----------|
| Scheme 1 | Cornflower Blue Darker (#262664) | #ffffff | #ffffff | dark | `.scheme-1` |
| Scheme 2 | Neutral White (#FFFFFF) | #050709 | #605FFC | light | `.scheme-2` |
| Scheme 3 | Mulled Wine Lighter (#DADAE1) | #050709 | #050709 | light | `.scheme-3` |

Apply a scheme by adding its CSS class to the section element. See `sitemap.md` for which scheme each section uses.

### Tweaking Schemes

To create visual variation, you can change which scheme a section uses. When switching schemes:

- Swap the CSS class (e.g. change `.scheme-1` to `.scheme-2`)
- All child elements automatically inherit the correct text, accent, and border colors
- Use the matching logo variant (`logo-light.svg` or `logo-dark.svg`) based on the scheme's `useLogoVariant`
- Alternate between light and dark schemes to create visual rhythm
