# Deployment Guide for prasadcashew.com (Custom Domain)

Since you are hosting your files on GitHub but want your **own domain name** (`prasadcashew.com`) instead of `github.io`, follow these exact steps.

## 1. Upload the Files
- Push all files from the `/Users/anuprasad/Desktop/website` folder to your GitHub repository (e.g., `case-website`).

## 2. Point your Domain to GitHub (DNS Settings)
You need to log into your Domain Provider (where you bought prasadcashew.com) and set these **DNS Records**:

### A. Configure IP Addresses (A Records)
Create 4 'A' records pointing to these GitHub IP addresses:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

### B. Configure the CNAME Record
Create a CNAME record for the `www` subdomain:
- **Host:** `www`
- **Value:** `your-username.github.io` (Replace `your-username` with your actual GitHub username).

## 3. Finalize in GitHub Settings
1. Go to your GitHub Repository $ightarrow$ **Settings** $ightarrow$ **Pages**.
2. Under **Custom Domain**, type `prasadcashew.com`.
3. Click **Save**.
4. **CRITICAL:** Check the box that says **"Enforce HTTPS"**. This ensures your site shows the secure lock icon $\square$.

## 4. Result
Now, when anyone types `prasadcashew.com`, GitHub will serve the high-end website I built for you, but the user will only see your professional domain name.
