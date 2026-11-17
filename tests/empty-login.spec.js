import { test, expect } from '@playwright/test';

test('пустая форма показывает ошибки email и пароля', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Вход и Регистрация' }).click();

  await page.locator('[data-marker="login-submit-button"]').click();

  await expect(page.locator('[data-marker="email-error"]'))
    .toHaveText('Неверный email');

  await expect(page.locator('[data-marker="password-error"]'))
    .toHaveText('Пароль обязателен');
});
