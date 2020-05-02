# End-to-End Testing for a Login Form Using Cypress

## [Medium Article]()

## Folder Structure

- `e2e`

  Contains an e2e test for a login process, which requires a username and password.

  We will use environment variables to protect the credentials form leaking to a code repository.

- `cypress-docker-include`

  An example command to run tests using the `cypress/included` image.

- `cypress-docker-base`

  An example `Dockerfile` to build an image based on the `cypress/base` image.

---

![login form](./login-form.png)
