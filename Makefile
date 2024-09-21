install:
	npm ci
link:
	sudo npm link
gendiff:
	node bin/gendiff.js
lint: 
	npx eslint .
test:
	npm test
test-coverage:
	npm run test:coverage