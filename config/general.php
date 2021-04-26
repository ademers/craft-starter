<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

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
        // End custom configs settings
    ],
    // Production environment settings
    'production' => [
        // Set this to `false` to prevent administrative changes from being made on production
        // 'allowAdminChanges' => true,
    ],
    // Staging environment settings
    'staging' => [
        // Set this to `false` to prevent administrative changes from being made on staging
        // 'allowAdminChanges' => true,
    ],
    // Dev environment settings
    'dev' => [
        // 'siteUrl' => 'http://craft-starter.test',
        // Dev Mode (see https://craftcms.com/guides/what-dev-mode-does)
        'devMode' => true,
        'allowAdminChanges' => true,
    ],
];
