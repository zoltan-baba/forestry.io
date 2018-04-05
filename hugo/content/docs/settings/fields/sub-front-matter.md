---
aliases:
- "/docs/front-matter-fields/sub-front-matter/"
title: Sub Front Matter
publishdate: 2017-04-10 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-04-10 00:00:00 -0400

---
## Options
![](/uploads/2018/04/sub-front-matter.png)

* _Label_ – the human-friendly label shown above the input field in the editor.
* _Name_ – the key stored in your content’s front matter, used to access it in your templates.
* _Description_ – a human friendly description of what the field does and/or instructions for your editors.
* _Hidden_ – hides the field in the editor, but allows developers to set default values or maintain the field for legacy purposes.
* _Template_ – selects a Front Matter Template that should be included as a component to the current Front Matter Template

## Field UI
![](/uploads/2018/04/sub-front-matter-preview.png)

## Templating
You can access this field in your templates using the field’s `name`.

#### Hugo


#### Jekyll


## Config Files
You can configure this field in _Front Matter Template_ [Config Files](/docs/settings/config-files/) as follows:

```
type: sub_front_matter
name: [String]
label: [String]
description: [String]
hidden: [true|false]
template: [String]
```

### Example
```
type: sub_front_matter
name: seo
label: SEO
description: Adds basic SEO fields to the Front Matter template
hidden: false
template: seo
```