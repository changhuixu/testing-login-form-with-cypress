# Build a Docker Image Based on Cypress/Base With Environment Variable

```bash
# copy files to this folder
cp -r ../e2e/cypress .
cp ../e2e/cypress.json .
cp ../e2e/package.json .
cp ../e2e/package-lock.json .

# build the image
docker build -t login-e2e-cypress .
```

```bash
#run the e2e tests in a container
docker run -it login-e2e-cypress -- -e username=$TESTUSERNAME,password=$TESTPASSWORD
```
