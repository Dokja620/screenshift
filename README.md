# Screenshift 📱💻🖥️

A lightweight SCSS library for responsive container management with predefined breakpoints, media query helpers, and a built-in debug overlay for visualizing breakpoints.

## 🌟 Features

- 📐 Responsive container behavior with a single attribute
- 🔧 Predefined breakpoints for mobile-first or desktop-first workflows
- 🐞 Debug mode for visualizing current screen size
- ⚡ Easy integration with any SCSS-based project

## 📦 Installation

Pick your preferred method:

```bash
# npm
npm install screenshift --save

```

Or simply download the source and drop it into your SCSS directory.

## 🔧 Setup

Import Screenshift into your main SCSS file:

```scss
@use "screenshift/scss";
```

## 💡 Usage

### 1. Responsive Container

Add `data-screenshift` to any container element to apply responsive defaults:

```html
<div data-screenshift>
  <!-- Your content -->
</div>
```

This will:

- Set container width to 100%
- Center content using auto margins
- Apply responsive max-width based on screen size
- Add contextual padding at each breakpoint

### 2. Media Query Helpers

Screenshift offers both mobile-first and desktop-first mixins:

#### 🖥️ Desktop-First (max-width)

```scss
@include max-mq("tablet") {
  // Styles for ≤ 1024px
}

@include max-mq("mobile-lg") {
  // Styles for ≤ 640px
}
```

#### 📱 Mobile-First (min-width)

```scss
@include min-mq("desktop") {
  // Styles for ≥ 1280px
}

@include min-mq("tablet") {
  // Styles for ≥ 1024px
}
```

### 3. Debug Mode 🔍

Use `data-screenshift="debug"` to display a visual overlay with:

- Current breakpoint label (e.g., mobile, tablet)
- Applied max-width
- Red dashed outline for easy identification

```html
<div data-screenshift="debug">
  <!-- Debug container -->
</div>
```

To disable, simply remove the "debug":

```html
<div data-screenshift>
  <!-- Clean version -->
</div>
```

## 📏 Breakpoints

| Name         | Width  |
| ------------ | ------ |
| desktop-xl   | 1536px |
| desktop-lg   | 1325px |
| desktop      | 1280px |
| tablet       | 1024px |
| small-tablet | 768px  |
| mobile-lg    | 640px  |
| mobile       | 475px  |

## 🧩 Example

```scss
.my-component {
  display: flex;
  flex-direction: row;

  @include max-mq("tablet") {
    flex-direction: column;
  }

  @include max-mq("mobile-lg") {
    background: blue;
  }

  @include max-mq("mobile") {
    background: yellow;
  }
}
```

## 🤝 Contributing

Pull requests and feedback are warmly welcome. Let's build this together!
