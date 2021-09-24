class CreateEducations < ActiveRecord::Migration[6.1]
  def change
    create_table :educations do |t|
      t.integer :id, limit: 10
      t.string :institution_name, null: false
      t.string :start_month, null: false
      t.integer :start_year, null: false
      t.string :end_month, null: false
      t.integer :end_year, null: false
      t.string :degree, null: false
      t.string :field, null: false

      t.timestamps
    end
    add_index :educations, :id, unique: true
  end
end
