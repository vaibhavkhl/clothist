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

ActiveRecord::Schema.define(version: 20151130195710) do

  create_table "box_products", force: :cascade do |t|
    t.integer  "box_id"
    t.integer  "product_id"
    t.boolean  "accepted"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "box_products", ["box_id"], name: "index_box_products_on_box_id"
  add_index "box_products", ["product_id"], name: "index_box_products_on_product_id"

  create_table "boxes", force: :cascade do |t|
    t.datetime "delivery_date_requested"
    t.datetime "delivery_date_actual"
    t.string   "return_day"
    t.text     "special_instructions"
    t.decimal  "total_cost",              precision: 9, scale: 2
    t.decimal  "products_bought_cost",    precision: 9, scale: 2
    t.string   "payment_method"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "boxes", ["user_id"], name: "index_boxes_on_user_id"

  create_table "cost_preferences", force: :cascade do |t|
    t.string   "image_name"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "cost_preferences", ["user_id"], name: "index_cost_preferences_on_user_id"

  create_table "dislike_preferences", force: :cascade do |t|
    t.string   "image_name"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "dislike_preferences", ["user_id"], name: "index_dislike_preferences_on_user_id"

  create_table "leisure_preferences", force: :cascade do |t|
    t.string   "image_name"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "leisure_preferences", ["user_id"], name: "index_leisure_preferences_on_user_id"

  create_table "patterns_dislike_preferences", force: :cascade do |t|
    t.string   "image_name"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "patterns_dislike_preferences", ["user_id"], name: "index_patterns_dislike_preferences_on_user_id"

  create_table "products", force: :cascade do |t|
    t.string   "custom_id"
    t.integer  "order_id"
    t.integer  "unique_id"
    t.string   "apparel_category"
    t.string   "size"
    t.string   "source"
    t.string   "seller"
    t.string   "brand"
    t.text     "description"
    t.decimal  "original_price",   precision: 8, scale: 2
    t.decimal  "cost",             precision: 8, scale: 2
    t.decimal  "discount",         precision: 8, scale: 2
    t.string   "price_range"
    t.date     "order_date"
    t.date     "receive_date"
    t.integer  "quantity"
    t.datetime "created_at",                               null: false
    t.datetime "updated_at",                               null: false
  end

  create_table "size_profiles", force: :cascade do |t|
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

  create_table "users", force: :cascade do |t|
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
    t.string   "name"
    t.string   "email"
    t.string   "phnno"
    t.string   "dob"
    t.string   "role"
    t.text     "tokens"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email"
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  add_index "users", ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true

  create_table "work_preferences", force: :cascade do |t|
    t.string   "image_name"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "work_preferences", ["user_id"], name: "index_work_preferences_on_user_id"

end
