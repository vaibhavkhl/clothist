# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151102171036) do

  create_table "boxes", force: true do |t|
    t.datetime "delivery_date"
    t.string   "return_day"
    t.text     "special_instructions"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "boxes", ["user_id"], name: "index_boxes_on_user_id"

  create_table "costpreferences", force: true do |t|
    t.string   "image_name"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "costpreferences", ["user_id"], name: "index_costpreferences_on_user_id"

  create_table "dislikepreferences", force: true do |t|
    t.string   "image_name"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "dislikepreferences", ["user_id"], name: "index_dislikepreferences_on_user_id"

  create_table "leisurepreferences", force: true do |t|
    t.string   "image_name"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "leisurepreferences", ["user_id"], name: "index_leisurepreferences_on_user_id"

  create_table "notwearpreferences", force: true do |t|
    t.string   "image_name"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "notwearpreferences", ["user_id"], name: "index_notwearpreferences_on_user_id"

  create_table "patternsdislikepreferences", force: true do |t|
    t.string   "image_name"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "patternsdislikepreferences", ["user_id"], name: "index_patternsdislikepreferences_on_user_id"

  create_table "size_profiles", force: true do |t|
    t.string   "tshirt_size"
    t.string   "tshirt_brand"
    t.string   "shirt_size"
    t.string   "shirt_brand"
    t.string   "shirt_fit"
    t.string   "trouser_size"
    t.string   "trouser_brand"
    t.string   "trouser_fit"
    t.string   "height"
    t.string   "weight"
    t.string   "skin_color"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "size_profiles", ["user_id"], name: "index_size_profiles_on_user_id"

  create_table "unlikepatternspreferences", force: true do |t|
    t.string   "image_name"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "unlikepatternspreferences", ["user_id"], name: "index_unlikepatternspreferences_on_user_id"

  create_table "users", force: true do |t|
    t.string   "provider",                            null: false
    t.string   "uid",                    default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "phnno"
    t.string   "dob"
    t.text     "tokens"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email"
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  add_index "users", ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true

  create_table "workpreferences", force: true do |t|
    t.string   "image_name"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "workpreferences", ["user_id"], name: "index_workpreferences_on_user_id"

end
