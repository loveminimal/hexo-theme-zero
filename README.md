## NOTE THAT

Because I use branch dev generally, so there has less time to update master. Recommend you try to use branch dev, too. Because someday I will merge dev to master and it may influence blog view. Like next topic:

## New Branch Dev

Just for emacs' org-mode. I write a small plugin named `jk/md-exports` based on `gfm-ox`. In fact, you need not care about it. If you swtich `dev` branch, it still run well.

```sh
# cd your-blog
git clone https://github.com/loveminimal/hexo-theme-zero.git ./themes/zero
# cd ./themes/zero
# show all remote branchs
git branch -a
# create a special branch (dev) and associate it to origin/dev
git checkout -b dev origin/dev
```

Now, you can enjoy a simpler zero.

---

## Introduction

hmm.. :) It's a version 0.0.1 . Here is a preview:

![zero](./preview/zero.png)


## Update

Hah :) Now, it can highlight code-block.

If necessary, I will add tags and categories later.


## Usage

```sh
# cd your-blog
git clone https://github.com/loveminimal/hexo-theme-zero.git ./themes/zero
```

Note that: you must disable the `highlight` of site `_config.yml`, like this:

```yml
highlight:
  enable: false
  line_number: false
  auto_detect: false
  tab_replace:
```

and update `theme` fragment as `zero`.