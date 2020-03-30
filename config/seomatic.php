<?php
/**
 * SEOmatic plugin for Craft CMS 3.x
 *
 * A turnkey SEO implementation for Craft CMS that is comprehensive, powerful,
 * and flexible
 *
 * @link      https://nystudio107.com
 * @copyright Copyright (c) 2017 nystudio107
 */

/**
 * @author    nystudio107
 * @package   Seomatic
 * @since     3.0.0
 */

/**
 * SEOmatic config.php
 *
 * This file exists only as a template for the SEOmatic settings.
 * It does nothing on its own.
 *
 * Don't edit this file, instead copy it to 'craft/config' as 'seomatic.php'
 * and make your changes there to override default settings.
 *
 * Once copied to 'craft/config', this file will be multi-environment aware as
 * well, so you can have different settings groups for each environment, just as
 * you do for 'general.php'
 */

return [
    '*' => [
        // The public-facing name of the plugin
        'pluginName' => 'SEOmatic',

        // Should SEOmatic render metadata?
        'renderEnabled' => true,

        // Should SEOmatic render frontend sitemaps?
        'sitemapsEnabled' => true,

        // Should sitemaps be regenerated automatically?
        'regenerateSitemapsAutomatically' => true,

        // Should SEOmatic add to the http response headers?
        'headersEnabled' => true,

        // Should SEOmatic display the SEO Preview sidebar?
        'displayPreviewSidebar' => true,

        // Should SEOmatic add a Social Media Preview Target?
        'socialMediaPreviewTarget' => true,

        // The social media platforms that should be displayed in the SEO Preview sidebar
        'sidebarDisplayPreviewTypes' => [
            'google',
            'twitter',
            'facebook'
        ],

        // Should SEOmatic display the SEO Analysis sidebar?
        'displayAnalysisSidebar' => true,

        // If `devMode` is on, prefix the <title> with this string
        'devModeTitlePrefix' => '&#x1f6a7; ',

        //  Prefix the Control Panel <title> with this string
        'cpTitlePrefix' => '&#x2699; ',

        // If `devMode` is on, prefix the Control Panel <title> with this string
        'devModeCpTitlePrefix' => '&#x1f6a7;&#x2699; ',

        // The separator character to use for the `<title>` tag
        'separatorChar' => '|',

        // The max number of characters in the `<title>` tag
        'maxTitleLength' => 70,

        // The max number of characters in the `<meta name="description">` tag
        'maxDescriptionLength' => 155,

        // Site Groups define logically separate sites
        'siteGroupsSeparate' => true,

        // Whether to dynamically include the hreflang tags
        'addHrefLang' => true,

        // Should the Canonical URL be automatically lower-cased?
        'lowercaseCanonicalUrl' => true,

        // Should the meta generator tag and X-Powered-By header be included?
        'generatorEnabled' => true,

        // SEOmatic uses the Craft `siteUrl` to generate the external URLs.  If you
        // are using it in a non-standard environment, such as a headless GraphQL or
        // ElementAPI server, you can override what it uses for the `siteUrl` below.
        'siteUrlOverride' => '',

        // SeoElementInterface[] The default SeoElement type classes
        'defaultSeoElementTypes' => [
        ],
    ],

    'production' => [
        // The server environment, either `live`, `staging`, or `local`
        'environment' => 'live',
    ],
    'staging' => [
        // The server environment, either `live`, `staging`, or `local`
        'environment' => 'staging',
    ],
    'dev' => [
        // The server environment, either `live`, `staging`, or `local`
        'environment' => 'local',
    ],
];

