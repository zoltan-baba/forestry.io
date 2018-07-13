---
title: Config Files
weight: 4
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 04:00:00 +0000
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  docs:
    parent: Settings & Configuration
    weight: 4

---
Forestry stores the settings and configuration of the CMS for each site in a `.forestry/` folder in your site’s source code. This allows developers to create default configurations that can be shared between multiple sites, and to deliver source code with Forestry CMS pre-configured.

When importing a new site, a `.forestry/` folder will be added to your site’s source. Any changes made to your CMS’ configuration will be committed to your site’s source in this folder.

## Site Settings

Your site settings are configured from `.forestry/settings.yml`.

The following is an example of `settings.yml` for a Hugo site.

    ---
    upload_path: "/static/uploads/:year:/:month:/:day:"
    frontmatter_file_url_template: "/uploads/:year:/:month:/:day:"
    body_file_url_template: "/uploads/:year:/:month:/:day:"
    new_page_extension: md
    auto_deploy: false
    admin_path: "/admin"
    webhook_url: http://example.com/webhook
    sections:

    - path: content
      label: Pages
      create: all
      # Imported pages without a FMT assigned
      # will automatically use "pages"
      default_front_matter_template: pages

    - path: content/posts
      label: Posts
      create: all
      default_front_matter_template: posts
      # use the "templates" parameter to control
      # which templates can be used for new content
      # in this section. First listed template
      # is the default option.
      templates:
      - posts

    # items in content/secrets is hidden from menu
    - path: content/secrets
      hidden: true

    # items in content/products can be edited but not created
    - path: content/products
      label: Products
      create: none
    version: 0.38.1
    ---

### Options

**Admin Path** `admin_path:` `string`

Allows you to configure the path where the Remote Admin will be deployed.

---

**Upload Path** `upload_path:` `string`

Allows you to configure the path where media assets are uploaded

---

**Front Matter File URL Template** `frontmatter_file_url_template:` `string`

Allows you to configure the path that is set when adding images to Front Matter Fields. _Note: this value is set at upload time._

---

**Body File URL Template** `body_file_url_template:` `string`

Allows you to configure the path that is used when adding images to the body of a page. _Note: this value is set at upload time._

---

**New Page Extension** `new_page_extension:` `md|html`

Allows you to configure whether new pages are created as `.md` or `.html` files.

---

**Auto Deploy** `auto_deploy:` `boolean`

Allows you to configure if publishing should be triggered when a commit is made to the source repository.

---

**Web Hook URL** `webhook_url:` `string`

Allows you to provide a [web hook](/docs/hosting/webhooks/) to be triggered when events occur in Forestry.

---

**Version** _(Hugo-only)_ `version:` `string`
This allows you to configure the version of Hugo your site uses. This is limited to the latest versions of Hugo [supported by Forestry](https://forestry.io/docs/faq/what-versions-of-hugo-do-you-support/).

---

**Sections** _(Hugo only)_ `sections:` `Array`

**Collections** _(Jekyll only)_ `collections:` `Array`

This setting allows you to control the way users are able to edit your different content sections.

{{% warning %}}
Currently, Hugo sites use the `sections` parameter for this information, and Jekyll sites use `collections`.
<br /><br />
As we move toward consistency in configuration and app behavior, these settings will likely converge into a single parameter, but make note of the difference for now.
{{% /warning %}}

## Section/Collection Options

_Sidebar Order_

Sections/Collections will appear in the sidebar in the same order they are defined in your `sections`/`collections` section.

---

**Path**

This option identifies the path to the collection you intend to configure. Note that this should be the full path from the root of your site, so a Hugo section of `posts` for example would have a path of `content/posts`.

{{% tip %}}
Currently, you can only configure content sections that already exist in your file structure. Defining new sections/collections that do not exist in your project will have no effect.
{{% /tip %}}

Example:

    collections:
    - path: _posts
---

**Default Front Matter Template** `default_front_matter_template:` `string`

The Front Matter Template applied to any pages without a Front Matter Template. Set the value to the file name of the Front Matter Template without the file extension, or `none` to remove the current template from the section.

Example:

    sections:
    - path: content/posts
      default_front_matter_template: example-template
---

**Label** `label:` `string`

Change the text that appears for this section in the content navigation sidebar.

Example:

    collections:
    - path: _posts
      label: News
---

**Hidden** `hidden:` `boolean`

When `true`, this section will not be visible in the content navigation sidebar.

Example:

    sections:
    - path: content/posts
      hidden: true
---

**Create** `create:` `all|none`

When this is set to `all`, content can be added normally. When set to `none`, existing content items can be edited, but no new ones can be created.

Example:

    collections:
    - path: _posts
      create: all
---

**Templates** `templates:` `Array`

Pass in an array of Front Matter Template slugs (without their extension) to limit the available Front Matter Templates when creating a new content item in this section. The templates will be shown in the dropdown in the same order they are listed here, with the first template being the default selection. If only one template is defined, the template selection dropdown will not appear when adding new content.

Example:

    sections:
    - path: content/posts
      templates:
      - post
      - newsletter

---

## Front Matter Templates

The configuration files for Front Matter Templates is found in `.forestry/front_matter/templates/`. Each Front Matter Template is stored as a separate file.

When importing a site for the first time in Forestry, these configuration files will take precedence over autogeneration from any Jekyll defaults or Hugo archetypes.

The following is an example of a front matter template configuration file.

    homepage.yml
    ---
    pages:
    - index.md
    hide_body: false
    fields:
    - name: title
      default: ''
      label: Title
      hidden: false
      type: text
    - name: publishDate
      default: ''
      label: Date
      hidden: false
      type: datetime
    - name: Categories
      default: []
      label: Categories
      hidden: false
      type: list
    ---

### Options

**Pages** `pages:` `array`

Provide an array of relative page paths that you want the front matter template to apply to.

For Jekyll, provide the relative path from the project root, e.g, `_posts/2017-01-01-example.md`.

For Hugo, provide the relative path from your content directory, e.g, `posts/2017-01-01-example.md`.

_Note: if a page is defined in multiple Front Matter Templates, the last Front Matter Template in alphanumerically order will be applied._

---

**Hide Body** `hide_body:` `boolean`

Toggle the display of the body editor on or off for this Front Matter Template.

---

**Fields** `fields:` `array`

The array of fields in this front matter template. They follow a standard format:

* `type` `string` The field type.
* `name` `string` The name or key of the field
* `label` `string` The label displayed in the CMS interface
* `description` `string` Help text that appears above the field
* `hidden` `boolean` Toggle display of the field in the interface on or off
* `config` `object` Field-specific configuration options
* `fields` `array` An array of fields. For field groups and repeatable field groups only.

For a comprehensive overview of field configuration, see the [field type documentation](/docs/settings/fields).

### Removing Files

To prevent the accidental deletion of Front Matter Templates, Front Matter Templates **must** be removed using the interface in the CMS.

Any configuration files removed from the repo will remain in the CMS and be re-added to your site’s source on the next save or publish unless removed in Forestry.

### Renaming Files

Changing the name of a Front Matter Template in Forestry will rename the config file in the repository.

Changing the file name of a config file in your repository will not rename the Front Matter Template in Forestry. Instead, a new Front Matter Template will be created with the new name, and the original template will remain in Forestry.

### Adding New Files

New Front Matter Templates can be added to your repository, and will be added to the CMS upon import.

Front Matter Template config files have a strict naming convention:

* File names must be all lowercase
* File names must use dashes in place of spaces
* File names can not contain underscores or other special characters

E.g, `Example Template` becomes `example-template.yml`