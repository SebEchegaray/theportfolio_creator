class CreateWorkExperiences < ActiveRecord::Migration[6.1]
  def change
    create_table :work_experiences do |t|
      t.integer :id, limit: 10
      t.string :title, null: false
      t.string :company_name, null: false
      t.string :start_month, null: false
      t.integer :start_year, null: false
      t.string :end_month, null: false
      t.integer :end_year, null: false
      t.string :industry, null: false
      t.string :description, null: false

      t.timestamps
    end
    add_index :work_experiences, :id, unique: true
  end
end
