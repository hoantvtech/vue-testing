describe("Login Test Case", () => {
  it("should validate username and password", () => {
    cy.visit("/login");
    cy.get("form button").click();
    cy.contains("Please input your username!");
    cy.contains("Please input your password1!");
  });

  it("should login successfully!", () => {
    cy.visit("/login");
    cy.get("#basic_username").type("admin");
    cy.get("#basic_password").type("admin");
    cy.get("form button").click();
  });
});
