# Accessibility Verification Report

## Validation Context

- **Feature:** BuddhiAI CLI official website and user guide
- **Test date:** 2026-10-30
- **Covers:** Working tree after the CLI-only site build; no commit was created
- **Standard:** WCAG 2.2 AA, Standard profile
- **Standard version:** 2.5.0 — `.agents/skills/a11y/SKILL.md`
- **Compliance Status:** CONDITIONAL. Browser checks and the measured color pairs below passed; assistive-technology testing remains outstanding.
- **Verification independence:** Self-reported in the implementation session
- **Static gate (`verify-a11y.py`):** PASS with warnings (0 errors, 47 warnings) — run on: 2026-10-30 using the BuddhiAI CLI virtual environment against `src/`.

## 1. Technical verification

- [~] **Axe or Lighthouse:** Not run.
- [x] **Rendered landmarks:** Browser accessibility snapshots show the skip link, header, navigation, main content, and labeled search dialog on the inspected routes.
- [~] **Heading hierarchy:** A generated-HTML check found exactly one `<h1>` on each of the 14 routes; subordinate heading order was not automated.

## 2. Keyboard and focus

- [x] **Focus styling:** Focus-visible outlines are present for the menu and theme control. The dark focus ring measures 11.285:1 on the dark body; the light focus ring measures 5.953:1 on the light body.
- [~] **Mobile menus:** Browser checks confirmed both menus open, reflect expanded state, and close with focus restored. The final keyboard-event path was not independently exercised by this browser automation run.
- [x] **Search dialog:** Search results appeared for `MCP`; Escape closed the dialog and restored focus to the trigger.
- [~] **Full tab order and dialog focus containment:** Not exhaustively tested.

## 3. Behavior and assistive technology

- [ ] **Screen reader:** No screen-reader and browser pair was tested.
- [~] **Voice control:** Accessible names were checked in the browser snapshot; voice activation was not tested.
- [x] **Interactive paths:** The installation CTA navigated to `/cli/installation/`; the theme toggle switched to light mode; the 404 page rendered its recovery link; no page JavaScript errors were observed.
- [~] **Search announcements:** Search results were observed visually, but their announcements were not tested with a screen reader.

## 4. Visual perception

The measured pairs were computed with the WCAG relative-luminance formula. The source pair matrix is recorded in `A11Y-DECISIONS.md`.

| Pair | Ratio | Floor | Result |
| :--- | ---: | ---: | :--- |
| Dark body text `#999999` on `#0D0D0D` | 6.822:1 | 4.5:1 | PASS |
| Dark focus ring `#E0BEB4` on `#0D0D0D` | 11.285:1 | 3:1 | PASS |
| Dark accent link `#E5C7BF` on `#0D0D0D` | 12.266:1 | 4.5:1 | PASS |
| White `#FFFFFF` on gradient start `#AB4E35` | 5.423:1 | 4.5:1 | PASS |
| White `#FFFFFF` on primary gradient stop `#A7452A` | 5.953:1 | 4.5:1 | PASS |
| White `#FFFFFF` on gradient end `#B25B44` | 4.695:1 | 4.5:1 | PASS |
| Gradient start `#AB4E35` on dark body `#0D0D0D` | 3.584:1 | 3:1 | PASS |
| Primary gradient stop `#A7452A` on dark body `#0D0D0D` | 3.265:1 | 3:1 | PASS |
| Gradient end `#B25B44` on dark body `#0D0D0D` | 4.140:1 | 3:1 | PASS |
| Light body text `#000000` on `#FFFFFF` | 21.000:1 | 4.5:1 | PASS |
| Light focus ring `#A7452A` on `#FFFFFF` | 5.953:1 | 3:1 | PASS |
| Light primary link `#A7452A` on `#FFFFFF` | 5.953:1 | 4.5:1 | PASS |
| Dark CTA body text `#999999` on `#151515` | 6.410:1 | 4.5:1 | PASS |
| Light CTA body text `#000000` on `#F7F7F7` | 19.602:1 | 4.5:1 | PASS |

- [~] **Full-site text and control-pair inventory:** The key brand, body, CTA, and focus pairs above pass; no automated page-wide contrast scan was available.
- [x] **Reflow:** Earlier browser checks passed at 320, 375, 768, 1024, and 1440 CSS pixels. A 375-pixel viewport was rechecked after the CTA cleanup with no horizontal overflow.
- [~] **200% text resize:** Not directly tested.

## 5. Motion and media

- **Media:** No audio or video is part of the inspected public routes.
- [~] **Reduced motion:** Not separately tested.

## 6. Known validation gaps

- The static gate passed with warnings. Its source scan cannot resolve the sidebar control target across component files, and it reports computed `color-mix()` tokens as absent literals; the target exists in the rendered page, and the token results are measured above.
- Complete a keyboard-only pass across every route and a screen-reader pass with a named browser and reader.
- Test 200% zoom and inspect focus and non-text contrast across all interactive states.

## 7. Visual screenshot review

- Reviewed the current homepage and installation guide in live desktop and mobile browser viewports. The navigation, hero, article content, and code examples remain visible and readable; no clipping or horizontal overflow was reproduced.
- An unprimed critique of saved screenshot files reported apparent right-side blank space and clipped mobile content. Their framing did not match the direct live viewport captures, so the findings are unconfirmed capture artifacts rather than actionable site defects.
- Adversarial check: the homepage hero and search occupy much of the initial mobile view, and the installation guide has more heading and paragraph wrapping at mobile widths. In the live captures, both remain readable and the guide content is not cut off; no change was justified.
- A fresh critique with correctly attached live viewport images remains desirable because the available task interface could pass image paths but not direct browser screenshot attachments.
