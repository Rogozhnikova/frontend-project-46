install:
	npm ci
link:
	sudo npm link
gendiff:
	node bin/gendiff.js
prettier:
	npx prettier --write "{bin, src, __tests__, __fixtures__}/**/*"
lint: 
	npx eslint .
test:
	npm test
test-coverage:
	npm test -- --coverage --coverageProvider=v8