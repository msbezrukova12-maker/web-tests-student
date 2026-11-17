import { test, expect } from '@playwright/test';

test('пустая форма показывает ошибки email и пароля', async ({ page }) => {
  await page.goto('/');

  const openLogin = page.locator('[data-marker="login-button-desktop"]');
  await openLogin.click();

  const submit = page.locator('[data-marker="login-submit-button"]');
  await submit.click();

  const emailError = page.locator('[data-marker="email-error"]');
  const passwordError = page.locator('[data-marker="password-error"]');

  await expect(emailError).toHaveText('Email обязателен');
  await expect(passwordError).toHaveText('Пароль обязателен');
});
