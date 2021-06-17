<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\helpers\App;

return [
    // Global settings
    '*' => [
        // Start default configs settings
        // Prevents error message. See https://nystudio107.com/blog/exploring-the-craft-cms-3-console-command-line-interface-cli#clear-caches
        'resourceBasePath' => dirname(__DIR__) . '/web/cpresources',
        // Default Week Start Day (0 = Sunday, 1 = Monday...)
        'defaultWeekStartDay' => 1,

        // Whether generated URLs should omit "index.php"
        'omitScriptNameInUrls' => true,

        // Control Panel trigger word
        'cpTrigger' => 'admin',

        // The secure key Craft will use for hashing and encrypting data
        'securityKey' => getenv('SECURITY_KEY'),

        // Whether to save the project config out to config/project.yaml
        // (see https://docs.craftcms.com/v3/project-config.html)
        'useProjectConfigFile' => true,
        // End default config settings

        // Start custom configs settings
        'allowAdminChanges' => false,
        'backupOnUpdate' => true,
        'defaultTokenDuration' => 'P2W',
        'enableCsrfProtection' => true,
        'enableGql' => false,
        'generateTransformsBeforePageLoad' => true,
        'timezone' => 'America/Toronto',
        'aliases' => [
            '@assetsBaseUrl' => App::env('ASSETS_BASE_URL'),
            '@assetsBasePath' => App::env('ASSETS_BASE_URL'),
            '@web' => App::env('DEFAULT_SITE_URL'),
            '@webroot' => App::env('WEB_ROOT_PATH'),
        ]
        // End custom configs settings
    ],
    // Production environment settings
    'production' => [
        // Set this to `true` to allow administrative changes from being made on production
        // 'allowAdminChanges' => true,
    ],
    // Staging environment settings
    'staging' => [
        // Set this to `true` to prevent administrative changes from being made on staging
        // 'allowAdminChanges' => true,
    ],
    // Dev environment settings
    'dev' => [
        // Dev Mode (see https://craftcms.com/guides/what-dev-mode-does)
        'devMode' => true,
        'allowAdminChanges' => true,
    ],
];
