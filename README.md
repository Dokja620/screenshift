# Screenshift 📱 💻 🖥️

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight, framework-agnostic SCSS utility that provides responsive breakpoints and a pure CSS debug overlay to visualize the current breakpoint.

## 🌟 Features

- 🚀 Lightweight and framework-agnostic
- 📐 Predefined, customizable responsive breakpoints
- 🔍 Pure CSS debug overlay
- 🛠️ Easy configuration and integration
- 💻 Works with modern web projects

## 📦 Installation

Choose your preferred package manager:

```bash
# Bun
bun add screenshift

# npm
npm install screenshift

# pnpm
pnpm add screenshift

# Yarn
yarn add screenshift
```

## 🔧 Breakpoints

Screenshift provides a comprehensive set of responsive breakpoints:

| Breakpoint | Min Width | Max Width | Label                    | Container Max Width |
| ---------- | --------- | --------- | ------------------------ | ------------------- |
| xs         | 0px       | 475px     | XS Mobile                | 100%                |
| sm         | 476px     | 640px     | SM Small Mobile          | 475px               |
| md         | 641px     | 768px     | MD Mobile Landscape      | 640px               |
| lg         | 769px     | 1024px    | LG Tablet                | 768px               |
| xl         | 1025px    | 1280px    | XL Small Desktop         | 1024px              |
| xl2        | 1281px    | 1325px    | XL2 Medium Desktop       | 1200px              |
| xxl        | 1326px    | 1536px    | XXL Large Desktop        | 1280px              |
| xxxl       | 1537px    | ∞         | XXXL Extra Large Desktop | 90%                 |

## 💡 Usage

### 1. Import and Use in SCSS

#### Responsive Media Queries

```scss
@use "../shared";
@use "screenshift/scss" as *;

// Responsive styles for #featured element
@media (min-width: $screenshift-xxxl) {
  #featured {
    background: red;
  }
}

@media (min-width: $screenshift-md) {
  #featured {
    background: yellow;
  }
}

#featured {
  .content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: shared.$spacing-lg;
    margin-top: shared.$spacing-xl;
  }
}
```

#### Global Styles

```scss
@use "screenshift/scss";

// Layout imports
@use "./layout";
@use "./home";
@use "./about";
@use "./shared";

// Main content styling
main {
  display: grid;
  gap: calc(shared.$spacing-xxl * 2);
  padding-bottom: shared.$spacing-md;
}
```

### 2. Debug Mode

```html
<!-- Global or section-specific debug overlay -->
<body screenshift="debug">
  <!-- Your site content -->
</body>
```

## 🎨 Media Query Helpers

Use predefined SCSS variables for responsive design:

```scss
@use "screenshift/scss" as *;

.responsive-component {
  @media (max-width: $screenshift-md) {
    // Styles for medium and smaller screens
    display: block;
  }

  @media (min-width: $screenshift-lg) {
    // Styles for large and larger screens
    display: flex;
  }
}
```

## 🛠️ Configuration Options

- Customize spacing: `$screenshift-spacing-*`
- Change debug color: `$screenshift-debug-color`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License

## 🚀 Compatibility

- SCSS
- Modern browsers
- Works with any framework (React, Vue, Angular, etc.)
