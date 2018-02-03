# Atomic Algolia Serverless

A serverless function for updating one or more Algolia indices from JSON endpoints using a simple Webtask function.

## Installation

You must first have Node & NPM installed.

Once installed, run:

```
npm install serverless -g && npm install
```

## Configuration

This function needs the following to be configured:

* A `.env` file with your Algolia Application ID and secret access key.
* An `indexes.js` file with a list of your indexes and their JSON endpoints.

To create your `.env` file, run:

```
cp ./config/.env.stub ./config/.env
```

Then open up `config/.env` and provide the values for `ALGOLIA_APP_ID` and `ALGOLIA_ADMIN_KEY` from your Algolia account.

Next, open up `config/indexes.js` and update the example index with your actual Algolia index information. E.g,

```
[
    {
        name: "dist",
        url: "https://example.com/index.json"
    }
]
```

## Usage

To deploy this function in development mode, run:

```
serverless deploy
```

To deploy this function with production secrets, run:

```
serverless deploy --stage prod --ALGOLIA_APP_ID=YOUR_APP_ID --ALGOLIA_ADMIN_KEY=YOUR_ADMIN_KEY
```

## Creating a schedule

By default, this function will run every hour. You can update this as desired by opening up `serverless.yml`, and changing `functions.main.events.schedule`.

## Triggering from a Forestry webhook

When deploying the function, Serverless provides you with the Webtask endpoint that you can use to trigger the index update. To
