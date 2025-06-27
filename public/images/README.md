# Images Directory

This directory contains celebration images for hackathon wins.

## Adding Celebration Images

To add your celebration images:

1. **For CCSC-NE 2024 win**: Add `ccsc-ne-celebration.jpg`
2. **For other hackathons**: Update the `repositories` array in `src/utils/github.ts` with:
   - `hackathonWin: true`
   - `hackathonName: "Your Hackathon Name"`
   - `celebrationImage: "/images/your-image.jpg"`

## Image Guidelines

- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 800x600 pixels or similar landscape/square ratio
- **Content**: Team celebration photos, trophy presentations, etc.
- **File naming**: Use descriptive names like `hackathon-name-celebration.jpg`

## Example Structure
```
public/images/
├── ccsc-ne-celebration.jpg       # CCSC-NE 2024 win
├── other-hackathon-win.jpg       # Other hackathon wins
└── README.md                     # This file
```

When users click on the trophy badge, your celebration image will be displayed in a beautiful modal with confetti effects! 🎉 