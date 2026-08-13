import { setWorldConstructor, type IWorldOptions, World } from "@cucumber/cucumber";
import type { Browser, BrowserContext, Page } from "@playwright/test";
import { AppointmentsPage } from "../pages/appointments-page";
import { DashboardPage } from "../pages/dashboard-page";
import { LayoutPage } from "../pages/layout-page";
import { LoginPage } from "../pages/login-page";
import { PatientSearchPage } from "../pages/patient-search-page";
import { RegressionPage } from "../pages/regression-page";
import { Step41Page } from "../pages/step41-page";

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  scenarioName = "";
  tags: string[] = [];
  startedAt = "";

  loginPage!: LoginPage;
  layoutPage!: LayoutPage;
  dashboardPage!: DashboardPage;
  patientSearchPage!: PatientSearchPage;
  appointmentsPage!: AppointmentsPage;
  regressionPage!: RegressionPage;
  step41Page!: Step41Page;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
