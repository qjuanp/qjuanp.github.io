SHELL := /bin/bash

run:
	bundle update
	bundle exec jekyll serve --drafts