require('cypress-plugin-tab');
import 'cypress-xpath';

let tiempo=2500

describe('Login Tests', () => {
  
  afterEach(function() {
    if (this.currentTest.state === 'passed') {
      cy.log(`✅ Test Passed: ${this.currentTest.title}`);
    } else {
      cy.log(`❌ Test Failed: ${this.currentTest.title}`);
      cy.log(`Reason: ${this.currentTest.err.message}`);
    }
  });

  it('Login Fall', () => {
    cy.visit("https://demoqa.com/login", { timeout: 60000 });

    cy.xpath("//input[@id='userName']").type("Laurayineth123");
    cy.xpath("//input[@id='password']").type("Laurayinet*");
    cy.xpath("//button[@id='login']").click();

    // Validar mensaje de error
    cy.get('#name').should('contain.text', 'Invalid username or password');
  });

  it('Login Successful and Navigate to Profile', () => {
    cy.visit("https://demoqa.com/login");

    cy.xpath("//input[@id='userName']").type("Laurayineth123");
    cy.xpath("//input[@id='password']").type("Laurayineth1993*");
    cy.xpath("//button[@id='login']").click();

    // ✅ Esperar que la URL cambie al perfil
    cy.url().should('include', '/profile');

    // ✅ Validar que el botón "Log out" está visible (indica que el login fue exitoso)
    cy.xpath("//button[text()='Log out']", { timeout: 10000 }).should('be.visible');

    // ✅ Validar el username dinámico
    cy.xpath("//label[@id='userName-value']")
      .should('have.text', 'Laurayineth123');
  });
});

// -----------------------------------------------------------------------------------------------

describe('Form Crud', () => {
  it('New registration', () => {
    cy.visit("https://validaciones.rodrigovillanueva.com.mx/Datatables2_ok.html", { timeout: 60000 });

    cy.xpath("//button[@id='btnAdd']").click()
    cy.xpath("//input[@id='nombre']").should('be.visible').type('Laura');
    cy.xpath("//input[@id='edad']").should('be.visible').type('32');
    cy.xpath("//button[@id='btnSubmit']").click()

    //Edit
    cy.xpath("//tr[@class='even']//button[@class='btn btn-warning btnEdit']").click()
    cy.xpath("//input[@id='nombre']").clear()
    cy.xpath("//input[@id='nombre']")
      .clear()
      .wait(500) // ✅ Espera breve después de limpiar
      .click()
      .focused() // ✅ Asegura foco
      .type('Lina', { delay: 500, force: true }); // ✅ Escribe con delay

    cy.xpath("//input[@id='edad']").clear()
    cy.xpath("//input[@id='edad']").should('be.visible').type('50');
    cy.xpath("//button[@id='btnSubmit']").click()
    
    //Delete
    cy.wait(2000);
    cy.xpath("//tr[@class='even']//button[@class='btn btn-danger btnDelete']").click()
    
  });
  
});

//.......................................................................................................

describe('Create 10 random users', () => {
  it('Create multiple records', () => {
    cy.visit("https://validaciones.rodrigovillanueva.com.mx/Datatables2_ok.html", { timeout: 60000 });

    for (let i = 0; i < 10; i++) {
      // Generar nombre y edad aleatoria
      const randomName = `User${Math.floor(Math.random() * 1000)}`;
      const randomAge = Math.floor(Math.random() * (60 - 18 + 1)) + 18; // Entre 18 y 60

      // Click en agregar registro
      cy.xpath("//button[@id='btnAdd']").click();

      // Llenar los campos con delay para evitar errores
      cy.xpath("//input[@id='nombre']")
        .should('be.visible')
        .clear()
        .wait(200) // Espera para asegurarse que el campo quedó vacío
        .type(randomName, { delay: 150 }); // Escribe más lento

      cy.xpath("//input[@id='edad']")
        .should('be.visible')
        .clear()
        .wait(100)
        .type(randomAge.toString(), { delay: 150 });

      // Guardar
      cy.xpath("//button[@id='btnSubmit']").click();

      // Espera breve entre cada registro
      cy.wait(1000);
    }
  });
});