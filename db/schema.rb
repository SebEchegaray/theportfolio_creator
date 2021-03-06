# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_24_121105) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "educations", force: :cascade do |t|
    t.string "institution_name", null: false
    t.string "start_month", null: false
    t.integer "start_year", null: false
    t.string "end_month", null: false
    t.integer "end_year", null: false
    t.string "degree", null: false
    t.string "field", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["id"], name: "index_educations_on_id", unique: true
  end

  create_table "work_experiences", force: :cascade do |t|
    t.string "title", null: false
    t.string "company_name", null: false
    t.string "start_month", null: false
    t.integer "start_year", null: false
    t.string "end_month", null: false
    t.integer "end_year", null: false
    t.string "industry", null: false
    t.string "description", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["id"], name: "index_work_experiences_on_id", unique: true
  end

end
