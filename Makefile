install:
	npm install
brain-games:
	node bin/games/brain-games.js
even-games:
	node bin/games/brain-even.js
brain-calc:
	node bin/games/brain-calc.js
lint:
	npx eslint .
publishing:
	npm publish --dry-run
	