describe("User login", () => {
  it("should allow user to log in with valid credentials", () => {
    cy.viewport(375, 812)

    cy.visit("https://admin-ui-three-silk.vercel.app/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("111202315275@mhs.dinus.ac.id")
      .should("have.value", "111202315275@mhs.dinus.ac.id");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.get("nav", { timeout: 10000 }).should("be.visible");
    cy.get("header", { timeout: 10000 }).should("be.visible");
  });

  it("should not allow user to log in with invalid credentials", () => {
    cy.viewport(550, 750)

    cy.visit("https://admin-ui-three-silk.vercel.app/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("111202315275@mhs.dinus.ac.id")
      .should("have.value", "111202315275@mhs.dinus.ac.id");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123")
      .should("have.value", "123");

    cy.get("button").contains("Login").click();

    cy.get("div").contains("Wrong Password");
  });

  it("should display register page content correctly and accept valid input", () => {
    cy.viewport(375, 812);

    cy.visit("https://admin-ui-three-silk.vercel.app/register");

    cy.url().should("include", "/register");

    cy.get("span")
      .contains("Create an account")
      .should("be.visible");

    cy.get("input#name")
      .should("be.visible")
      .should("have.attr", "placeholder", "Tazir Rahman")
      .type("John Doe")
      .should("have.value", "John Doe");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("johndoe@example.com")
      .should("have.value", "johndoe@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .should("have.attr", "type", "password")
      .type("securepassword123")
      .should("have.value", "securepassword123");

    cy.get("span")
      .contains("By continuing, you agree to our")
      .should("be.visible");

    cy.get("span")
      .contains("terms of service.")
      .should("be.visible");

    // sebelumnya "Sign Up", sudah diganti jadi "Register" di Soal 2
    cy.get("button")
      .contains("Register")
      .should("be.visible")
      .should("not.be.disabled");

    cy.get("div")
      .contains("or sign up with")
      .should("be.visible");

    cy.get("button")
      .contains("Continue with Google")
      .should("be.visible");

    cy.get("span")
      .contains("Already have an account?")
      .should("be.visible");

    cy.get("a")
      .contains("Sign in here")
      .should("be.visible")
      .should("have.attr", "href", "/login");
  });
});

describe("Register - Duplicate and New Email", () => {
  it("should show error notification when registering with an already used email", () => {
    cy.viewport(375, 812);

    cy.visit("https://admin-ui-three-silk.vercel.app/register");
    cy.url().should("include", "/register");

    cy.get("input#name").type("Muhammad");

    // email mahasiswa yang sudah terdaftar di database
    cy.get("input#email").type("111202315275@mhs.dinus.ac.id");

    cy.get("input#password").type("123456");

    cy.get("button").contains("Register").click();

    // tombol sempat berubah jadi "Loading..." saat proses submit
    cy.get("button").contains("Loading...");

    // snackbar error muncul
    cy.contains("Email sudah pernah digunakan sebelumnya", { timeout: 10000 })
      .should("be.visible");
  });

  it("should show success notification when registering with a new email", () => {
    cy.viewport(375, 812);

    cy.visit("https://admin-ui-three-silk.vercel.app/register");
    cy.url().should("include", "/register");

    cy.get("input#name").type("Muhammad Baru");

    // email baru/acak supaya selalu dianggap belum terdaftar tiap kali test dijalankan
    const newEmail = `testuser${Date.now()}@example.com`;
    cy.get("input#email").type(newEmail);

    cy.get("input#password").type("123456");

    cy.get("button").contains("Register").click();

    cy.get("button").contains("Loading...");

    // snackbar success muncul
    cy.contains("Register Berhasil", { timeout: 10000 })
      .should("be.visible");
  });
});

describe("Dashboard - Overview Page", () => {
  it("should display all main sections when user accesses the dashboard", () => {
    cy.viewport(1280, 800);

    cy.visit("https://admin-ui-three-silk.vercel.app/login");
    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .type("111202315275@mhs.dinus.ac.id")
      .should("have.value", "111202315275@mhs.dinus.ac.id");

    cy.get("input#password")
      .should("be.visible")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.url({ timeout: 10000 }).should("eq", "https://admin-ui-three-silk.vercel.app/");

    cy.get("nav", { timeout: 10000 }).should("be.visible");
    cy.contains("Overview").should("be.visible");
    cy.contains("Balances").should("be.visible");
    cy.contains("Transaction").should("be.visible");
    cy.contains("Bills").should("be.visible");
    cy.contains("Expenses").should("be.visible");
    cy.contains("Goals").should("be.visible");
    cy.contains("Settings").should("be.visible");

    cy.get("header").should("be.visible");

    cy.contains("Total Balance").should("be.visible");
    cy.contains("Goals").should("be.visible");
    cy.contains("Upcoming Bill").should("be.visible");
    cy.contains("Recent Transaction").should("be.visible");
    cy.contains("Statistics").should("be.visible");
    cy.contains("Expenses Breakdown").should("be.visible");
  });
});

describe("Dark Mode & Theme Switching", () => {
  it("should toggle dark mode on the login page", () => {
    cy.viewport(375, 812);
    cy.visit("https://admin-ui-three-silk.vercel.app/login");

    // awalnya light mode - elemen <main> belum punya class "dark"
    cy.get("main").should("not.have.class", "dark");

    // klik toggle - mode berubah jadi dark
    cy.get('[data-testid="dark-mode-toggle"]').click();
    cy.get("main").should("have.class", "dark");

    // klik lagi - balik ke light mode
    cy.get('[data-testid="dark-mode-toggle"]').click();
    cy.get("main").should("not.have.class", "dark");
  });

  it("should toggle dark mode on the dashboard and switch color theme", () => {
    cy.viewport(1280, 800);

    cy.visit("https://admin-ui-three-silk.vercel.app/login");

    cy.get("input#email").type("111202315275@mhs.dinus.ac.id");
    cy.get("input#password").type("123456");
    cy.get("button").contains("Login").click();

    cy.url({ timeout: 10000 }).should("eq", "https://admin-ui-three-silk.vercel.app/");

    // toggle dark mode di sidebar
    cy.get('[data-testid="dark-mode-toggle-sidebar"]').click();
    cy.get(".dark").should("exist");

    // ganti tema warna jadi biru
    cy.get('[data-testid="theme-theme-blue"]').click();
    cy.get(".theme-blue").should("exist");

    // ganti tema warna jadi ungu
    cy.get('[data-testid="theme-theme-purple"]').click();
    cy.get(".theme-purple").should("exist");
  });
});

describe("Expenses Page", () => {
  it("should open the expenses page and display category cards", () => {
    cy.viewport(1280, 800);

    cy.visit("https://admin-ui-three-silk.vercel.app/login");

    cy.get("input#email").type("111202315275@mhs.dinus.ac.id");
    cy.get("input#password").type("123456");
    cy.get("button").contains("Login").click();

    cy.url({ timeout: 10000 }).should("eq", "https://admin-ui-three-silk.vercel.app/");

    // klik menu Expenses di sidebar
    cy.contains("Expenses").click();

    cy.url().should("include", "/expense");

    cy.contains("Expenses Comparison", { timeout: 10000 }).should("be.visible");

    // pastikan minimal satu kategori pengeluaran tampil (data dari API)
    cy.contains("Housing", { timeout: 10000 }).should("be.visible");
    cy.contains("Food").should("be.visible");
  });
});