
# GULP-WITH-BROWSER-SYNC


server: http://local.app.com:3005/


config apache:  local.app.com.conf

``` apache
<VirtualHost *:80>
    ServerName local.app.com
    DocumentRoot /var/www/html/test/02.gulpjs/workflows.anb/public
    <Directory /var/www/html/test/02.gulpjs/workflows.anb/public>
        Options Indexes FollowSymLinks Multiviews
        AllowOverride All
        Order allow,deny
        allow from all
        RewriteEngine on
    </Directory>
    SetEnv "APP_ENV" "development"
    ErrorLog ${APACHE_LOG_DIR}/local.app.com-error.log

    php_flag display_errors on
    php_flag display_startup_errors on
    php_value error_reporting 2047
</VirtualHost>
```
