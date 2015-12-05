# clothist

### Git workflow & branches
  Todo: Any commit in master branch will automatically deploy code to production.
  Same for staging branch.
  
- Master -> We consider origin/master to be the main branch where the s
  ource code of HEAD always reflects a production-ready state.

- Staging -> This branch will have the code with the latest changes 
  for the next production release. Tha changes should be merged to master by pull request.

Read more http://nvie.com/posts/a-successful-git-branching-model

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
### Heroku

We have two environments in Heroku.

#### Production
```heroku info -a clothist```
```
=== clothist
Addons:        heroku-postgresql:hobby-dev
Dynos:         web: 1
Git URL:       git@heroku.com:clothist.git
Owner:         vaibhav.khl@gmail.com
Region:        us
Repo Size:     1 MB
Slug Size:     30 MB
Stack:         cedar-14
Web URL:       https://clothist.herokuapp.com/
```

#### Staging
```heroku info -a clothist-staging```
```
=== clothist-staging
Addons:        heroku-postgresql:hobby-dev
Dynos:         web: 1
Git URL:       git@heroku.com:clothist-staging.git
Owner:         vaibhav.khl@gmail.com
Region:        us
Repo Size:     629 kB
Slug Size:     30 MB
Stack:         cedar-14
Web URL:       https://clothist-staging.herokuapp.com/
```

build frontend assests & push
```
grunt build
copy content of dist folder and paste it server/public
git subtree push --prefix server staging master
```
#### E2E Testing with Protractor

1. Install protractor: npm install -g protractor
2. Get an instance of selenium server: webdriver-manager update
3. Start up a server: webdriver-manager start
4. Write a Test
5. Add a configuration file e.g protractor.conf.js
6. Run the test: protractor protractor.conf.js

#### E2E Testing with Grunt
1. npm run selenium_setup
2. npm run start_selenium_server
3. grunt
