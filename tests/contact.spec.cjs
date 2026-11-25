const { test, expect } = require('@playwright/test');

test.describe('ContactSection (landing)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('section[aria-labelledby="contact-title"]');
  });

  test('rendered above footer with visible fields and submit button', async ({ page }) => {
    const section = await page.locator('section[aria-labelledby="contact-title"]');
    expect(await section.count()).toBe(1);

    const footer = await page.locator('footer');
    const sectionBox = await section.boundingBox();
    const footerBox = await footer.boundingBox();
    expect(sectionBox.y + sectionBox.height).toBeLessThanOrEqual(footerBox.y + 1);

    await expect(page.locator('#contact-name')).toBeVisible();
    await expect(page.locator('#contact-email')).toBeVisible();
    await expect(page.locator('#contact-topic')).toBeVisible();
    await expect(page.locator('#contact-message')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('blocks submit and shows accessible errors when required fields empty or whitespace', async ({ page }) => {
    await page.fill('#contact-name', '   ');
    await page.fill('#contact-email', '   ');
    await page.fill('#contact-message', '   ');
    await page.click('button[type="submit"]');

    const alerts = page.locator('section[aria-labelledby="contact-title"] [role="alert"]');
    await expect(alerts).toHaveCount(3);
    await expect(alerts.nth(0)).toHaveText(/Por favor informe seu nome/);
    await expect(alerts.nth(1)).toHaveText(/Por favor informe um e-?mail/);
    await expect(alerts.nth(2)).toHaveText(/Escreva sua dúvida/);
  });

  test('blocks submit and shows email validation error for invalid email', async ({ page }) => {
    await page.fill('#contact-name', 'Teste');
    await page.fill('#contact-email', 'invalid-email');
    await page.fill('#contact-message', 'Oi');
    await page.click('button[type="submit"]');

    const emailError = page.locator('#contact-email-error');
    await expect(emailError).toBeVisible();
    await expect(emailError).toHaveText(/E-?mail inválido/);
  });

  test('successful submit clears fields and shows confirmation', async ({ page }) => {
    await page.fill('#contact-name', 'Fulano');
    await page.fill('#contact-email', 'fulano@example.com');
    await page.selectOption('#contact-topic', 'suporte');
    await page.fill('#contact-message', 'Preciso de ajuda.');
    await page.click('button[type="submit"]');

    // confirmation role=status
    const status = page.locator('section[aria-labelledby="contact-title"] [role="status"]');
    await expect(status).toBeVisible();
    await expect(status).toHaveText(/Sua dúvida foi enviada/);

    await expect(page.locator('#contact-name')).toHaveValue('');
    await expect(page.locator('#contact-email')).toHaveValue('');
    await expect(page.locator('#contact-message')).toHaveValue('');
  });
});
