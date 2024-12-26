'use client'

// ThemeSelect.jsx
import { useTheme } from 'next-themes'

export function ThemeSelect() {
  // setTheme() from useTheme() from next-themes can be implemnted in any function triggered by any element or greater function. 'light' and 'dark' and 'system' are defaults, you can also create custom themes using next-themes and tailwind
  const { theme, setTheme } = useTheme();

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
}