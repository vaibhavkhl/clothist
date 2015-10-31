class CreateBoxes < ActiveRecord::Migration
  def change
    create_table :boxes do |t|
      t.datetime :delivery_date
      t.string :return_day
      t.text :special_instructions
      t.references :user, index: true

      t.timestamps
    end
  end
end
