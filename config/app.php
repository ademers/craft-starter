<?php
/**
 * Yii Application Config
 *
 * Edit this file at your own risk!
 *
 * The array returned by this file will get merged with
 * vendor/craftcms/cms/src/config/app.php and app.[web|console].php, when
 * Craft's bootstrap script is defining the configuration for the entire
 * application.
 *
 * You can define custom modules and system components, and even override the
 * built-in system components.
 *
 * If you want to modify the application config for *only* web requests or
 * *only* console requests, create an app.web.php or app.console.php file in
 * your config/ folder, alongside this one.
 */

//  Require for 'id' => App::env('APP_ID') ?: 'CraftCMS',
use craft\helpers\App;

return [
    '*' => [
        'id' => App::env('APP_ID') ?: 'CraftCMS',
        'modules' => [
            'my-module' => \modules\Module::class,
        ],
        //'bootstrap' => ['my-module'],
    ],

    'dev' => [
        'components' => [
            'redis' => [
                'class' => yii\redis\Connection::class,
                'hostname' => 'redis.service.nitro',
                'port' => 6379,
                // NOTE: Ensure that database is not same as other sites running on Nitro 2
                'database' => 1,
                // NOTE: Appears to not be needed in Nitro 2
                // 'password' => App::env('REDIS_PASSWORD'),
            ],
            'cache' => [
                'class' => yii\redis\Cache::class,
                'defaultDuration' => 86400,
                'keyPrefix' => App::env('APP_ID') ?: 'CraftCMS',
            ],
        ],
    ]
];
