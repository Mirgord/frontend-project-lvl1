install:
	npm install
brain-games:
	node bin/brain-games.js
even-games:
	node bin/brain-even.js
brain-calc:
	node bin/brain-calc.js
lint:
	npx eslint .
publishing:
	npm publish --dry-run
	