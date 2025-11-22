# Dynamic Portfolio Configuration Guide

Your portfolio site now uses a JSON configuration file for easy content management. You can update all content without touching HTML code!

## Quick Start

1. Open `portfolio-config.json`
2. Edit the values you want to change
3. Save the file
4. Refresh your portfolio page

That's it! No HTML knowledge required.

## Configuration Structure

### Profile Section
```json
"profile": {
  "name": "Your Name",
  "role": "Your Job Title",
  "image": "URL to your profile image",
  "summary": "Your professional summary (HTML allowed)"
}
```

### Contact Information
```json
"contact": [
  {
    "type": "email",
    "label": "your@email.com",
    "link": "mailto:your@email.com",
    "icon": "email"
  }
]
```

Available icons: `email`, `phone`, `linkedin`

### Skills
Simple array of skill names:
```json
"skills": [
  "Node.js",
  "React",
  "TypeScript"
]
```

### Experience
```json
"experience": [
  {
    "title": "Job Title",
    "company": "Company Name",
    "date": "Start Date – End Date",
    "responsibilities": [
      "First responsibility",
      "Second responsibility"
    ]
  }
]
```

Leave `responsibilities` as an empty array `[]` if you don't want to list any.

### Education
```json
"education": [
  {
    "degree": "Degree Name",
    "school": "Institution Name",
    "date": "Start Year – End Year"
  }
]
```

### Languages
Simple array of languages with proficiency:
```json
"languages": [
  "English (Native)",
  "Spanish (Professional)"
]
```

### Footer
```json
"footer": {
  "text": "© 2025 Your Name"
}
```

## Common Tasks

### Adding a New Skill
1. Open `portfolio-config.json`
2. Find the `"skills"` array
3. Add your new skill: `"Docker"`
4. Save the file

### Adding a New Job
1. Open `portfolio-config.json`
2. Find the `"experience"` array
3. Add a new object at the beginning (most recent first):
```json
{
  "title": "Senior Engineer",
  "company": "Tech Corp",
  "date": "Jan 2024 – Present",
  "responsibilities": [
    "Led team of 5 developers",
    "Improved system performance by 40%"
  ]
}
```

### Removing Content
Simply delete the corresponding object or item from the array in `portfolio-config.json`.

### Updating Your Profile Picture
Replace the image URL in `profile.image` with a new URL.

## Tips

- Always use valid JSON syntax (no trailing commas, proper quotes)
- You can use HTML tags in the summary (like `<strong>` for bold text)
- Keep responsibility descriptions concise and action-oriented
- Order matters: items appear in the same order as in the JSON file

## Testing Locally

To test your changes locally:

1. You need to serve the files through a web server (not just opening the HTML file)
2. Simple options:
   - Python: `python -m http.server 8000`
   - Node.js: `npx serve`
   - PHP: `php -S localhost:8000`
3. Open `http://localhost:8000` in your browser

## Troubleshooting

If your page shows an error:
1. Check that `portfolio-config.json` is in the same folder as `index.html`
2. Validate your JSON syntax at https://jsonlint.com/
3. Check browser console for specific error messages (F12)

## Files Structure

```
cv/
├── index.html              # Main HTML file (rarely needs editing)
├── portfolio-config.json   # Your content (edit this!)
└── README.md              # This guide
```
