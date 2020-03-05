# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|integer|null: false, unique: true, foreign_key: true|
|password|integer|null false, foreign_key: true|
|nickname|string|null: false, foreign_key: true|

### Association
- has_many :tweets
- has_many :groups_users
- has_many :users_through.groups_users


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|groupname|string|null: false, foregin_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- has_many :users_thorough.group_users
- has_many :tweets
- has_many :groups_users

## tweetsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false, foregin_key: true|
|image|string|null: false, foregin_key: true|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user