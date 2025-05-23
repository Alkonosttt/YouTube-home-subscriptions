# YouTube Homepage to Subscriptions Redirect script

## How it works

1. Gets the current URL and checks whether or not it's the YouTube Homepage using a regex expression:
`/^https:\/\/(www\.)?youtube\.com\/?(?:\?.*)?$/;`.
2. If the current URL marches the YouTube Homepage address, redirects the page to YouTube Subscriptions feed (`window.location.replace(subscriptionsUrl);`) and adds a console.log.

## Installation instructions

1. **Open TamperMonkey Dashboard**

* Click the TamperMonkey icon in your browser's toolbar.

* Choose "**Dashboard**" from the dropdown menu.

2. **Copy and paste the script**

* In the dashboard, click the "+" (plus) button or “**Create a new script**” in the top-left corner.

* Select all (**Ctrl + A**/**Cmd + A**) and paste the copied script.

3. **Save the script**

Click **File** → **Save**, or press **Ctrl + S**/**Cmd + S**.

4. **Enable the script**

Make sure it's toggled **ON** in your dashboard.

5. **Visit YouTube**

Visit YouTube to check that the script runs as expected.