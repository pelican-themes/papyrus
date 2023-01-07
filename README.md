# Papyrus

>This project is based on [hugo-PaperMod](https://github.com/adityatelange/hugo-PaperMod) which is a fork of [hugo-paper](https://github.com/nanxiaobei/hugo-paper). The goal of the project is to make a replica theme that works under Pelican site generator.

A fast and responsive theme built for the [Pelican](https://blog.getpelican.com/) site generator. It is styled using [Tailwind CSS](https://tailwindcss.com/). It supports dark mode and built in search function. 

### Demo
Live-Demo at [https://aleylara.github.io/Papyrus](https://aleylara.github.io/Papyrus)

### Installation
The theme requires the [pelican-search](https://github.com/pelican-plugins/search), [pelican-neighbors](https://github.com/pelican-plugins/neighbors), [pelican-readtime](https://github.com/JenkinsDev/pelican-readtime) and [pelican-toc](https://github.com/ingwinlu/pelican-toc) plugins. First three plugins can be installed using `pip`. Pelican-toc will be installed manually. We will also need [stork](https://stork-search.net/) and `beautifulsoup4` as dependencies.

```bash
$ pip install pelican-search
$ pip install pelican-neighbors
$ pip install pelican-readtime
```
Create two directories `themes` and `pelican-plugins` inside the root level of your project. Clone the Papyrus theme inside the `themes` directory that you created.

```bash 
$ cd myBlog
$ mkdir themes
$ cd themes
$ git clone https://github.com/aleylara/Papyrus.git
```

Now clone the pelican-toc plugin repo (not available via pip) into your pelican-plugins directory and install `beautifulsoup4` that is required by this plugin.

```bash
$ mkdir pelican-plugins
$ cd pelican-plugins
$ git clone https://github.com/ingwinlu/pelican-toc.git
$ pip install beautifulsoup4
```
Papyrus theme is already setup for your search functionality. However you will still need to have the `stork` package installed in your operating system. Verify [stork](https://stork-search.net/) is in your path by `stork -h` otherwise go ahead and install it.

```bash
# Install using Homebrew
$ brew install stork-search/stork-tap/stork

# Install using the Rust toolchain and install Stork with Cargo 
$ cargo install stork-search --locked
```

### Settings
This is the `pelicanconf.py` settings file for the demo site, please change values to meet your needs.

```python
AUTHOR = 'Author'
SITENAME = 'Papyrus'
SITEURL = 'http://localhost:8000'
TIMEZONE = 'Australia/Sydney'
DEFAULT_LANG = 'en'

SUBTITLE = 'Papyrus'
SUBTEXT = '''A fast and responsive theme built for the <a class="underline" 
href="https://blog.getpelican.com/">Pelican</a> site generator.<br>
The theme is inspired from <a class="underline" 
href="https://github.com/adityatelange/hugo-PaperMod">Hugo-PaperMod</a>. 
It is styled using <a class="underline" 
href="https://tailwindcss.com/">Tailwind CSS</a>. 
It supports dark mode and built in search function.
'''
COPYRIGHT = '©2022'
PATH = 'content'
THEME = 'themes/Papyrus'
THEME_STATIC_PATHS = ['static']
PLUGIN_PATHS = ['pelican-plugins']
PLUGINS = ['readtime', 'search', 'neighbors', 'pelican-toc']

DISPLAY_PAGES_ON_MENU = True
DIRECT_TEMPLATES = (('index', 'search', 'tags', 'categories', 'archives',))
PAGINATED_TEMPLATES = {'index':None,'tag':None,'category':None,'author':None,'archives':24,}

# Site search plugin
SEARCH_MODE = "output"
SEARCH_HTML_SELECTOR = "main"
# Table of Content Plugin
TOC = {
    'TOC_HEADERS'       : '^h[1-3]', # What headers should be included in
                                     # the generated toc
                                     # Expected format is a regular expression
    'TOC_RUN'           : 'true',    # Default value for toc generation,
                                     # if it does not evaluate
                                     # to 'true' no toc will be generated
    'TOC_INCLUDE_TITLE': 'false',    # If 'true' include title in toc
}

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None
RSS_FEED_SUMMARY_ONLY = True

# Social widgets
SOCIAL = (
    ('github', 'https://github.com/aleylara/Papyrus'),
    ('twitter', 'https://twitter.com/'),
)

# Article share widgets
SHARE = (
    ("twitter", "https://twitter.com/intent/tweet/?text=Features&amp;url="),
    ("linkedin", "https://www.linkedin.com/sharing/share-offsite/?url="),
    ("reddit", "https://reddit.com/submit?url="),
    ("facebook", "https://facebook.com/sharer/sharer.php?u="),
    ("whatsapp", "https://api.whatsapp.com/send?text=Features - "),
    ("telegram", "https://telegram.me/share/url?text=Features&amp;url="),
)

DEFAULT_PAGINATION = 8

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

# DISQUS_SITENAME = ''
# GOOGLE_ANALYTICS = ''
```

### Generate Articles
A sample article header is below. Adding a `Summary` field is highly recommended. It substitutes as the article decription and gets added into html `<meta name="description" content="...">`. Summaries are also used in blog's home page. They help to keep similar height article previews without titles, images or code blocks.

```markdown
Title: Installation
Date: 2021-12-14
Tags: CSS, Markdown, Python, AI
Category: Software
Summary: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.
```

Articles created inside directory named `pages` will have a separate static page and a direct link similar to the `About` page in the demo.

You can now run the development server and visit the `http://localhost:8000`

```bash
cd myBlog
$ pelican --autoreload --listen --ignore-cache
```

Final project directory structure should look similar to this. 

```bash
$ (pelican) ➜ myProject tree
├── myBlog
│   ├── content
│   │   ├── images
│   │   │   └── camera.png
│   │   ├── pages
│   │   │   ├── about.md
│   │   │   └── events.md
│   │   ├── Hardware
│   │   │   ├── article-one.md
│   │   │   └── article-two.md
│   │   └── Software
│   │       ├── article-three.md
│   │       └── article-four.md
│   ├── Makefile
│   ├── output
│   │
│   ├── pelicanconf.py
│   ├── pelican-plugins
│   │   └── pelican-toc
│   │
│   ├── publishconf.py
│   ├── tasks.py
│   └── themes
│       └── Papyrus
└── venv

```

### Image size and placement
Images can be placed on page by adding a custom class names such as `image-left`, `image-right`, `image-center` in your markdown.

Similarly, placed images can be given a size using custom classes `image-thumbnail`, `image-small`, `image-medium` and`image-large`.

You can use `<img/>` tags along with the custom image classes straight in your Markdown.

```html
<img src="{static}/images/screenshot.png" alt="screenshot" class="image-left image-medium" />
<img src="{static}/images/screenshot.png" alt="screenshot" class="image-right image-thumbnail" />

Alternatively you could use inline styling.
<img src="{static}/images/screenshot.png" alt="screenshot" style="width:200px;" />
```

### Embeding YouTube Videos
In order to have a responsiveness video tumbnail, the `<iframe>` tags must be wrapped inside the `<div class="aspect-w-16 aspect-h-9"></div>` in your markdown file.

```html
<div class="aspect-w-16 aspect-h-9">
    <iframe width="736" height="414" src="https://www.youtube.com/embed/TmWIrBPE6Bc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
</div>
```

### Tailwind CSS
If you would like to make any local changes, tailwindcss configuration files are included with the theme. First go into the Papyrus directory and install missing packages with `npm install`.
Then run the development server that watches for your changed tailwind classes inside the templates folder and updates `main.css` on the go.

```bash
# Initial installation of packages
$ cd themes/Papyrus
$ npm install

# JIT compiled main.css
$ npm run dev
```

