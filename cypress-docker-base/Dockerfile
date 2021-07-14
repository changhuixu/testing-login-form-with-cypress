FROM cypress/base

WORKDIR /e2e

# copy the test folder and related json files
COPY ./cypress ./cypress
COPY ./cypress.json .
COPY ./package.json .
COPY ./package-lock.json .

# install cypress npm package
ENV CI=1
RUN npm ci
RUN npm run cypress:verify

ENTRYPOINT ["npm", "run", "-s", "cypress:run"]