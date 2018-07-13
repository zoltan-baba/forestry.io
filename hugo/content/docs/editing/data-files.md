---
aliases:
- "/docs/managing-content/data-files/"
title: Data Files
weight: 5
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2018-05-25 20:00:00 +0000
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  docs:
    parent: Editing
    weight: 5

---
Data files are pieces of content that don’t belong to a specific page or piece of content. They are commonly used for managing content like social media handles and links, contact information, and branding (e.g, logo images and site colours).

![](/uploads/2018/01/11.png)

Forestry allows you to edit existing data files. They can be found under _Data_ in the sidebar.

## Customizing Fields

You can also apply [Front Matter Templates](/docs/settings/front-matter-templates/#applying-fmts-to-content) to your data files, allowing configuration of the fields that are displayed in the CMS. To do so, navigate to the Data File you want to customize:

1. Click the settings button in the top right, next to the "Save" button
2. Click "Change Template"
3. Choose the Front Matter Template you want and click "Done"

{{% warning %}}

**Jekyll users:**

In order to use Front Matter Templates with data files, you will need to place all of your fields inside of a [Field Group](/docs/settings/fields/field-group/) with the same name as the name of your data file. 

For example, if you want to create a FMT for a data file named `social.yml`, you will need to place your fields in a Field Group with the name of `social`:

```
fields:
- type: field_group
  name: social
  label: Social
  fields:
  - type: text
    name: twitter_url
    label: Twitter URL
  - type: text
    name: facebook_url
    label: Facebook URL
```

This will be improved in a future update.

{{% /warning %}}

## Futher Reading

* [Hugo's Data Template Docs](https://gohugo.io/templates/data-templates/)
* [Jekyll's Data File Docs](https://jekyllrb.com/docs/datafiles/)