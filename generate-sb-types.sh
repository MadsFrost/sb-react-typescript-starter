#!/bin/bash

# Check if .env file exists
if [ -f .env ]; then
  # Load environment variables from .env file
  export $(cat .env | xargs)
  
  # Check if VITE_STORYBLOK_SPACEID is set
  if [ -z "$VITE_STORYBLOK_SPACEID" ]; then
    echo "Error: VITE_STORYBLOK_SPACEID is not set in the .env file"
    exit 1
  fi
else
  echo "Error: .env file not found"
  exit 1
fi

# Make sure user is configured with the storyblok instance
npx storyblok login

# Pull components
npx storyblok pull-components --space $VITE_STORYBLOK_SPACEID

# Generate TypeScript schema
npx storyblok-generate-ts source="./components.$VITE_STORYBLOK_SPACEID.json" target="./src/components/components-schema"
