# End-to-End Testing Using Cypress/Include Docker Image With Environment Variable

```bash
docker run -it -v /$PWD://e2e -w //e2e cypress/included:7.7.0 \
           -e username=$TESTUSERNAME,password=$TESTPASSWORD

```
