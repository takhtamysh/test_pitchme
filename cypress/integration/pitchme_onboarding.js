describe('Pitch Me', () => {
  it('Sign up and onboarding', () => {
    cy.viewport(1440, 1080)
    cy.visit('https://pitchme.co/signup/candidate')
    cy.contains('Via email').click()
    var current_timestamp = Date.now()
    cy.get('input[name="first_name"]').type('John').should('have.value', 'John')
    cy.get('input[name="last_name"]').type('Doe').should('have.value', 'Doe')
    cy.get('input[name="email"]').type('John+' + current_timestamp + '@testic.com').should('have.value', 'John+' + current_timestamp + '@testic.com')
    cy.get('input[name="password"]').type('12345678').should('have.value', '12345678')

    cy.get('button[type="submit"]').click()
    cy.url().should('include', 'candidate/onboarding')
    cy.wait(4000)

    cy.get('input[type="text"]').type('QA').should('have.value', 'QA')
    cy.wait(500)
    cy.contains('QA (Quality Assurance) Specialist').click()
    cy.contains('Continue').click()
    cy.wait(2000)


    cy.get('input[type="text"]').type('Fin').should('have.value', 'Fin')
    cy.wait(500)
    cy.contains('Finance').click()
    cy.contains('Next').click()
    cy.wait(2000)

    cy.get('input[name="salary_current"]').type('100000').should('have.value', '100000')
    cy.contains('Next').click()
    cy.wait(4000)

    cy.get('#mui-13').type('Arm').should('have.value', 'Arm')
    cy.contains('Armenia').click()
    cy.wait(500)
    cy.get('#mui-15').type('Arm').should('have.value', 'Arm')
    cy.contains('Armenia').click()
    cy.contains('Next').click()
    cy.wait(2000)

    cy.contains('Alone').click()
    cy.contains('Details').click()
    cy.contains('Myself').click()
    cy.contains('Plan ahead').click()
    cy.contains('Next').click()
    cy.wait(2000)

    cy.get('button[type="submit"]').click()
    cy.contains('Add data manually').click()
    cy.wait(2000)

    cy.contains('Next').click()
    cy.wait(2000)

    cy.contains('Next').click()
    cy.wait(2000)

    cy.contains('Next').click()
    cy.wait(2000)

    cy.contains('Next').click()
    cy.wait(2000)

    cy.url().should('include', '/dashboard')


  })
})
