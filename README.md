# WebApp with Vue (vue-router, vuex, vue-chartjs) and Laravel

[See a Demo](https://www.flightapp.jeremiechazelle.dev/search)

## How to launch

Clone the repository :

    git clone https://github.com/jechazelle/flight.git

Download and install composer :

    https://getcomposer.org/download/

### Back (Laravel)

    cd Back
    sudo chmod -R 777 bootstrap/cache && sudo chmod -R 777 storage
    composer install
    php artisan serve --port=8000

### Front (Vue.js)

    cd Front
    npm install
    npm run serve
    