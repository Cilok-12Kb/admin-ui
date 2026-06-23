describe("User login", () => {
  it("should allow user to log in with valid credentials", () => {
    cy.viewport(375, 812)

    cy.visit("https://admin-ui-three-silk.vercel.app/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.get("nav");
    cy.get("header");
    cy.wait(5000);
  });

  it("should not allow user to log in with invalid credentials", () => {
    cy.viewport(550, 750)

    cy.visit("https://admin-ui-three-silk.vercel.app/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

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

    cy.get("button")
      .contains("Sign Up")
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