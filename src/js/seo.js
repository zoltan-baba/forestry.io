import contentLoaded from "content-loaded"
import SEOChecker from "./imports/seoChecker"

/**
 * Enable console logging of SEO data for auditing
 */
contentLoaded().then(() => {
  const seoChecker = new SEOChecker()
})
