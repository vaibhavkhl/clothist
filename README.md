# clothist

Rails API & AngularJS SPA

#### Dependencies

ruby 2.2.3

rails 4.2.0

bundler 1.10.6

rubygems-bundler 1.4.4

node 4.2.2

npm 3.5.0

angular 1.4.7

#### ubuntu dev env setup

install rvm
```
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
\curl -sSL https://get.rvm.io | bash -s stable --ruby
```
install ruby
``` rvm install '2.2.3' ```

install bundler
``` sudo apt-get install bundler ```

install compass
``` gem install compass ```

install nodejs
```
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
```

update npm
``` sudo npm install -g npm ```

#### Running the app 
``` git clone```

starting rails server
```
cd server
bundle install
bundle exec rake db:migrate
rails s
```
frontend-
```
cd client
npm install
bower install
grunt serve
```
#### Deploy to Heroku
build frontend assests & push
```
grunt build
copy content of dist folder and paste it server/public
git subtree push --prefix server heroku master
```
# E2E Testing with Protractor

1. Install protractor: npm install -g protractor
2. Get an instance of selenium server: webdriver-manager update
3. Start up a server: webdriver-manager start
4. Write a Test
5. Add a configuration file e.g protractor.conf.js
6. Run the test: protractor protractor.conf.js
