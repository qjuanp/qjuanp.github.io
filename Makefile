SHELL := /bin/bash

run:
	bundle update
	bundle exec jekyll serve --drafts --watch

debug:
	bundle update
	bundle exec jekyll serve --drafts --watch --trace