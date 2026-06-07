import { expect, test, type Page } from "@playwright/test";

const projects = [
  { id: "buildmarket-store", title: "BuildMarket Store" },
  { id: "animated-saas-landing", title: "Animated SaaS Landing" },
  { id: "sales-analytics-dashboard", title: "Sales Analytics Dashboard" },
  { id: "booking-service-app", title: "Booking Service App" },
  { id: "bot-orders-crm", title: "Bot Orders CRM" },
  { id: "media-library-api-app", title: "Media Library API App" },
  { id: "price-tracker-dashboard", title: "Price Tracker Dashboard" },
  { id: "team-task-manager", title: "Team Task Manager" },
] as const;

function collectRuntimeErrors(page: Page) {
  const errors: string[] = [];

  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") {
      errors.push(message.text());
    }
  });

  return errors;
}

for (const locale of ["ru", "en"] as const) {
  test(`${locale.toUpperCase()} homepage renders without runtime or 404 errors`, async ({
    page,
  }) => {
    const runtimeErrors = collectRuntimeErrors(page);
    const response = await page.goto(`/${locale}`);

    expect(response?.status()).toBeLessThan(400);
    await expect(page).toHaveURL(new RegExp(`/${locale}/?$`));
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("#projects")).toBeVisible();
    await expect(page.getByText("404", { exact: true })).toHaveCount(0);
    expect(runtimeErrors).toEqual([]);
  });
}

test("desktop navigation reaches the expected page sections", async ({ page }) => {
  await page.goto("/en");

  const navigation = page.getByRole("navigation", {
    name: "Primary navigation",
  });

  for (const item of [
    { name: "About", hash: "#about" },
    { name: "Skills", hash: "#skills" },
    { name: "Projects", hash: "#projects" },
    { name: "Workflow", hash: "#workflow" },
  ]) {
    await navigation.getByRole("link", { name: item.name, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`${item.hash}$`));
    await expect(page.locator(item.hash)).toBeInViewport();
  }
});

test("language switcher changes RU to EN on the same portfolio page", async ({
  page,
}) => {
  await page.goto("/ru");
  await page
    .locator(".desktop-nav")
    .getByRole("link", { name: "Проекты", exact: true })
    .click();

  await page
    .locator(".header-actions")
    .getByRole("link", { name: "EN", exact: true })
    .click();

  await expect(page).toHaveURL(/\/en\/?(?:#projects)?$/);
  await expect(page.locator("#projects")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Project case studies" })).toBeVisible();
});

test("language switcher changes EN to RU on the same portfolio page", async ({
  page,
}) => {
  await page.goto("/en");
  await page
    .locator(".desktop-nav")
    .getByRole("link", { name: "Projects", exact: true })
    .click();

  await page
    .locator(".header-actions")
    .getByRole("link", { name: "RU", exact: true })
    .click();

  await expect(page).toHaveURL(/\/ru\/?(?:#projects)?$/);
  await expect(page.locator("#projects")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Проекты как кейсы" })).toBeVisible();
});

test("all eight project cards are present", async ({ page }) => {
  await page.goto("/en");

  for (const project of projects) {
    const card = page.locator(`#${project.id}`);
    await expect(card).toBeVisible();
    await expect(
      card.getByRole("heading", { name: project.title, exact: true }),
    ).toBeVisible();
  }
});

test("every project card has stable GitHub and live demo links", async ({
  page,
}) => {
  await page.goto("/en");

  for (const project of projects) {
    const card = page.locator(`#${project.id}`);
    const githubLink = card.getByRole("link", { name: /GitHub repository/ });
    const demoLink = card.getByRole("link", { name: /live demo/ });

    await expect(githubLink).toHaveAttribute(
      "href",
      /^https:\/\/github\.com\/Andrey15211\/[^/]+\/?$/,
    );
    await expect(demoLink).toHaveAttribute(
      "href",
      /^https:\/\/[a-z0-9-]+\.vercel\.app\/?$/,
    );

    for (const link of [githubLink, demoLink]) {
      await expect(link).toHaveAttribute("target", "_blank");
      await expect(link).toHaveAttribute("rel", /noreferrer/);
    }
  }
});

test("every project card links to its localized case study", async ({ page }) => {
  await page.goto("/en");

  for (const project of projects) {
    await expect(
      page.locator(`#${project.id}`).getByRole("link", {
        name: "Case Study",
        exact: true,
      }),
    ).toHaveAttribute("href", `/en/projects/${project.id}`);
  }
});

for (const locale of ["ru", "en"] as const) {
  for (const project of projects) {
    test(`${locale.toUpperCase()} ${project.id} case study is complete`, async ({
      page,
    }) => {
      const response = await page.goto(`/${locale}/projects/${project.id}`);

      expect(response?.status()).toBeLessThan(400);
      await expect(
        page.getByRole("heading", { name: project.title, exact: true }),
      ).toBeVisible();

      const sectionNames =
        locale === "ru"
          ? [
              "Задача",
              "Решение",
              "Ключевые функции",
              "Стек технологий",
              "Что демонстрирует проект",
              "Чек-лист качества",
              "Ссылки",
            ]
          : [
              "Problem",
              "Solution",
              "Key Features",
              "Tech Stack",
              "What it demonstrates",
              "Quality checklist",
              "Links",
            ];

      for (const name of sectionNames) {
        await expect(
          page.getByRole("heading", { name, exact: true }),
        ).toBeVisible();
      }

      await expect(
        page.getByRole("link", {
          name: locale === "ru" ? "Назад к проектам" : "Back to projects",
          exact: true,
        }),
      ).toHaveAttribute("href", `/${locale}#projects`);
      await expect(
        page.getByRole("link", { name: /GitHub/, exact: true }).first(),
      ).toHaveAttribute("target", "_blank");
    });
  }
}

test("case study language switcher preserves the project slug", async ({
  page,
}) => {
  await page.goto("/ru/projects/buildmarket-store");
  await page
    .locator(".header-actions")
    .getByRole("link", { name: "EN", exact: true })
    .click();

  await expect(page).toHaveURL(/\/en\/projects\/buildmarket-store$/);
  await expect(
    page.getByRole("heading", { name: "Solution", exact: true }),
  ).toBeVisible();
});

test("unknown case study slug returns 404", async ({ page }) => {
  const response = await page.goto("/en/projects/not-a-project");

  expect(response?.status()).toBe(404);
});

test("case study remains readable without horizontal overflow on mobile", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/ru/projects/sales-analytics-dashboard");

  await expect(
    page.getByRole("heading", {
      name: "Sales Analytics Dashboard",
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Чек-лист качества", exact: true }),
  ).toBeVisible();

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(hasHorizontalOverflow).toBe(false);
});

test("mobile layout has no horizontal overflow and exposes navigation", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/ru");

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(hasHorizontalOverflow).toBe(false);

  const menuButton = page.locator('button[aria-controls="mobile-navigation"]');
  await expect(menuButton).toBeVisible();
  await expect(menuButton).toHaveAccessibleName("Открыть меню навигации");
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");

  await menuButton.click();

  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  await expect(menuButton).toHaveAccessibleName("Закрыть меню навигации");
  const mobileNavigation = page.getByRole("navigation", {
    name: "Мобильная навигация",
  });
  await expect(mobileNavigation).toBeVisible();
  await expect(
    mobileNavigation.getByRole("link", { name: "Проекты", exact: true }),
  ).toBeVisible();
});
