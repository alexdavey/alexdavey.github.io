# Alex Davey — academic website

Personal academic website for Alex Davey, postdoctoral researcher at Inria TAU
and Université Paris-Saclay.

The site is three static files in the jemdoc style:

- `index.html`: the page
- `jemdoc.css`: the stylesheet
- `portrait.jpg`: the profile photo

To add a publication, copy an existing `<li>` block in `index.html` and edit it.

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 3000
```

## Deployment

The workflow in `.github/workflows/deploy-pages.yml` publishes the three files
to GitHub Pages whenever `main` is updated. There is no build step.

In the repository settings, **Pages → Build and deployment → Source** must be
set to **GitHub Actions**. The site is available at:

<https://alexdavey.github.io>
