# Cypress CLI With Environment Variable

```bash

npm run -s cypress:run -- --env username=tomsmith,password=SuperSecretPassword!
$(npm bin)/cypress run --env username=tomsmith,password=SuperSecretPassword!

export TESTUSERNAME="tomsmith";
export TESTPASSWORD="SuperSecretPassword!";
----> save in ~/.bashrc || save as user environment variable in OS || save in CI platform

$(npm bin)/cypress run -e username=$TESTUSERNAME,password=$TESTPASSWORD

npm run -s cypress:run -- -e username=$TESTUSERNAME,password=$TESTPASSWORD
```

```bash
export CYPRESS_username="tomsmith"
export CYPRESS_password="SuperSecretPassword!"
----> save in ~/.bashrc || save as user environment variable in OS || save in CI platform

$(npm bin)/cypress run
npm run cypress:run
```
